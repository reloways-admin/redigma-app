'use client';

import { useCallback, useEffect, useRef } from 'react';
import { HERO_BOARD_SVG } from './hero-board-markup';

type Offset = { x: number; y: number };

/**
 * The sketch board under the hero.
 *
 * The shapes can be picked up and moved, which is the point: the hero claims
 * to bring clarity to products, and a board you can actually rearrange makes
 * that concrete rather than decorative.
 *
 * The markup is inlined (see hero-board-markup.ts) because an SVG inside an
 * <img> is unreachable from both CSS and JS.
 */
export function HeroBoard({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  // Where each shape has been dragged to, in SVG user units.
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

    // The pointer moves in screen pixels; the shapes live in viewBox units.
    const scale = () => {
      const box = svg.viewBox.baseVal;
      const rect = svg.getBoundingClientRect();
      return rect.width > 0 ? box.width / rect.width : 1;
    };

    const cleanups: Array<() => void> = [];

    for (const item of items) {
      const key = item.dataset.shape ?? '';
      let start: { px: number; py: number; ox: number; oy: number } | null = null;

      const onPointerDown = (e: PointerEvent) => {
        // Left button / touch / pen only.
        if (e.button !== 0) return;
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

    return () => cleanups.forEach((fn) => fn());
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
