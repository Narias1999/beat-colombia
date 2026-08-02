import SmartLink from '@/components/SmartLink';
import { footer, routes } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="mt-24 bg-teal text-white">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <SmartLink
              href={routes.club}
              className="grid h-12 w-12 place-items-center rounded-full border-2 border-white text-xs font-extrabold"
              aria-label="BEAT Cycling Club home"
            >
              BEAT
            </SmartLink>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80">
              BEAT Cycling Club — a rider-owned club for everyone who wants more
              out of cycling, on and off the bike.
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/60">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <SmartLink
                      href={link.href}
                      className="text-[15px] text-white/90 transition-colors hover:text-teal-mint"
                    >
                      {link.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© 2026 BEAT Cycling Club. All rights reserved.</p>
          <p>English clone — built with Next.js (SSG).</p>
        </div>
      </div>
    </footer>
  );
}
