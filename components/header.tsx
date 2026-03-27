'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageToggle } from './language-toggle';
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
      { id: 'projects', label: t('nav.selectedWork') },
      { id: 'testimonials', label: t('nav.clientFeedback') },
      { id: 'about', label: t('nav.about') },
      { id: 'contact', label: t('nav.contact') },
    ],
    [t]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // IntersectionObserver
  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting && !clickedIdRef.current) setActiveId(id); },
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
    const isDesktop = window.innerWidth >= 1280;
    const headerEl = document.querySelector('header');
    const headerOffset = isDesktop && headerEl ? headerEl.getBoundingClientRect().height : 0;
    const targetY = window.scrollY + el.getBoundingClientRect().top - headerOffset - 12;
    if (reduceMotion) { window.scrollTo({ top: targetY, behavior: 'auto' }); return; }
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
      setIsMobileMenuOpen(false);
      // Delay scroll until after menu closes and body overflow is restored
      setTimeout(() => scrollToId(id), 50);
    },
    [scrollToId]
  );

  const anchorHref = (id: string) => `#${id}`;
  const href = (path: string) => `/${locale}${path.startsWith('/') ? path : `/${path}`}`;

  const linkClass = (id: string) =>
    ['whitespace-nowrap text-sm transition-colors',
      activeId === id
        ? 'text-[var(--header-link-hover)]'
        : 'text-[var(--header-link)] hover:text-[var(--header-link-hover)]',
    ].join(' ');

  return (
    <>
      <header className="fixed bottom-4 left-4 right-4 z-40 bg-[var(--header-bg)] rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.18)] xl:static xl:bottom-auto xl:left-0 xl:right-0 xl:rounded-none xl:shadow-none xl:sticky xl:top-0">
        <div className="relative">
          <div className="mx-auto max-w-[1360px] flex w-full items-center px-6 py-4">

            {/* Logo */}
            <div className="flex items-center gap-8 flex-1">
              <a
                href={href('/')}
                className="text-lg font-semibold tracking-tight text-[var(--header-brand)] shrink-0"
              >
                Redigma
              </a>

              {/* Desktop nav */}
              <nav className="hidden xl:flex items-center gap-6
                min-[1441px]:absolute min-[1441px]:left-1/2 min-[1441px]:-translate-x-1/2
                max-[1440px]:relative max-[1440px]:left-0 max-[1440px]:translate-x-0">
                {navLinks.map((link) =>
                  isHome ? (
                    <a key={link.id} href={anchorHref(link.id)} onClick={onAnchorClick(link.id)} className={linkClass(link.id)}>
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.id} href={href(`/#${link.id}`)} className="whitespace-nowrap text-sm text-[var(--header-link)] hover:text-[var(--header-link-hover)] transition-colors">
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
                <Link href={href('/feedback')} className="header-cta">{t('cta')}</Link>
              </div>

              {/* Mobile trigger */}
              <div className="flex items-center gap-3 xl:hidden">
                <LanguageToggle />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#732fff] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5f1fe0] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="3.5" width="14" height="1.5" rx="0.75" fill="currentColor"/>
                    <rect x="1" y="7.25" width="10" height="1.5" rx="0.75" fill="currentColor"/>
                    <rect x="1" y="11" width="14" height="1.5" rx="0.75" fill="currentColor"/>
                  </svg>
                  Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-black/30 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-0 z-50 flex flex-col bg-[var(--header-bg)] xl:hidden"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)]">
                <a
                  href={href('/')}
                  className="text-lg font-semibold tracking-tight text-[var(--header-brand)]"
                >
                  Redigma
                </a>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-full border border-[var(--border-subtle)] px-4 py-1.5 text-sm font-medium text-[var(--text-primary)] flex items-center gap-1.5 hover:bg-[var(--surface-1)] transition-colors"
                >
                  <span>×</span> Close
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col flex-1 overflow-y-auto px-6 pt-6 gap-0">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    {isHome ? (
                      <a
                        href={anchorHref(link.id)}
                        onClick={onAnchorClick(link.id)}
                        className="block py-2.5 text-2xl font-bold text-[var(--text-primary)] hover:text-[#732fff] transition-colors leading-tight"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={href(`/#${link.id}`)}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2.5 text-2xl font-bold text-[var(--text-primary)] hover:text-[#732fff] transition-colors leading-tight"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-6 pb-10 pt-6">
                <Link
                  href={href('/feedback')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full rounded-full bg-[#732fff] px-6 py-4 text-white font-semibold text-lg"
                >
                  <span>{t('cta')}</span>
                  <span className="flex items-center justify-center h-9 w-9 rounded-full bg-white text-[#732fff]">
                    ↗
                  </span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
