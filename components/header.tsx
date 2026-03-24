'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LanguageToggle } from './language-toggle';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const clickedIdRef = useRef<string>('');
  const locale = useLocale();
  const pathname = usePathname();
  const homePath = `/${locale}`;
  const isHome = pathname === homePath || pathname === `${homePath}/`;
  const t = useTranslations('header');

  const navLinks = useMemo(
    () => [
      { id: 'entry-points', label: t('nav.whenTeamsReachOut') },
      { id: 'services', label: t('nav.services') },
      { id: 'mini-product', label: t('nav.uxFeedback') },
      { id: 'how-i-work', label: t('nav.howIWork') },
      { id: 'projects', label: t('nav.selectedWork') },
      { id: 'testimonials', label: t('nav.clientFeedback') },
      { id: 'about', label: t('nav.about') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t]
  );

  // IntersectionObserver — highlights the section currently in view
  useEffect(() => {
    if (!isHome) return;

    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !clickedIdRef.current) setActiveId(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome, navLinks]);

  const scrollToId = useCallback((id: string) => {
    if (typeof window === 'undefined') return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const el = document.getElementById(id);
    if (!el) return;

    const headerEl = document.querySelector('header');
    const headerOffset = headerEl ? headerEl.getBoundingClientRect().height : 0;
    const targetY = window.scrollY + el.getBoundingClientRect().top - headerOffset - 12;

    if (reduceMotion) {
      window.scrollTo({ top: targetY, behavior: 'auto' });
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 520;
    const start = performance.now();
    const ease = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      window.scrollTo(0, startY + distance * ease(t));
      if (t < 1) requestAnimationFrame(step);
      else clickedIdRef.current = '';
    };

    requestAnimationFrame(step);
  }, []);

  const onAnchorClick = useCallback(
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setActiveId(id);
      clickedIdRef.current = id;
      scrollToId(id);
      setIsMobileMenuOpen(false);
    },
    [scrollToId]
  );

  const anchorHref = (id: string) => `#${id}`;
  const href = (path: string) => `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  const linkClass = (id: string) =>
    [
      'whitespace-nowrap text-sm transition-all pb-0.5 border-b-2',
      activeId === id
        ? 'text-[var(--header-link-hover)] border-[var(--header-link-hover)]'
        : 'text-[var(--header-link)] border-transparent hover:text-[var(--header-link-hover)]',
    ].join(' ');

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--header-border)] bg-[var(--header-bg)]">
      <div className="relative">
        <div className="mx-auto max-w-[1360px] flex w-full items-center px-6 py-4">

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
              {navLinks.map((link) =>
                isHome ? (
                  <a
                    key={link.id}
                    href={anchorHref(link.id)}
                    onClick={onAnchorClick(link.id)}
                    className={linkClass(link.id)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.id}
                    href={href(`/#${link.id}`)}
                    className="whitespace-nowrap text-sm text-[var(--header-link)] hover:text-[var(--header-link-hover)] transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Actions */}
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
            <div className="mx-auto max-w-[1360px] w-full px-6 py-6">
              <nav className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) =>
                  isHome ? (
                    <a
                      key={link.id}
                      href={anchorHref(link.id)}
                      onClick={onAnchorClick(link.id)}
                      className={`font-medium ${activeId === link.id ? 'text-[var(--header-link-hover)]' : 'text-[var(--header-link)]'}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.id}
                      href={href(`/#${link.id}`)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-medium text-[var(--header-link)]"
                    >
                      {link.label}
                    </Link>
                  )
                )}
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
