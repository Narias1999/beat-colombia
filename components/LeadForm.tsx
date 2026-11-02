'use client';

import { useState } from 'react';
import SmartLink from '@/components/SmartLink';
import StravaIcon from '@/components/StravaIcon';
import { ext } from '@/lib/config';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';
import { leadsConfigured, submitLead } from '@/lib/leads';

function CheckBadge() {
  return (
    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-teal-mint">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Pin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

type Status = 'idle' | 'sending' | 'ok' | 'error';

/**
 * Two flavours of the same form, both posting to the same spreadsheet:
 *   'info' — the "more information" form on the Join page (name, email, phone)
 *   'ride' — sign-up for the inaugural ride (name and phone only)
 * The sheet's "page" column records which page a row came from, so no change
 * to the Apps Script is needed to tell the two apart.
 */
export default function LeadForm({
  locale,
  variant = 'info',
}: {
  locale: Locale;
  variant?: 'info' | 'ride';
}) {
  const dict = getDict(locale);
  const ride = variant === 'ride';
  const info = dict.join.lead;
  const t = ride ? dict.inauguration.form : info;

  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  // Kept so the ride confirmation can greet people by name.
  const [signedUpAs, setSignedUpAs] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? '').trim();

    setSignedUpAs(get('name'));

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

    if (!name || !phone || (!ride && !email)) {
      setStatus('error');
      setMessage(t.required);
      return;
    }
    if (!ride && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus('error');
      setMessage(info.invalidEmail);
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

  const sectionClass = 'mx-auto max-w-site px-5 md:px-8 ' + (ride ? 'mt-10' : 'mt-20');

  // Signing up for a ride is a moment worth more than a line of helper text, so
  // the whole form is replaced by the details people actually need on Sunday.
  if (ride && status === 'ok') {
    const f = dict.inauguration.form;
    return (
      <section id="signup" className={sectionClass}>
        <div role="status" className="rounded-card bg-teal px-8 py-14 text-center text-white md:px-12">
          <CheckBadge />
          <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
            {f.doneTitle.replace('{name}', signedUpAs)}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">{f.doneSub}</p>

          <div className="mx-auto mt-10 grid max-w-lg gap-6 text-left sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-mint">{f.doneWhen}</p>
              <p className="mt-1.5 text-lg font-extrabold">{dict.inauguration.dateLong}</p>
              <p className="text-white/80">{dict.inauguration.time}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-teal-mint">{f.doneWhere}</p>
              <p className="mt-1.5 text-lg font-extrabold">{dict.inauguration.map.name}</p>
              <p className="text-white/80">{dict.inauguration.map.street}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <SmartLink
              href={ext.patiosMeetingPoint}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-teal-mint px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
            >
              <Pin />
              {dict.inauguration.map.openInMaps}
            </SmartLink>
            {/* Natural next step once the spot is secured. */}
            <SmartLink
              href={ext.strava}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/85 transition-colors hover:text-teal-mint"
            >
              <StravaIcon size={16} />
              {dict.strava.join}
            </SmartLink>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setMessage('');
              }}
              className="text-sm font-bold text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              {f.doneAgain}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const field =
    'w-full rounded-full bg-white px-5 py-3 text-[15px] text-ink outline-none placeholder:text-ink/40 focus:ring-2 focus:ring-teal-mint';
  const label = 'mb-1.5 block text-xs font-bold uppercase tracking-wider text-teal-mint';

  return (
    <section id={ride ? 'signup' : 'info'} className={sectionClass}>
      <div className="rounded-card bg-teal px-8 py-12 text-white md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          {ride && (
            <span className="inline-block rounded-full bg-teal-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              {dict.inauguration.form.spots}
            </span>
          )}
          <h2 className={'text-3xl font-extrabold md:text-4xl ' + (ride ? 'mt-4' : '')}>{t.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{t.body}</p>
        </div>

        <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 max-w-md">
          <div className="grid gap-4">
            <div>
              <label htmlFor="lead-name" className={label}>
                {t.name}
              </label>
              <input id="lead-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} className={field} />
            </div>
            {!ride && (
              <div>
                <label htmlFor="lead-email" className={label}>
                  {info.email}
                </label>
                <input id="lead-email" name="email" type="email" autoComplete="email" placeholder={info.emailPlaceholder} className={field} />
              </div>
            )}
            <div>
              <label htmlFor="lead-phone" className={label}>
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
