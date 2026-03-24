'use client';

import Image from 'next/image';
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
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[var(--border-subtle)] p-8">
      <p className="text-base font-bold text-[var(--text-primary)]">{company}</p>

      <blockquote className="flex-1 text-base text-[var(--text-primary)] leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
          <Image src={imageSrc} alt={author} fill className="object-cover" sizes="44px" />
        </div>
        <div>
          <p className="text-sm font-medium text-[var(--text-primary)]">{author}</p>
          <p className="text-sm text-[var(--text-secondary)]">{role}</p>
        </div>
      </div>
    </div>
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
      className="py-20 lg:py-28 border-t border-[var(--border-subtle)] scroll-mt-[var(--spacing-12)] bg-[var(--background)]"
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

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}
