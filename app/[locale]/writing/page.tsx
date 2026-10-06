'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getAllArticles } from '@/lib/writing-articles';

export default function WritingPage() {
  const locale = useLocale();
  const t = useTranslations('writing');
  const articles = getAllArticles();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-[var(--background)] flex-1">
      <div className="mx-auto max-w-[1360px] px-6 py-20 lg:py-28">

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-5xl mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-[var(--border-subtle)] pb-12 last:border-0">
              <Link 
                href={`/${locale}/writing/${article.slug}`}
                className="group"
              >
                <div className="space-y-3">
                  <time className="text-sm text-[var(--text-secondary)]">
                    {formatDate(article.date)}
                  </time>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#732fff] transition-colors lg:text-3xl">
                    {article.title}
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#732fff] group-hover:gap-2 transition-all">
                    {t('readMore')}
                    <span>→</span>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
