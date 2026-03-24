'use client';

import { Label } from '@/components/ui/label';

export function HeroTags() {
  const tags = [
    'Product UX',
    'Product strategy',
    'Information architecture',
    'User Interface',
    'User experience',
    'Design systems',
    'MVP development',
  ];

  // Repeat the tags multiple times to guarantee no visual gaps on wide screens.
  const loopTags = Array.from({ length: 10 }).flatMap(() => tags);

  return (
    <section className="w-full border-t border-b border-[var(--border-subtle)] bg-transparent">
      <div className="w-full py-8">
        <div className="relative hero-tags-viewport">
          <div className="hero-tags-marquee flex">
            <div className="hero-tags-track flex gap-[var(--spacing-0-5)] whitespace-nowrap">
              {loopTags.map((tag, index) => (
                <Label key={`${tag}-${index}`}>{tag}</Label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local (global) styles to keep this change tightly scoped */}
      <style jsx global>{`
        .hero-tags-viewport {
          overflow: hidden;
        }

        .hero-tags-marquee {
          width: 100%;
        }

        .hero-tags-track {
          width: max-content;
          will-change: transform;
          animation: hero-tags-marquee 220s linear infinite;
        }

        @keyframes hero-tags-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-tags-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}