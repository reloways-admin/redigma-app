import React from 'react';

/**
 * The two hero actions.
 *
 * Both are built from the same component so their geometry can never drift:
 * identical height, padding, radius, type, icon size and icon gap. The only
 * thing a caller changes is the colour, passed in as `className`.
 *
 * The border is always there, transparent on the filled variant, so a bordered
 * button and a filled one measure exactly the same.
 */
const HERO_CTA_BASE =
  'inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full border ' +
  'px-6 text-sm font-semibold leading-none transition-all hover:opacity-90 active:scale-[0.98] ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--purple-500)]';

/** One size for both glyphs, so neither button looks heavier than the other. */
const HERO_CTA_ICON = 'h-5 w-5 shrink-0';

export function HeroCta({
  href,
  icon,
  children,
  className = '',
  ariaLabel,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${HERO_CTA_BASE} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

export function WhatsAppGlyph() {
  return (
    <svg className={HERO_CTA_ICON} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.8 13.98c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.45-.72-2.93-1.15-4.76-4.2-4.9-4.4-.15-.2-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.27-.3.58-.37.78-.37l.56.01c.18 0 .42-.03.65.5.24.56.8 1.94.87 2.08.07.15.12.32.02.51-.1.2-.15.32-.29.5l-.44.5c-.15.15-.3.31-.13.6.17.3.75 1.24 1.6 2 1.1.98 2.02 1.29 2.31 1.44.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.3.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.73-.17 1.42Z" />
    </svg>
  );
}

export function CalendarGlyph() {
  return (
    <svg
      className={HERO_CTA_ICON}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14.5h3" />
    </svg>
  );
}
