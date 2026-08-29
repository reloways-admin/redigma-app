import { getTranslations } from 'next-intl/server';

import { InlineIllustration } from '@/components/inline-illustration';

// ─── 3-card layout (active version) ─────────────────────────────────────────

const CARDS = [
  { id: 'before', color: '#0D9B3B', illustration: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg' },
  { id: 'early',  color: '#155DFC', illustration: '/illustrations/entry-point/sketch-live.svg' },
  { id: 'live',   color: '#732FFF', illustration: '/illustrations/entry-point/sketch-define.svg' },
] as const;

type StageId = 'live' | 'early' | 'before';

export async function HomeEntryPoints() {
  const t = await getTranslations('home.entryPoints');

  return (
    <section
      id="entry-points"
      className="bg-[var(--background)] py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-[var(--foreground)] lg:text-4xl">
            {t('title')}{' '}
            <span className="text-[#732fff]">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-xl text-[var(--text-secondary)] lg:text-2xl">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map(({ id, color, illustration }) => (
            <div
              key={id}
              className="entry-card flex flex-col overflow-hidden rounded-2xl bg-[var(--surface-1)]"
              style={{ border: `1.5px solid ${color}` }}
            >
              {/* Colored header bar */}
              <div
                className="px-6 py-3"
                style={{ backgroundColor: color }}
              >
                <span className="text-sm font-medium text-white">
                  {t(`stages.${id as StageId}.label`)}
                </span>
              </div>

              {/* Illustration */}
              <div className="entry-illo relative aspect-video w-full overflow-hidden bg-[var(--surface-2)]">
                <InlineIllustration src={illustration} className="entry-illo-svg" />
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold leading-snug text-[var(--text-primary)]">
                  {t(`stages.${id as StageId}.heading`)}
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {t(`stages.${id as StageId}.body`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Toggle version (kept for reference) ─────────────────────────────────────
