'use client';

import { useTranslations } from 'next-intl';
import { WHATSAPP_URL } from '@/lib/contact';

/**
 * Always-there WhatsApp button.
 *
 * Below xl the header is a floating pill docked at the bottom of the screen,
 * so this sits clear above it rather than on top of it. From xl up the header
 * moves to the top and the button drops back into the corner.
 */
export function WhatsAppFloat() {
  const t = useTranslations('home.whatsappFloat');

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('aria')}
      className="fixed bottom-28 right-4 z-[45] inline-flex items-center gap-2.5 rounded-full bg-[var(--purple-500)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(8,8,24,0.28)] transition-opacity hover:opacity-90 xl:bottom-6 xl:right-6"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.86 9.86 0 0 0 4.74 1.21c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.8 13.98c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.45-.72-2.93-1.15-4.76-4.2-4.9-4.4-.15-.2-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.27-.3.58-.37.78-.37l.56.01c.18 0 .42-.03.65.5.24.56.8 1.94.87 2.08.07.15.12.32.02.51-.1.2-.15.32-.29.5l-.44.5c-.15.15-.3.31-.13.6.17.3.75 1.24 1.6 2 1.1.98 2.02 1.29 2.31 1.44.29.15.46.12.63-.07.17-.2.73-.85.93-1.14.2-.3.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.13.07.73-.17 1.42Z" />
      </svg>
      {t('label')}
    </a>
  );
}

export default WhatsAppFloat;
