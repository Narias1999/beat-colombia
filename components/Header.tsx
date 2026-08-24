import SmartLink from '@/components/SmartLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { ext, routes } from '@/lib/config';
import { getDict } from '@/lib/dict';
import { localePath, type Locale } from '@/lib/i18n';

export default function Header({ locale }: { locale: Locale }) {
  const { ui, nav } = getDict(locale);
  const home = localePath(locale, '/');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-5 md:px-8">
        {/* Logo + Saxo co-brand lockup */}
        <SmartLink href={home} className="flex items-center gap-3" aria-label={ui.home}>
          <span className="text-2xl font-extrabold italic tracking-tight text-ink">BEAT</span>
          <span className="hidden h-8 w-px bg-black/15 sm:block" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-ink/50">
              {ui.poweredBy}
            </span>
            <span className="text-sm font-extrabold tracking-tight text-teal">SAXO</span>
          </span>
        </SmartLink>

        {/* Primary nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <SmartLink
              key={item.label}
              href={item.href}
              className="text-[15px] font-semibold text-ink transition-colors hover:text-teal"
            >
              {item.label}
            </SmartLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <SmartLink
            href={localePath(locale, routes.join)}
            className="rounded-full bg-teal-mint px-6 py-2.5 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            {ui.joinNow}
          </SmartLink>
          <SmartLink
            href={ext.shop}
            className="hidden rounded-full bg-teal px-6 py-2.5 text-[15px] font-bold text-white transition-transform hover:scale-[1.03] sm:inline-block"
          >
            {ui.shop}
          </SmartLink>
          <SmartLink
            href={ext.login}
            aria-label={ui.login}
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-black/5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.6 3.6-6 8-6s8 2.4 8 6" strokeLinecap="round" />
            </svg>
          </SmartLink>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
