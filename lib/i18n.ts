// Locale plumbing.
//
// English is the default and lives on the bare paths (/, /club, ...) so existing
// links keep working. Colombian Spanish lives under /es (/es/, /es/club, ...).
// Language is auto-detected from the browser on first visit (see LocaleScript),
// falling back to English when the browser is not Spanish.

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Prefix a canonical path (e.g. "/club") for the given locale. */
export function localePath(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  return path === '/' ? '/es' : `/es${path}`;
}

/** Strip the locale prefix off a real pathname, returning the canonical path. */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/es(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** The equivalent of `pathname` in the other locale. */
export function swapLocalePath(pathname: string, to: Locale): string {
  return localePath(to, stripLocale(pathname));
}

/** localStorage key holding an explicit user choice; suppresses auto-detect. */
export const LANG_STORAGE_KEY = 'beat_lang';

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};
