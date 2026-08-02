import SmartLink from '@/components/SmartLink';
import { nav, routes, ext, ORIGINAL } from '@/lib/config';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-5 md:px-8">
        {/* Logo + Saxo co-brand lockup */}
        <SmartLink href="/" className="flex items-center gap-3" aria-label="BEAT Cycling Club home">
          <span className="text-2xl font-extrabold italic tracking-tight text-ink">BEAT</span>
          <span className="hidden h-8 w-px bg-black/15 sm:block" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-ink/50">Powered by</span>
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
            href={routes.join}
            className="rounded-full bg-teal-mint px-6 py-2.5 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            Join Now!
          </SmartLink>
          <SmartLink
            href={ext.shop}
            className="hidden rounded-full bg-teal px-6 py-2.5 text-[15px] font-bold text-white transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Shop
          </SmartLink>
          <SmartLink
            href={ext.login}
            aria-label="Log in"
            className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-black/5"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.6 3.6-6 8-6s8 2.4 8 6" strokeLinecap="round" />
            </svg>
          </SmartLink>
          {/* Language switcher — the Dutch original lives on the source site */}
          <SmartLink
            href={ORIGINAL}
            className="hidden items-center gap-1 rounded-full border border-black/15 px-3 py-1.5 text-xs font-semibold text-ink/70 hover:border-teal hover:text-teal lg:flex"
          >
            EN
            <span className="text-ink/30">/</span>
            <span className="text-ink/40">NL</span>
          </SmartLink>
        </div>
      </div>
    </header>
  );
}
