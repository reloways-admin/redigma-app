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
  'w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-0)] px-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[#732fff] transition-colors';

export default function FeedbackPage() {
  const t = useTranslations('feedback');
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

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
    <div className="bg-[var(--background)] flex-1">
      <div className="mx-auto max-w-[1360px] px-6 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:items-start">

          {/* ── LEFT: Value panel ── */}
          <div className="lg:sticky lg:top-28">

            {/* Eyebrow */}
            <p className="type-kicker text-[#732fff] mb-5">{t('eyebrow')}</p>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-[var(--text-primary)] leading-tight lg:text-4xl">
              {t('title')}
            </h1>
            <p className="mt-5 text-base text-[var(--text-secondary)] leading-relaxed max-w-md">
              {t('intro')}
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.number} className="flex flex-col gap-1.5">
                  <span className="text-[38px] font-semibold leading-none tracking-tight text-[#732fff]">
                    {s.number}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] leading-snug">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-10 h-px bg-[var(--border-subtle)]" />

            {/* Value points */}
            <div className="mt-8 space-y-7">
              {valuePoints.map((v, i) => (
                <div key={i} className="flex gap-5">
                  <span className="mt-0.5 shrink-0 text-xs font-bold uppercase tracking-widest text-[#732fff]/40 w-5 leading-tight">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{v.title}</p>
                    <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">{v.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <p className="mt-10 text-sm text-[var(--text-secondary)] italic leading-relaxed">
              {t('trustLine')}
            </p>
          </div>

          {/* ── RIGHT: Form card ── */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#732fff]/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L20 7" stroke="#732fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">{t('status.success')}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">

                {/* Name + Email */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-[var(--text-primary)]">
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
                    <label className="text-sm font-medium text-[var(--text-primary)]">
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
                  <label className="text-sm font-medium text-[var(--text-primary)]">
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
                    <label className="text-sm font-medium text-[var(--text-primary)]">
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
                    <label className="text-sm font-medium text-[var(--text-primary)]">
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
                  <label className="text-sm font-medium text-[var(--text-primary)]">
                    {t('fields.message.label')}
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className={`${inputClass} min-h-[140px] resize-none`}
                    placeholder={t('fields.message.placeholder')}
                    required
                  />
                  <p className="text-xs text-[var(--text-secondary)]">{t('fields.message.helper')}</p>
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-sm text-red-500">
                    {errorMsg === 'Something went wrong. Please try again.'
                      ? t('status.errorFallback')
                      : errorMsg}
                  </p>
                )}

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-[#732fff] hover:bg-[#5f22e0] text-white text-sm font-medium px-6 py-3 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? t('actions.sending') : t('actions.submit')}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
