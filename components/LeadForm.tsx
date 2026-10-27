'use client';

import { useState } from 'react';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';
import { leadsConfigured, submitLead } from '@/lib/leads';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function LeadForm({ locale }: { locale: Locale }) {
  const t = getDict(locale).join.lead;
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    // Honeypot: bots fill this in, people never see it.
    if (get('_gotcha')) {
      setStatus('ok');
      setMessage(t.success);
      form.reset();
      return;
    }

    const name = get('name');
    const email = get('email');
    const phone = get('phone');

    if (!name || !email || !phone) {
      setStatus('error');
      setMessage(t.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus('error');
      setMessage(t.invalidEmail);
      return;
    }
    if (!leadsConfigured) {
      setStatus('error');
      setMessage(t.notConfigured);
      return;
    }

    setStatus('sending');
    setMessage('');
    try {
      await submitLead({ name, email, phone, locale, page: window.location.pathname });
      setStatus('ok');
      setMessage(t.success);
      form.reset();
    } catch {
      setStatus('error');
      setMessage(t.error);
    }
  }

  const field =
    'w-full rounded-full bg-white px-5 py-3 text-[15px] text-ink outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-teal-mint';

  return (
    <section id="info" className="mx-auto mt-20 max-w-site px-5 md:px-8">
      <div className="rounded-card bg-teal px-8 py-12 text-white md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{t.body}</p>
        </div>

        <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 max-w-md">
          <div className="grid gap-4">
            <div>
              <label htmlFor="lead-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-teal-mint">
                {t.name}
              </label>
              <input id="lead-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} className={field} />
            </div>
            <div>
              <label htmlFor="lead-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-teal-mint">
                {t.email}
              </label>
              <input id="lead-email" name="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} className={field} />
            </div>
            <div>
              <label htmlFor="lead-phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-teal-mint">
                {t.phone}
              </label>
              <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phonePlaceholder} className={field} />
            </div>
          </div>

          {/* honeypot — hidden from people, irresistible to bots */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-full bg-teal-mint px-9 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? t.sending : t.submit}
            </button>
            <p className="text-xs text-white/60">{t.privacy}</p>
            <p
              aria-live="polite"
              className={
                'min-h-[20px] text-sm font-semibold ' +
                (status === 'ok' ? 'text-teal-mint' : status === 'error' ? 'text-amber-200' : '')
              }
            >
              {message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
