'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

function TestimonialCard({
  company,
  quote,
  author,
  role,
  imageSrc,
}: {
  company: string;
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[var(--border-subtle)] p-8 bg-white">
      <p className="text-base font-bold text-[var(--text-primary)]">{company}</p>

      <blockquote className="flex-1 text-base text-[var(--text-primary)] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        {imageSrc ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image src={imageSrc} alt={author} fill className="object-cover" sizes="44px" />
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
          <p className="text-sm text-[var(--text-secondary)]">{role}</p>
        </div>
      </div>
    </div>
  );
}

type TestimonialItem = { company: string; quote: string; author: string; role: string; imageSrc?: string };

function MobileCarousel({ items }: { items: TestimonialItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  function scrollTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    setCurrent(index);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const cardWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 0;
    if (cardWidth) setCurrent(Math.round(scrollLeft / cardWidth));
  }

  return (
    <>
      {/* Mobile carousel */}
      <div className="md:hidden -mx-6">
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-6"
          style={{ scrollbarWidth: 'none' }}
        >
          {items.map((item, i) => (
            <div key={i} className="snap-start shrink-0 w-[82vw] last:pr-6">
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-[#732fff]' : 'w-2 bg-[var(--border-subtle)]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <TestimonialCard key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  const items = [
    {
      company: 'Method Queen',
      quote: t('items.keren.quote'),
      author: t('items.keren.name'),
      role: 'Owner',
      imageSrc: '/images/home/keren.png',
    },
    {
      company: 'Financial Cat',
      quote: t('items.adi.quote'),
      author: t('items.adi.name'),
      role: 'CEO',
      imageSrc: '/images/home/adi.png',
    },
    {
      company: 'Navonera',
      quote: t('items.ariel.quote'),
      author: t('items.ariel.name'),
      role: 'Co-founder',
      imageSrc: '/images/home/ariel.png',
    },
  ];

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

        {/* Cards — carousel on mobile, grid on md+ */}
        <MobileCarousel items={items} />

      </div>
    </section>
  );
}
