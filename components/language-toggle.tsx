'use client';

import {useState} from 'react';
import {useLocale} from 'next-intl';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import Image from 'next/image';

type Locale = 'en' | 'de';

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);

  function switchLanguage(nextLocale: Locale) {
    // Routes are under /[locale]/... so URLs look like /en, /en/projects, /de, etc.
    // Replace the first path segment with the next locale.
    const nextPathname = pathname.replace(/^\/(en|de)(?=\/|$)/, `/${nextLocale}`);

    const query = searchParams?.toString();
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const nextUrl = `${nextPathname}${query ? `?${query}` : ''}${hash}`;

    router.replace(nextUrl, {scroll: false});
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
        aria-label="Change language"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Image
          src={locale === 'de' ? '/icons/language/ic-de.svg' : '/icons/language/ic-us.svg'}
          alt={locale === 'de' ? 'Deutsch' : 'English'}
          width={20}
          height={20}
        />
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm"
          role="menu"
        >
          <button
            type="button"
            onClick={() => switchLanguage('en')}
            className="flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-50"
            role="menuitem"
          >
            <Image
              src="/icons/language/ic-us.svg"
              alt="English"
              width={20}
              height={20}
            />
            <span className="text-sm">English</span>
          </button>

          <button
            type="button"
            onClick={() => switchLanguage('de')}
            className="flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-50"
            role="menuitem"
          >
            <Image
              src="/icons/language/ic-de.svg"
              alt="Deutsch"
              width={20}
              height={20}
            />
            <span className="text-sm">Deutsch</span>
          </button>
        </div>
      )}
    </div>
  );
}