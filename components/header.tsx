'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageToggle } from './language-toggle';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('header');

  const href = (path: string) => `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  const navLinks = [
    { id: 'entry-points', label: t('nav.whenTeamsReachOut') },
    { id: 'mini-product', label: t('nav.uxFeedback') },
    { id: 'how-i-work', label: t('nav.howIWork') },
    { id: 'projects', label: t('nav.selectedWork') },
    { id: 'testimonials', label: t('nav.clientFeedback') },
    { id: 'about', label: t('nav.about') },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--header-border)] bg-[var(--header-bg)]">
      <div className="relative">
        <div className="flex w-full items-center px-6 py-4">
          
          {/* Logo & Desktop Nav Group */}
          <div className="flex items-center gap-8 flex-1">
            <Link
              href={href('/')}
              className="text-lg font-semibold tracking-tight text-[var(--header-brand)] shrink-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Redigma
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 
              min-[1441px]:absolute min-[1441px]:left-1/2 min-[1441px]:-translate-x-1/2 
              max-[1440px]:relative max-[1440px]:left-0 max-[1440px]:translate-x-0">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={href(`/#${link.id}`)}
                  className="whitespace-nowrap text-sm text-[var(--header-link)] hover:text-[var(--header-link-hover)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Actions Section */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-3">
               <LanguageToggle />
               <Link href={href('/feedback')} className="header-cta">
                {t('cta')}
              </Link>
            </div>

            {/* Mobile/Tablet Trigger */}
            <div className="flex items-center gap-3 xl:hidden">
              <LanguageToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="flex h-10 w-10 items-center justify-center focus:outline-none"
              >
                <Image
                  src={isMobileMenuOpen ? '/icons/navigation/crossmark.svg' : '/icons/navigation/hamburger-menu.svg'}
                  alt="Menu"
                  width={20}
                  height={20}
                  className="brightness-0" 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-[var(--header-border)] bg-[var(--header-bg)] xl:hidden">
            <div className="w-full px-6 py-6">
              <nav className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <Link 
                    key={link.id}
                    href={href(`/#${link.id}`)} 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="font-medium text-[var(--header-link)]"
                  >
                    {link.label}
                  </Link>
                ))}
                
                <Link 
                  href={href('/feedback')} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="mt-4 header-cta py-4 w-full"
                >
                  {t('cta')}
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}