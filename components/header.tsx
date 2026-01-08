'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageToggle } from './language-toggle';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale(); // 'en' | 'de'
  const t = useTranslations('header');

  // Prefix internal paths with the active locale
  const href = (path: string) => `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      {/* Relative wrapper so the mobile dropdown can anchor under the header */}
      <div className="relative">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href={href('/')}
            className="font-semibold tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Redigma
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <LanguageToggle />

            <Link
              href={href('/impressum')}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {t('impressum')}
            </Link>

            <Link
              href={href('/feedback')}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              {t('cta')}
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />

            <Link
              href={href('/feedback')}
              className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('cta')}
            </Link>

            {/* Same button box for hamburger/close so the icon sits perfectly */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? t('aria.closeMenu') : t('aria.openMenu')}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <Image
                src={
                  isMobileMenuOpen
                    ? '/icons/navigation/crossmark.svg'
                    : '/icons/navigation/hamburger-menu.svg'
                }
                alt={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu (no full-screen overlay) */}
        {isMobileMenuOpen ? (
          <div className="absolute left-0 right-0 top-full z-50 bg-white md:hidden">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="mb-6 font-semibold">{t('menu')}</div>

              <nav className="flex flex-col gap-6 text-lg">
                <Link
                  href={href('/impressum')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium"
                >
                  {t('impressum')}
                </Link>
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}