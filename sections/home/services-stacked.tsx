'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type CardKey = 'shape' | 'fix' | 'scale' | 'ai';

type Tile = {
  src: string;
  rowSpan?: 2;
};

type CardConfig = {
  key: CardKey;
  bg: string;
  panelBg: string;
  textPrimary: string;
  textSecondary: string;
  tiles: Tile[];
};

const CARDS: CardConfig[] = [
  {
    key: 'shape',
    bg: '#3B3FE4',
    panelBg: '#f5f5f7',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.72)',
    tiles: [
      { src: '/illustrations/how-i-work/sketch-how-i-work-guiding.svg', rowSpan: 2 },
      { src: '/illustrations/hero/sketch-hero-grid.svg' },
      { src: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { src: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg' },
      { src: '/illustrations/how-i-work/sketch-how-i-work-define.svg' },
    ],
  },
  {
    key: 'fix',
    bg: '#1c1c1e',
    panelBg: '#2a2a2c',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.55)',
    tiles: [
      { src: '/illustrations/entry-point/sketch-define.svg', rowSpan: 2 },
      { src: '/illustrations/how-i-work/sketch-how-i-work-guiding.svg' },
      { src: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { src: '/illustrations/hero/sketch-hero-grid.svg' },
      { src: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg' },
    ],
  },
  {
    key: 'scale',
    bg: '#ffffff',
    panelBg: '#f0f0f5',
    textPrimary: '#0a0a0a',
    textSecondary: '#555566',
    tiles: [
      { src: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg', rowSpan: 2 },
      { src: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { src: '/illustrations/projects/icons/cursor logo.svg' },
      { src: '/illustrations/hero/sketch-hero-grid.svg' },
      { src: '/illustrations/how-i-work/sketch-how-i-work-define.svg' },
    ],
  },
  {
    key: 'ai',
    bg: '#F05A28',
    panelBg: '#f5f5f7',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.75)',
    tiles: [
      { src: '/illustrations/entry-point/sketch-live.svg', rowSpan: 2 },
      { src: '/illustrations/projects/icons/cursor logo.svg' },
      { src: '/illustrations/projects/icons/AWS-Dark logo.svg' },
      { src: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg' },
      { src: '/illustrations/hero/sketch-hero-grid.svg' },
    ],
  },
];

function TileGrid({ tiles, panelBg }: { tiles: Tile[]; panelBg: string }) {
  return (
    <div
      className="p-3 grid gap-2 shrink-0 w-full aspect-[560/509] md:w-[40%] md:aspect-auto self-stretch"
      style={{
        background: panelBg,
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
      }}
    >
      {tiles.map((tile, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden relative"
          style={{ gridRow: tile.rowSpan === 2 ? 'span 2' : undefined }}
        >
          <Image
            src={tile.src}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 33vw, 187px"
          />
        </div>
      ))}
    </div>
  );
}

function ServiceCard({
  card,
  t,
}: {
  card: CardConfig;
  t: ReturnType<typeof useTranslations<'home.services'>>;
}) {
  return (
    <div className="overflow-hidden rounded-3xl flex flex-col md:flex-row">
      {/* Top (mobile) / Left (tablet+): colored content */}
      <div
        className="flex flex-col justify-start p-8 pt-10 md:p-14 md:pt-14 flex-1"
        style={{ background: card.bg, minHeight: '220px' }}
      >
        <h3
          className="text-3xl font-bold mb-4 lg:text-4xl leading-tight"
          style={{ color: card.textPrimary }}
        >
          {t(`items.${card.key}.title`)}
        </h3>
        <p
          className="text-base leading-relaxed max-w-sm mb-8"
          style={{ color: card.textSecondary }}
        >
          {t(`items.${card.key}.body`)}
        </p>

        {/* 2-column bullets */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {(t.raw(`items.${card.key}.bullets`) as string[]).map((b) => (
            <span key={b} className="flex items-center gap-2 text-sm" style={{ color: card.textSecondary }}>
              <span className="text-base leading-none" style={{ color: card.textPrimary }}>•</span>
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom (mobile) / Right (desktop): tile grid */}
      <TileGrid tiles={card.tiles} panelBg={card.panelBg} />
    </div>
  );
}


export function HomeServicesStacked() {
  const t = useTranslations('home.services');

  return (
    <section id="services">
      {/* Dark heading band */}
      <div className="bg-[#0a0a0a] pt-20 pb-10">
        <div className="mx-auto max-w-[1360px] px-6">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">{t('heading')}</h2>
        </div>
      </div>

      {/* Stacked cards */}
      <div className="bg-[#0a0a0a] px-6 pb-40">
        <div className="mx-auto max-w-[1360px]">
          {CARDS.map((card, i) => (
            <div
              key={card.key}
              className="sticky mb-4 top-4 xl:top-[104px]"
              style={{ zIndex: 10 + i }}
            >
              <ServiceCard card={card} t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
