'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';

/* Internal Card Component */
function TestimonialCard({ 
  quote, 
  author, 
  role, 
  imageSrc 
}: { 
  quote: string; 
  author: string; 
  role: string; 
  imageSrc: string;
}) {
  return (
    <div className="testimonial-card">
      <blockquote className="testimonial-quote">
        “{quote}”
      </blockquote>
      
      <div className="mt-auto flex items-center gap-4">
        {/* Avatar with subtle border and grayscale effect */}
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[var(--border-subtle)] grayscale">
          <Image
            src={imageSrc}
            alt={author}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="flex flex-col text-left">
          <p className="testimonial-author">{author}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  const items = [
    {
      quote: t('items.keren.quote'),
      author: t('items.keren.name'),
      role: t('items.keren.role'),
      imageSrc: '/images/home/keren.png',
    },
    {
      quote: t('items.adi.quote'),
      author: t('items.adi.name'),
      role: t('items.adi.role'),
      imageSrc: '/images/home/adi.png',
    },
    /* Hidden for now:
    {
      quote: t('items.ariel.quote'),
      author: t('items.ariel.name'),
      role: t('items.ariel.role'),
      imageSrc: '/images/home/ariel.png',
    },
    {
      quote: t('items.erez.quote'), 
      author: t('items.erez.name'),
      role: t('items.erez.role'),
      imageSrc: '/images/home/erez.png',
    }
    */
  ];

  return (
    <section className="testimonials-section py-24 lg:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* Header Section matching the Project list alignment */}
        <div className="mb-20 text-left">
          <div className="flex mb-4">
            <Kicker className="w-fit">{t('kicker') || 'CLIENT FEEDBACK'}</Kicker>
          </div>
          <h2 className="type-section-title text-[var(--text-primary)] max-w-2xl">
            {t('title.main')}
          </h2>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <TestimonialCard 
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}