import Image from 'next/image';
import SmartLink from '@/components/SmartLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import MobileMenu from '@/components/MobileMenu';
import { ext, routes } from '@/lib/config';
import { getDict } from '@/lib/dict';
import { localePath, type Locale } from '@/lib/i18n';

export default function Header({ locale }: { locale: Locale }) {
  const { ui, nav } = getDict(locale);
  const home = localePath(locale, '/');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-5 md:px-8">
        {/*
          The official BEAT / Saxo lockup. Below `sm` the row is too tight for
          the whole thing, so the box is narrowed and the image cropped from the
          left — which leaves just the BEAT mark, no second asset needed.
        */}
        <SmartLink
          href={home}
          className="relative block h-8 w-[78px] shrink-0 sm:h-10 sm:w-[198px]"
          aria-label={ui.home}
        >
          <Image
            src="/brand/beat-saxo.webp"
            alt="BEAT Cycling Club — powered by Saxo"
            fill
            priority
            sizes="198px"
            className="object-cover object-left"
          />
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
          <LanguageSwitcher locale={locale} />
          {/* Below md the primary nav and Shop are hidden, so they move here */}
          <MobileMenu
            items={[...nav, { label: ui.shop, href: ext.shop }]}
            menuLabel={ui.menu}
          />
        </div>
      </div>
    </header>
  );
}
