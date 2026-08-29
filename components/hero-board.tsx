import { HERO_BOARD_SVG } from './hero-board-markup';

/**
 * The sketch board under the hero.
 *
 * The markup is inlined so the four shapes can be animated. Rendering it
 * through next/image would put the SVG inside an <img>, where CSS cannot
 * reach anything within it.
 */
export function HeroBoard({ className }: { className?: string }) {
  return (
    <div
      className={['board', className].filter(Boolean).join(' ')}
      // Local, static markup generated from our own asset at build time.
      dangerouslySetInnerHTML={{ __html: HERO_BOARD_SVG }}
    />
  );
}

export default HeroBoard;
