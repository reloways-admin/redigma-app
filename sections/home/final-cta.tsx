'use client';

import { useState } from 'react';
import Image from 'next/image';

const SERVICES = [
  'Product & UX Audit',
  'MVP Definition & Design',
  'AI Experience Strategy',
  'Design System Architecture',
  'SaaS & Complex Dashboards',
  'UX/UI Design',
];

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
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
                Does your product have a clear next step?
              </h2>
              <p className="text-3xl font-bold text-[var(--text-secondary)] lg:text-4xl leading-tight">
                Let&apos;s talk!
              </p>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Moving products from raw ideas to working MVPs, or optimizing what already exists for better performance.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                { label: 'NDA?', rest: 'Absolutely. Just ask.' },
                { label: 'Response time', rest: 'Fast and focused feedback within 24 hours.' },
                { label: 'Expertise', rest: 'Direct access to senior UX insights, with zero junior-level handoff.' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <CheckIcon />
                  <span>
                    <strong className="font-semibold text-[var(--text-primary)]">{item.label}</strong>
                    {': '}{item.rest}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-[var(--text-secondary)]">Based in Berlin. Working internationally.</p>

            <div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Schedule a call:</p>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] px-4 py-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                  <Image src="/images/home/amir-shalev.png" alt="Amir Shalev" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Amir Shalev</p>
                  <p className="text-xs text-[var(--text-secondary)]">Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <p className="text-lg font-semibold text-[var(--text-primary)]">Message sent!</p>
                <p className="text-sm text-[var(--text-secondary)]">I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="Tell us about your product goals and the current challenges."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass + ' resize-none'}
                />

                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">How can we help you?</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
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
                  <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
                )}

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full bg-[#732fff] hover:bg-[#5f22e0] text-white text-sm font-medium px-6 py-3 transition-colors disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending…' : 'Get strategic feedback'}
                  </button>
                  <p className="text-sm text-[var(--text-secondary)] text-right">
                    Prefer email?{' '}
                    <a href="mailto:amir@redigma.com" className="font-semibold text-[var(--text-primary)] hover:underline">
                      amir@redigma.com
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
