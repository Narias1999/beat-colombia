'use client';

import { usePathname } from 'next/navigation';
import {
  LANG_STORAGE_KEY,
  localeNames,
  locales,
  swapLocalePath,
  type Locale,
} from '@/lib/i18n';

/**
 * EN / ES toggle. Uses a plain <a> (full navigation) so the <html lang> and the
 * locale-detection script stay in sync. Clicking records an explicit choice,
 * which permanently disables browser-language auto-detection.
 */
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '/';

  const remember = (l: Locale) => {
    try {
      localStorage.setItem(LANG_STORAGE_KEY, l);
    } catch {
      /* private mode — fall back to URL-only switching */
    }
  };

  return (
    <div
      className="flex items-center overflow-hidden rounded-full border border-black/15 text-xs font-bold"
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <a
            key={l}
            href={swapLocalePath(pathname, l)}
            hrefLang={l}
            onClick={() => remember(l)}
            aria-current={active ? 'true' : undefined}
            className={
              'px-2.5 py-1.5 transition-colors ' +
              (active ? 'bg-teal text-white' : 'text-ink/60 hover:bg-black/5 hover:text-teal')
            }
          >
            {localeNames[l]}
          </a>
        );
      })}
    </div>
  );
}
