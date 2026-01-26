'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';

export function HomeEntryPoints() {
  const t = useTranslations('home.entryPoints');

  return (
    <section className="bg-[var(--background)] py-24 lg:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <Kicker className="inline-flex w-fit mx-auto">{t('badge')}</Kicker>
          <h2 className="mx-auto max-w-2xl text-section-title text-[var(--foreground)]">
            {t.rich('title', {
              brand: (chunks) => <span className="text-[var(--text-brand)]">{chunks}</span>,
            })}
          </h2>
          <p className="mt-6 text-lg text-[var(--text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Card 1: Early Stage */}
          <article 
            className="entry-card-container border-t-[var(--entry-card-accent-width)]" 
            style={{ borderColor: 'var(--entry-early-color)', ['--entry-accent-color' as any]: 'var(--entry-early-color)' }}
          >
            <div className="entry-card-header" style={{ backgroundColor: 'var(--entry-accent-color)' }}>
               {t('cards.existing.tag')}
            </div>
            
            <div className="p-10 flex flex-col h-full">
              <h3 className="mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)]">
                {t('cards.existing.heading')}
              </h3>
              <p className="mb-10 text-[var(--text-secondary)] leading-relaxed">
                {t('cards.existing.intro')}
              </p>
              
              <div className="mt-auto aspect-video w-full flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/illustrations/entry-point/sketch-define.svg"
                    alt="Define stage illustration"
                    fill
                    className="object-contain scale-90"
                  />
                </div>
              </div>
              
              <p className="mt-10 text-xs italic text-[var(--text-dimmed)] leading-relaxed">
                {t('cards.existing.outro')}
              </p>
            </div>
          </article>

          {/* Card 2: Live Stage */}
          <article 
            className="entry-card-container border-t-[var(--entry-card-accent-width)]" 
            style={{ borderColor: 'var(--entry-live-color)', ['--entry-accent-color' as any]: 'var(--entry-live-color)' }}
          >
            <div className="entry-card-header" style={{ backgroundColor: 'var(--entry-accent-color)' }}>
               {t('cards.building.tag')}
            </div>

            <div className="p-10 flex flex-col h-full">
              <h3 className="mb-6 text-3xl font-medium tracking-tight text-[var(--foreground)]">
                {t('cards.building.heading')}
              </h3>
              <p className="mb-10 text-[var(--text-secondary)] leading-relaxed">
                {t('cards.building.intro')}
              </p>

              <div className="mt-auto aspect-video w-full flex items-center justify-center">
                <div className="relative h-full w-full">
                  <Image
                    src="/illustrations/entry-point/sketch-live.svg"
                    alt="Live stage illustration"
                    fill
                    className="object-contain scale-80"
                  />
                </div>
              </div>

              <p className="mt-10 text-xs italic text-[var(--text-dimmed)] leading-relaxed">
                {t('cards.building.outro')}
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}