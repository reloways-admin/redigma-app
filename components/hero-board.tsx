'use client';

import { useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { HERO_BOARD_SVG } from './hero-board-markup';

type Offset = { x: number; y: number };

/** Beat before the drop, so the board is first seen composed. */
const SETTLE_DELAY = 350;
/** Gap between each shape starting to fall. */
const STAGGER = 60;
const FALL_MS = 450;
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
  const cursorRef = useRef<HTMLDivElement>(null);
  /** Where each shape currently sits, in SVG user units. */
  const offsets = useRef(new Map<string, Offset>());

  const t = useTranslations('home.hero.board');
  const dragLabel = t('drag');
  const draggingLabel = t('dragging');
  // Held in a ref so the setup effect below never has to re-run (and restart
  // the drop) just because a label string changed identity.
  const labels = useRef({ drag: dragLabel, dragging: draggingLabel });
  useEffect(() => {
    labels.current = { drag: dragLabel, dragging: draggingLabel };
  }, [dragLabel, draggingLabel]);

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

    // ── Custom cursor ───────────────────────────────────────────────────────
    // A small black pill replaces the pointer over a draggable shape: "Drag"
    // on hover, "Dragging" while one is held. Mouse and trackpad only. Coarse
    // pointers have no cursor to replace, so they are left alone.
    const pill = cursorRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let hovering = false;
    let dragging = false;

    const paintCursor = (x: number, y: number, held: boolean) => {
      if (!pill) return;
      pill.style.transform =
        `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${held ? 1.08 : 1})`;
    };

    const showCursor = (e: PointerEvent, held: boolean) => {
      if (!pill || e.pointerType !== 'mouse' || !finePointer.matches) return;
      pill.textContent = held ? labels.current.dragging : labels.current.drag;
      paintCursor(e.clientX, e.clientY, held);
      pill.classList.add('is-visible');
    };

    const hideCursor = () => pill?.classList.remove('is-visible');

    const onWindowPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || !(hovering || dragging)) return;
      paintCursor(e.clientX, e.clientY, dragging);
    };

    window.addEventListener('pointermove', onWindowPointerMove);
    window.addEventListener('blur', hideCursor);

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
        dragging = true;
        document.body.classList.add('is-dragging-board');
        showCursor(e, true);
        e.preventDefault();
      };

      const onPointerEnter = (e: PointerEvent) => {
        hovering = true;
        if (!dragging) showCursor(e, false);
      };

      const onPointerLeave = () => {
        hovering = false;
        if (!dragging) hideCursor();
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
        dragging = false;
        document.body.classList.remove('is-dragging-board');
        if (hovering && e.pointerType === 'mouse') showCursor(e, false);
        else hideCursor();
      };

      item.addEventListener('pointerdown', onPointerDown);
      item.addEventListener('pointermove', onPointerMove);
      item.addEventListener('pointerup', end);
      item.addEventListener('pointercancel', end);
      item.addEventListener('pointerenter', onPointerEnter);
      item.addEventListener('pointerleave', onPointerLeave);

      cleanups.push(() => {
        item.removeEventListener('pointerdown', onPointerDown);
        item.removeEventListener('pointermove', onPointerMove);
        item.removeEventListener('pointerup', end);
        item.removeEventListener('pointercancel', end);
        item.removeEventListener('pointerenter', onPointerEnter);
        item.removeEventListener('pointerleave', onPointerLeave);
      });
    }

    return () => {
      timers.forEach(clearTimeout);
      running.forEach((a) => a.cancel());
      cleanups.forEach((fn) => fn());
      window.removeEventListener('pointermove', onWindowPointerMove);
      window.removeEventListener('blur', hideCursor);
      document.body.classList.remove('is-dragging-board');
    };
  }, [apply]);

  return (
    <>
      <div
        ref={rootRef}
        className={['board', className].filter(Boolean).join(' ')}
        // Local, static markup generated from our own asset at build time.
        dangerouslySetInnerHTML={{ __html: HERO_BOARD_SVG }}
      />
      {/* Filled in by the effect above. Decorative: it only restates the
          affordance the shapes already carry. */}
      <div ref={cursorRef} className="drag-cursor" aria-hidden="true" />
    </>
  );
}

export default HeroBoard;
