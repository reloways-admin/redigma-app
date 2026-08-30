'use client';

import { useCallback, useEffect, useRef } from 'react';
import { HERO_BOARD_SVG } from './hero-board-markup';

type Offset = { x: number; y: number };

/** Beat before the drop, so the board is first seen composed. */
const SETTLE_DELAY = 700;
/** Gap between each shape starting to fall. */
const STAGGER = 110;
const FALL_MS = 900;
/** Gap left under the shapes when they land. */
const FLOOR_MARGIN = 10;

/**
 * The sketch board under the hero.
 *
 * The shapes start arranged, drop to the bottom of the board, and wait there
 * to be picked up and placed back on the canvas. It fits what the hero claims:
 * the page says it brings clarity to products, and a board you actually
 * arrange yourself makes that concrete rather than decorative.
 *
 * The markup is inlined (hero-board-markup.ts) because an SVG inside an <img>
 * is unreachable from both CSS and JS.
 */
export function HeroBoard({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  /** Where each shape currently sits, in SVG user units. */
  const offsets = useRef(new Map<string, Offset>());

  const apply = useCallback((item: SVGGElement, o: Offset) => {
    item.style.transform = `translate(${o.x}px, ${o.y}px)`;
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const svg = root.querySelector('svg');
    if (!svg) return;

    const items = Array.from(root.querySelectorAll<SVGGElement>('.board-item'));
    const floor = svg.viewBox.baseVal.height - FLOOR_MARGIN;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── The drop ────────────────────────────────────────────────────────────
    const timers: number[] = [];
    const running = new Map<string, Animation>();

    items.forEach((item, i) => {
      const key = item.dataset.shape ?? '';
      const bbox = item.getBBox();
      const landing = { x: 0, y: floor - (bbox.y + bbox.height) };

      // Never lift a shape that already sits below the floor line.
      if (landing.y <= 0) {
        offsets.current.set(key, { x: 0, y: 0 });
        item.classList.add('has-landed');
        return;
      }

      const land = () => {
        offsets.current.set(key, landing);
        apply(item, landing);
        item.classList.add('has-landed');
      };

      if (reduced) {
        land();
        return;
      }

      timers.push(
        window.setTimeout(() => {
          const anim = item.animate(
            [
              { transform: 'translate(0px, 0px)' },
              // Accelerate on the way down, like something dropping.
              { transform: `translate(0px, ${landing.y}px)`, offset: 0.72, easing: 'cubic-bezier(0.45, 0, 0.9, 0.35)' },
              // Small hop, then settle, so the landing has some weight.
              { transform: `translate(0px, ${landing.y - 12}px)`, offset: 0.86 },
              { transform: `translate(0px, ${landing.y}px)` },
            ],
            { duration: FALL_MS, easing: 'linear', fill: 'forwards' },
          );
          running.set(key, anim);

          const settle = () => {
            // Hand the position back to inline style so dragging can take over
            // cleanly; a filled animation would otherwise win.
            anim.cancel();
            running.delete(key);
            land();
          };

          anim.finished.then(settle).catch(() => {
            /* cancelled because the user grabbed it mid-fall */
          });

          // Safety net. Browsers throttle or pause animations in background
          // tabs, so `finished` can be a long time coming or never arrive. Land
          // it anyway once the fall should have ended, otherwise the object
          // would hang in mid-air and never invite a grab.
          timers.push(
            window.setTimeout(() => {
              if (running.has(key)) settle();
            }, FALL_MS + 200),
          );
        }, SETTLE_DELAY + i * STAGGER),
      );
    });

    // ── Dragging ────────────────────────────────────────────────────────────
    const scale = () => {
      const rect = svg.getBoundingClientRect();
      return rect.width > 0 ? svg.viewBox.baseVal.width / rect.width : 1;
    };

    const cleanups: Array<() => void> = [];

    for (const item of items) {
      const key = item.dataset.shape ?? '';
      let start: { px: number; py: number; ox: number; oy: number } | null = null;

      const onPointerDown = (e: PointerEvent) => {
        if (e.button !== 0) return;

        // Grabbing mid-fall: freeze it where it is and take over from there.
        const anim = running.get(key);
        if (anim) {
          const m = new DOMMatrixReadOnly(getComputedStyle(item).transform);
          offsets.current.set(key, { x: m.e, y: m.f });
          anim.cancel();
          running.delete(key);
          apply(item, { x: m.e, y: m.f });
          item.classList.add('has-landed');
        }

        const current = offsets.current.get(key) ?? { x: 0, y: 0 };
        start = { px: e.clientX, py: e.clientY, ox: current.x, oy: current.y };
        item.classList.add('is-dragging');
        item.setPointerCapture(e.pointerId);
        e.preventDefault();
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!start) return;
        const k = scale();
        const next = {
          x: start.ox + (e.clientX - start.px) * k,
          y: start.oy + (e.clientY - start.py) * k,
        };
        offsets.current.set(key, next);
        apply(item, next);
      };

      const end = (e: PointerEvent) => {
        if (!start) return;
        start = null;
        item.classList.remove('is-dragging');
        if (item.hasPointerCapture(e.pointerId)) item.releasePointerCapture(e.pointerId);
      };

      item.addEventListener('pointerdown', onPointerDown);
      item.addEventListener('pointermove', onPointerMove);
      item.addEventListener('pointerup', end);
      item.addEventListener('pointercancel', end);

      cleanups.push(() => {
        item.removeEventListener('pointerdown', onPointerDown);
        item.removeEventListener('pointermove', onPointerMove);
        item.removeEventListener('pointerup', end);
        item.removeEventListener('pointercancel', end);
      });
    }

    return () => {
      timers.forEach(clearTimeout);
      running.forEach((a) => a.cancel());
      cleanups.forEach((fn) => fn());
    };
  }, [apply]);

  return (
    <div
      ref={rootRef}
      className={['board', className].filter(Boolean).join(' ')}
      // Local, static markup generated from our own asset at build time.
      dangerouslySetInnerHTML={{ __html: HERO_BOARD_SVG }}
    />
  );
}

export default HeroBoard;
