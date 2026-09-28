'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

/**
 * The testimonials, in one place. Add a card by adding an entry here: `key`
 * points at messages/*.json under home.testimonials.items, everything else is
 * the same across locales.
 */
const TESTIMONIALS = [
  {
    key: 'keren',
    company: 'Method Queen',
    role: 'Owner',
    imageSrc: '/images/home/keren.jpg',
  },
  {
    key: 'adi',
    company: 'Financial Cat',
    role: 'CEO',
    imageSrc: '/images/home/adi.jpg',
  },
  {
    // Eyal works under his own name rather than a company, so his site stands
    // in for the company line the other cards use.
    key: 'eyal',
    company: 'eyallahav.com',
    role: undefined,
    imageSrc: '/images/home/eyal.jpg',
  },
] as const;

/**
 * Four passes of the list make the track. The animation shifts it by exactly
 * half its width, so passes 0 and 1 hand over to passes 2 and 3 with no seam,
 * and half a track is wider than any viewport we care about, so the loop never
 * shows an empty stretch.
 */
const MARQUEE_PASSES = [0, 1, 2, 3];

function TestimonialCard({
  company,
  quote,
  author,
  role,
  imageSrc,
}: {
  company?: string;
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
}) {
  return (
    /* The spacing between cards lives here as a margin rather than as a flex
       gap on the track. A gap would fall between the passes too, and then half
       the track width is no longer exactly two passes, which is the number the
       seamless loop is built on. */
    <div className="me-6 flex h-full w-[85vw] max-w-[340px] shrink-0 flex-col gap-6 rounded-2xl border border-[var(--border-subtle)] bg-white p-8 md:w-[420px] md:max-w-none">
      {company ? (
        <p className="text-base font-bold text-[var(--text-primary)]">{company}</p>
      ) : null}

      {/* The quote is the point of the card, so it is set above body size. */}
      <blockquote className="flex-1 type-body leading-relaxed text-[var(--text-primary)]">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        {imageSrc ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image src={imageSrc} alt="" fill className="object-cover" sizes="44px" />
          </div>
        ) : (
          <div className="h-11 w-11 shrink-0 rounded-full bg-[#732fff]/10 flex items-center justify-center">
            <span className="text-sm font-semibold text-[#732fff]">
              {author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">{author}</p>
          {role ? (
            <p className="text-sm text-[var(--text-secondary)]">{role}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * Client feedback, as a marquee.
 *
 * It scrolls on its own and the visitor cannot grab it: no drag handlers, no
 * scroll snapping, no overflow to swipe. It pauses when the pointer is over it
 * or when something inside it takes focus, and under prefers-reduced-motion it
 * stops being a marquee at all and becomes a plain wrapping grid of cards.
 * The direction mirrors in RTL, which is handled in components.css.
 */
export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  const items = TESTIMONIALS.map((item) => ({
    company: item.company,
    role: item.role,
    imageSrc: item.imageSrc,
    quote: t(`items.${item.key}.quote`),
    author: t(`items.${item.key}.name`),
  }));

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] scroll-mt-[var(--spacing-12)] bg-[#f0f0f5]"
    >
      <div className="mx-auto max-w-[1360px] px-6">
        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {t('title.main')}
          </h2>
          <p className="mt-1 text-2xl text-[var(--text-secondary)] lg:text-3xl">
            {t('title.highlight')}
          </p>
        </div>
      </div>

      {/* Full bleed, clipped. The clip is what keeps a 420px card track from
          giving the page a horizontal scrollbar at 375px. */}
      <div className="testimonial-marquee overflow-hidden px-6">
        <div className="testimonial-marquee-track flex w-max">
          {MARQUEE_PASSES.map((pass) => (
            <div
              key={pass}
              className="flex shrink-0"
              /* Only the first pass is real content. The copies exist to make
                 the loop seamless and are invisible to assistive tech. */
              aria-hidden={pass > 0 ? true : undefined}
            >
              {items.map((item) => (
                <TestimonialCard key={`${pass}-${item.author}`} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
