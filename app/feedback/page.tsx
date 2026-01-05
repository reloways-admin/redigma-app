'use client';

import { useState } from 'react';

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
      <h1 className="mb-4 text-3xl font-semibold">Send your product or idea</h1>

      <p className="mb-10 max-w-2xl text-gray-700">
        Share what you have and I will reply with 3-4 focused UX observations.
        No decks. No sales pitch. Just useful feedback.
      </p>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Name</label>
            <input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <input
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full rounded-md border px-3 py-2 text-sm"
              placeholder="name@company.com"
              type="email"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Where are you right now?</label>
          <select
            value={form.stage}
            onChange={(e) => update('stage', e.target.value as FormState['stage'])}
            className="w-full rounded-md border px-3 py-2 text-sm"
          >
            <option value="live">Live product / MVP</option>
            <option value="building">Actively building</option>
            <option value="idea">Idea stage</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Product URL (optional)</label>
          <input
            value={form.productUrl}
            onChange={(e) => update('productUrl', e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Figma / designs link (optional)</label>
          <input
            value={form.figmaUrl}
            onChange={(e) => update('figmaUrl', e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder="https://figma.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">What should I look at?</label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className="min-h-[140px] w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Tell me what it is, what is confusing, and what you want to improve."
            required
          />
          <p className="mt-2 text-xs text-gray-500">
            This feedback often helps decide whether refining, rebuilding, or building an MVP makes sense.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Send for feedback'}
          </button>

          {status === 'success' && (
            <span className="text-sm text-green-700">Sent. I will get back to you soon.</span>
          )}

          {status === 'error' && <span className="text-sm text-red-700">{errorMsg}</span>}
        </div>
      </form>
    </main>
  );
}