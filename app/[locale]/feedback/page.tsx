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

export default function FeedbackPage() {
  const t = useTranslations('feedback');
  const [form, setForm] = useState<FormState>(initialState);
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
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold">{t('title')}</h1>

      <p className="mb-10 max-w-2xl text-gray-700">{t('intro')}</p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.name.label')}</label>
            <input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
              placeholder={t('fields.name.placeholder')}
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.email.label')}</label>
            <input
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
              placeholder={t('fields.email.placeholder')}
              type="email"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.stage.label')}</label>
          <select
            value={form.stage}
            onChange={(e) => update('stage', e.target.value as FormState['stage'])}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="live">{t('fields.stage.options.live')}</option>
            <option value="building">{t('fields.stage.options.building')}</option>
            <option value="idea">{t('fields.stage.options.idea')}</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.productUrl.label')}</label>
          <input
            value={form.productUrl}
            onChange={(e) => update('productUrl', e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder={t('fields.productUrl.placeholder')}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.figmaUrl.label')}</label>
          <input
            value={form.figmaUrl}
            onChange={(e) => update('figmaUrl', e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder={t('fields.figmaUrl.placeholder')}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">{t('fields.message.label')}</label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="min-h-[140px] w-full rounded-md border px-3 py-2 text-sm"
            placeholder={t('fields.message.placeholder')}
            required
          />
          <p className="mt-2 text-xs text-gray-500">
            {t('fields.message.helper')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white disabled:opacity-60"
          >
            {isSubmitting ? t('actions.sending') : t('actions.submit')}
          </button>

          {status === 'success' && (
            <span className="text-sm text-green-700">{t('status.success')}</span>
          )}

          {status === 'error' && <span className="text-sm text-red-700">{errorMsg === 'Something went wrong. Please try again.' ? t('status.errorFallback') : errorMsg}</span>}
        </div>
      </form>
    </main>
  );
}