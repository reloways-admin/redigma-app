'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

const inputClass =
  'w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#732fff] transition-colors';

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5">
      <rect width="18" height="18" rx="4" fill="#732fff" />
      <path d="M5 9l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeFinalCta() {
  const t = useTranslations('home.finalCta');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = Object.values(t.raw('services') as Record<string, string>);

  const guarantees = [
    { label: t('guarantees.nda.label'), rest: t('guarantees.nda.rest') },
    { label: t('guarantees.response.label'), rest: t('guarantees.response.rest') },
    { label: t('guarantees.access.label'), rest: t('guarantees.access.rest') },
  ];

  const toggleService = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, services: selected }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setName(''); setEmail(''); setMessage(''); setSelected([]);
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-[var(--border-subtle)] py-20 lg:py-28 bg-[var(--background)] scroll-mt-[var(--spacing-12)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Left */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl leading-tight">
                {t('heading')}
              </h2>
              <p className="text-3xl font-bold text-[var(--text-secondary)] lg:text-4xl leading-tight">
                {t('headingHighlight')}
              </p>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              {t('body')}
            </p>

            <ul className="flex flex-col gap-3">
              {guarantees.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <CheckIcon />
                  <span>
                    <strong className="font-semibold text-[var(--text-primary)]">{item.label}</strong>
                    {': '}{item.rest}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-[var(--text-secondary)]">{t('location')}</p>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <p className="text-lg font-semibold text-[var(--text-primary)]">{t('form.successTitle')}</p>
                <p className="text-sm text-[var(--text-secondary)]">{t('form.successBody')}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder={t('form.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    placeholder={t('form.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder={t('form.messagePlaceholder')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass + ' resize-none'}
                />

                <div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{t('form.servicesLabel')}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{t('form.servicesHint')}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => {
                      const active = selected.includes(s);
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={[
                            'rounded-full border px-4 py-1.5 text-sm transition-all',
                            active
                              ? 'border-[#732fff] bg-[#732fff]/10 text-[#732fff]'
                              : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]',
                          ].join(' ')}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-500">{t('form.error')}</p>
                )}

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto rounded-full bg-[#732fff] hover:bg-[#5f22e0] text-white text-sm font-medium px-6 py-3 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? t('form.submitting') : t('form.submit')}
                  </button>
                  <p className="text-sm text-[var(--text-secondary)] text-right">
                    {t('form.emailLabel')}{' '}
                    <a href={`mailto:${t('form.emailAddress')}`} className="font-semibold text-[var(--text-primary)] hover:underline">
                      {t('form.emailAddress')}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
