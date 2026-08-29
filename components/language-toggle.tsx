'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

type Locale = 'en' | 'de' | 'he';

const LANGUAGES = [
  { locale: 'en' as Locale, label: 'English', flag: '/icons/language/ic-us.svg' },
  { locale: 'de' as Locale, label: 'Deutsch', flag: '/icons/language/ic-de.svg' },
  { locale: 'he' as Locale, label: 'עברית', flag: '/icons/language/ic-il.svg' },
];

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  function switchLanguage(next: Locale) {
    if (next === locale) { setOpen(false); return; }
    const nextPathname = pathname.replace(/^\/(en|de|he)(?=\/|$)/, `/${next}`);
    const query = searchParams?.toString();
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    router.replace(`${nextPathname}${query ? `?${query}` : ''}${hash}`, { scroll: false });
    setOpen(false);
  }

  const current = LANGUAGES.find((l) => l.locale === locale)!;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-full p-1.5 hover:bg-[var(--surface-1)] transition-colors"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Image src={current.flag} alt={current.label} width={22} height={22} className="rounded-sm" />
      </button>

      {open && (
        <div className="absolute end-0 bottom-full mb-2 xl:bottom-auto xl:top-full xl:mt-2 xl:mb-0 z-50 min-w-[130px] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--header-bg)] shadow-lg">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.locale}
              type="button"
              onClick={() => switchLanguage(lang.locale)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors
                ${locale === lang.locale
                  ? 'bg-[var(--surface-1)] text-[var(--text-primary)] font-medium'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface-1)] hover:text-[var(--text-primary)]'
                }`}
            >
              <Image src={lang.flag} alt={lang.label} width={18} height={18} className="rounded-sm" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
