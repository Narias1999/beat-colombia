// Lead capture for the "more information" form.
//
// The site is a static export, so there is no backend here: the form posts
// straight to whatever endpoint NEXT_PUBLIC_LEADS_ENDPOINT points at.
// Two supported setups (see scripts/leads-google-sheet.gs):
//   1. Google Apps Script web app  -> rows land in a Google Sheet
//   2. Formspree / Web3Forms style -> submissions arrive by email
// If the variable is unset the form still renders but refuses to submit.

export type Lead = {
  name: string;
  email: string;
  phone: string;
  locale: string;
  page: string;
};

// Google Apps Script web app writing into the leads spreadsheet.
// This is a NEXT_PUBLIC_ value, so it ships inside the client bundle either
// way — committing it is no more exposed than setting it in Vercel, and it
// keeps local dev working. Override per-environment with the env var.
const DEFAULT_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyXFPd9t4Iyp0F70LmaJZ8CTnkvkgRg2dLMT90QZjv1XEgIFAXFrdvDadLIdZ4U61Wk/exec';

const ENDPOINT = (process.env.NEXT_PUBLIC_LEADS_ENDPOINT || DEFAULT_ENDPOINT).trim();

export const leadsConfigured = ENDPOINT.length > 0;

export async function submitLead(lead: Lead): Promise<void> {
  if (!ENDPOINT) throw new Error('NEXT_PUBLIC_LEADS_ENDPOINT is not set');

  // Apps Script web apps cannot return CORS headers, so post opaquely with a
  // simple content type to avoid a preflight. We cannot read the response, but
  // the row is written. Everything else gets a normal JSON post we can check.
  if (ENDPOINT.includes('script.google.com')) {
    await fetch(ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(lead),
    });
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(lead),
  });
  if (!res.ok) throw new Error('Submit failed with status ' + res.status);
}
