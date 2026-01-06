'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Redigma
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/impressum"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Impressum
          </Link>

          <Link
            href="/feedback"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Get quick feedback
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/feedback"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
          >
            Get quick feedback
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="rounded-md border px-3 py-2 text-sm text-gray-700"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div className="absolute right-0 top-0 h-full w-full bg-white px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md border px-3 py-2 text-sm"
            >
              Close
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="/impressum"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium"
            >
              Impressum
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}