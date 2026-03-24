'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type FormState = {
  name: string;
  email: string;
  productUrl: string;
  figmaUrl: string;
  stage: 'live' | 'building' | 'idea';
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  productUrl: '',
  figmaUrl: '',
  stage: 'live',
  message: '',
};

const inputClass =
  'w-full border border-[var(--border-subtle)] bg-[var(--background)] px-4 py-3 type-body-small text-[var(--text-primary)] placeholder:text-[var(--text-dimmed)] focus:outline-none focus:border-[var(--border-brand)] transition-colors';

export default function FeedbackPage() {
  const t = useTranslations('feedback');
  const [form, setForm] = useState<FormState>(initialState);

  const stats = [
    { number: t('stats.responseTime.number'), label: t('stats.responseTime.label') },
    { number: t('stats.observations.number'), label: t('stats.observations.label') },
    { number: t('stats.salesPitch.number'), label: t('stats.salesPitch.label') },
  ];

  const valuePoints = [
    { title: t('valuePoints.trust.title'), body: t('valuePoints.trust.body') },
    { title: t('valuePoints.clarity.title'), body: t('valuePoints.clarity.body') },
    { title: t('valuePoints.perspective.title'), body: t('valuePoints.perspective.body') },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[var(--surface-1)] flex-1">
      <div className="w-full mx-auto max-w-[1280px] px-6 py-16 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:items-center">

          {/* ── LEFT: Value panel — no borders, clean text layout ── */}
          <div className="lg:sticky lg:top-24">

            {/* Eyebrow */}
            <p className="type-kicker text-[var(--text-brand)] mb-5">{t('eyebrow')}</p>

            {/* Heading */}
            <h1 className="type-section-title text-[var(--foreground)] leading-tight">
              {t('title')}
            </h1>
            <p className="mt-5 type-body text-[var(--text-secondary)] max-w-md">
              {t('intro')}
            </p>

            {/* Stats — borderless, spaced columns */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((s) => (
                <div key={s.number} className="flex flex-col gap-1.5">
                  <span className="text-[40px] font-semibold leading-none tracking-tight text-[var(--text-brand)]">
                    {s.number}
                  </span>
                  <span className="type-meta text-[var(--text-secondary)]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-10 h-px bg-[var(--border-subtle)]" />

            {/* Value points — no outer border, just spacing */}
            <div className="mt-8 space-y-7">
              {valuePoints.map((v, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-0.5 flex-shrink-0 type-kicker text-[var(--text-brand)] opacity-40 w-5 leading-tight">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="type-body font-medium text-[var(--text-primary)]">{v.title}</p>
                    <p className="mt-1.5 type-body-small text-[var(--text-secondary)] leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <p className="mt-10 type-body-small text-[var(--text-dimmed)] italic leading-relaxed">
              {t('trustLine')}
            </p>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="border border-[var(--border-subtle)] bg-[var(--surface-0)]">

            <form onSubmit={onSubmit} className="px-8 py-8 space-y-5">

              {/* Name + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="type-body-small font-medium text-[var(--text-primary)]">
                    {t('fields.name.label')}
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className={inputClass}
                    placeholder={t('fields.name.placeholder')}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="type-body-small font-medium text-[var(--text-primary)]">
                    {t('fields.email.label')}
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className={inputClass}
                    placeholder={t('fields.email.placeholder')}
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Stage */}
              <div className="flex flex-col gap-2">
                <label className="type-body-small font-medium text-[var(--text-primary)]">
                  {t('fields.stage.label')}
                </label>
                <select
                  value={form.stage}
                  onChange={(e) => update('stage', e.target.value as FormState['stage'])}
                  className={inputClass}
                >
                  <option value="live">{t('fields.stage.options.live')}</option>
                  <option value="building">{t('fields.stage.options.building')}</option>
                  <option value="idea">{t('fields.stage.options.idea')}</option>
                </select>
              </div>

              {/* URLs */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="type-body-small font-medium text-[var(--text-primary)]">
                    {t('fields.productUrl.label')}
                  </label>
                  <input
                    value={form.productUrl}
                    onChange={(e) => update('productUrl', e.target.value)}
                    className={inputClass}
                    placeholder={t('fields.productUrl.placeholder')}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="type-body-small font-medium text-[var(--text-primary)]">
                    {t('fields.figmaUrl.label')}
                  </label>
                  <input
                    value={form.figmaUrl}
                    onChange={(e) => update('figmaUrl', e.target.value)}
                    className={inputClass}
                    placeholder={t('fields.figmaUrl.placeholder')}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="type-body-small font-medium text-[var(--text-primary)]">
                  {t('fields.message.label')}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`${inputClass} min-h-[140px] resize-none`}
                  placeholder={t('fields.message.placeholder')}
                  required
                />
                <p className="type-body-small text-[var(--text-dimmed)]">{t('fields.message.helper')}</p>
              </div>

              {/* Submit row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-base bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] disabled:opacity-50"
                >
                  {isSubmitting ? t('actions.sending') : t('actions.submit')}
                </button>

                {status === 'success' && (
                  <span className="type-body-small text-[var(--green-700)]">{t('status.success')}</span>
                )}
                {status === 'error' && (
                  <span className="type-body-small text-[var(--coral-600)]">
                    {errorMsg === 'Something went wrong. Please try again.'
                      ? t('status.errorFallback')
                      : errorMsg}
                  </span>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
