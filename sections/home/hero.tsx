'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { HeroBoard } from '@/components/hero-board';
import HomeCompanyLogos from '@/sections/home/company-logos';
import { WHATSAPP_URL } from '@/lib/contact';

export function HomeHero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative w-full bg-[var(--background)]">
      <div className="mx-auto max-w-[1360px] px-6 pt-20 pb-20 lg:pt-32">

        {/* ── 2-column layout: left = the promise, right = Amir's face ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: pill, h1, subtitle, two actions */}
          <div className="flex flex-col lg:w-3/5">
            <div className="mb-6 flex">
              <span className="status-pill">
                <span className="status-indicator" />
                {t('pill')}
              </span>
            </div>
            {/* No entrance animation: the h1 is the page's main content and
                should be readable on first paint, never blank or half-blank. */}
            <h1 className="mb-8 text-hero-title tracking-tight text-[var(--text-primary)] max-w-2xl leading-tight">
              {t('titleMain')}{' '}
              <span className="text-[#732fff]">{t('titleAccent')}</span>
            </h1>

            <p className="mb-10 max-w-xl text-hero-subtitle text-[var(--text-secondary)]">
              {t('lede')}
            </p>

            {/* Two actions only. WhatsApp is how Israeli deals actually start,
                so it takes the primary slot. */}
            <div className="flex flex-wrap gap-4">
              <Button
                href={WHATSAPP_URL}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('whatsapp')}
              </Button>
              {/* TODO: replace with real booking link */}
              <Button href="#contact" variant="outline">
                {t('bookCall')}
              </Button>
            </div>
          </div>

          {/* Right column on desktop, stacked under the actions on phone and
              tablet. His face at real size, not a 48px avatar further down. */}
          <div className="lg:w-2/5 lg:self-center">
            <figure className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-1)]">
              <Image
                src="/images/home/amir-avatar.jpg"
                alt="Amir Shalev"
                fill
                /* The source is a head-and-shoulders crop, so the frame is
                   pulled up to keep the face off the vertical centre. */
                className="object-cover object-[center_22%]"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
            </figure>
          </div>
        </div>

        {/* Proof directly under the promise, before the board. */}
        <HomeCompanyLogos variant="inline" />

        {/* The sketch board. Inlined so its shapes can be dragged. */}
        <div className="relative mt-16 w-full">
          <HeroBoard />
        </div>

      </div>
    </section>
  );
}
