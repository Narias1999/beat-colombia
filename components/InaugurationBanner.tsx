import SmartLink from '@/components/SmartLink';
import ElevationProfile from '@/components/ElevationProfile';
import StravaIcon from '@/components/StravaIcon';
import { ext, routes } from '@/lib/config';
import { getDict } from '@/lib/dict';
import { localePath, type Locale } from '@/lib/i18n';

/**
 * The loudest thing on the homepage after the hero: the inaugural ride.
 * Full-bleed so it reads as a break in the page rather than another card.
 */
export default function InaugurationBanner({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.inauguration;
  const href = localePath(locale, routes.inauguration);

  return (
    <section className="relative mt-16 overflow-hidden bg-teal-dark text-white">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] opacity-50" aria-hidden>
        <ElevationProfile labels={t.profile.labels} compact className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-site px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full bg-teal-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {t.badge}
            </span>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-teal-mint">{t.kicker}</p>
            <h2 className="mt-2 text-5xl font-extrabold leading-[0.95] md:text-7xl">{t.title}</h2>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-white/90">{t.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <SmartLink
                href={href}
                className="rounded-full bg-teal-mint px-8 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
              >
                {t.homeCta}
              </SmartLink>
              <SmartLink
                href={ext.strava}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-white/80 transition-colors hover:text-teal-mint"
              >
                <StravaIcon />
                {dict.strava.follow}
              </SmartLink>
            </div>
            <p className="mt-4 text-sm font-bold text-white/60">{t.spotsNote}</p>
          </div>

          <div className="lg:pb-2">
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              <div>
                <p className="text-2xl font-extrabold leading-none md:text-3xl">{t.dateLong}</p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-teal-mint">{t.time}</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold leading-none md:text-3xl">{t.map.name}</p>
                <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-teal-mint">{t.map.street}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-white/20 pt-7 sm:grid-cols-4 lg:grid-cols-2">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-extrabold leading-none md:text-3xl">{s.value}</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
