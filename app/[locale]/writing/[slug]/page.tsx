'use client';

import { useLocale, useTranslations } from 'next-intl';
import { getArticleBySlug, getAllArticles } from '@/lib/writing-articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';

function ArticleContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[var(--text-primary)] mt-12 mb-4 lg:text-3xl">
          {line.slice(3)}
        </h2>
      );
      i++;
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="space-y-2 my-6 list-disc list-outside ml-6">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-[var(--text-primary)] leading-relaxed">
              {item.split('**').map((part, partIdx) => 
                partIdx % 2 === 1 ? <strong key={partIdx}>{part}</strong> : part
              )}
            </li>
          ))}
        </ul>
      );
    } else if (line.trim() === '') {
      i++;
    } else {
      elements.push(
        <p key={i} className="text-[var(--text-primary)] leading-relaxed mb-6">
          {line.split('**').map((part, partIdx) => 
            partIdx % 2 === 1 ? <strong key={partIdx}>{part}</strong> : part
          )}
        </p>
      );
      i++;
    }
  }

  return <div className="space-y-6">{elements}</div>;
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = use(params);
  const t = useTranslations('writing');
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-[var(--background)] flex-1">
      <article className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        
        <Link
          href={`/${locale}/writing`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-8"
        >
          ← {t('backToWriting')}
        </Link>

        <header className="mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <time className="text-sm text-[var(--text-secondary)] mb-4 block">
            {formatDate(article.date)}
          </time>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-5xl">
            {article.title}
          </h1>
        </header>

        <div className="prose-article">
          <ArticleContent content={article.content} />
        </div>

      </article>
    </div>
  );
}
