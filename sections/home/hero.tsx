'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { HeroCta, WhatsAppGlyph, CalendarGlyph } from '@/components/ui/hero-cta';
import { HeroBoard } from '@/components/hero-board';
import HomeCompanyLogos from '@/sections/home/company-logos';
import { WHATSAPP_URL, BOOKING_URL } from '@/lib/contact';

export function HomeHero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative w-full bg-[var(--background)]">
      <div className="mx-auto max-w-[1360px] px-6 pt-20 pb-20 lg:pt-32">

        {/* ── 2-column layout: left = the promise, right = Amir's face ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: pill, h1, subtitle, two actions */}
          <div className="flex flex-col lg:w-3/5">
            {/* status-pill-hero, not status-pill: a smaller pill so the label
                reads as a caption under the headline rather than competing
                with it. The pill used elsewhere on the site is unchanged. */}
            <div className="mb-6 flex">
              <span className="status-pill-hero">
                <span className="status-indicator" />
                {t('pill')}
              </span>
            </div>
            {/* No entrance animation: the h1 is the page's main content and
                should be readable on first paint, never blank or half-blank. */}
            <h1 className="mb-8 text-hero-title text-[var(--text-primary)] max-w-2xl">
              {t('titleMain')}{' '}
              <span className="text-[#732fff]">{t('titleAccent')}</span>
            </h1>

            <p className="mb-10 max-w-xl text-hero-subtitle text-[var(--text-secondary)]">
              {t('lede')}
            </p>

            {/* Two actions only. WhatsApp is how Israeli deals actually start,
                so it takes the primary slot and wears the brand green. The
                booking button is the same button in the house purple, so the
                pair reads as one control with two temperatures. */}
            <div className="flex flex-wrap gap-4">
              <HeroCta
                href={WHATSAPP_URL}
                icon={<WhatsAppGlyph />}
                ariaLabel="WhatsApp"
                /* #0b1f14 on #25D366 measures about 8.7:1. White measures 2:1
                   and fails, so the label is dark. */
                className="border-[#25D366] bg-[#25D366] text-[#0b1f14]"
              >
                {t('whatsapp')}
              </HeroCta>
              <HeroCta
                href={BOOKING_URL}
                icon={<CalendarGlyph />}
                className="border-[#732fff] bg-transparent text-[#732fff] hover:bg-[#732fff]/8"
              >
                {t('bookCall')}
              </HeroCta>
            </div>
          </div>

          {/* Right column on desktop, stacked under the actions on phone and
              tablet. His face at real size, not a 48px avatar further down. */}
          <div className="lg:w-2/5 lg:self-center">
            {/* Background-removed cutout (amir-hero-cutout-v2-2026-09-28.webp):
                seated, hands clasped, cropped at the thighs as photographed.
                No frame: the figure sits straight on the page background. The
                earlier cutout and amir-avatar.jpg stay in public/images/home. */}
            <figure className="relative mx-auto aspect-[1057/1202] w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px]">
              <Image
                src="/images/home/amir-hero-cutout-v2-2026-09-28.webp"
                alt="Amir Shalev"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 420px, 500px"
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
