import PageShell from '@/components/PageShell';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import LeadForm from '@/components/LeadForm';
import ElevationProfile from '@/components/ElevationProfile';
import StravaIcon from '@/components/StravaIcon';
import { ext, RIDE_MEETING_POINT_EMBED } from '@/lib/config';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
      {children}
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

export default function InaugurationPage({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.inauguration;

  return (
    <PageShell locale={locale}>
      {/* ------------------------------------------------------------ Hero -- */}
      <section className="mx-auto max-w-site px-5 pt-4 md:px-8">
        <div className="relative overflow-hidden rounded-card bg-teal text-white">
          {/* The climb itself, used as the artwork behind the headline */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] text-white/40" aria-hidden>
            <ElevationProfile labels={t.profile.labels} compact className="h-full w-full opacity-70" />
          </div>

          <div className="relative px-8 py-12 md:px-14 md:py-16">
            <span className="inline-block rounded-full bg-teal-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {t.badge}
            </span>
            <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.2em] text-teal-mint">{t.kicker}</p>
            <h1 className="mt-2 text-5xl font-extrabold leading-[0.95] md:text-7xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 md:text-xl">{t.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Chip>{t.dateLong}</Chip>
              <Chip>{t.time}</Chip>
              <Chip>
                <Pin />
                {t.place}
              </Chip>
            </div>

            <div className="mt-9 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold leading-none md:text-4xl">{s.value}</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wider text-teal-mint">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <SmartLink
                href="#signup"
                className="rounded-full bg-teal-mint px-8 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
              >
                {t.cta}
              </SmartLink>
              <span className="text-sm font-bold text-white/70">{t.spotsNote}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Ride sign-up -- */}
      <LeadForm locale={locale} variant="ride" />

      {/* --------------------------------------------- Elevation profile -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{t.profile.heading}</h2>
            <p className="mt-4 leading-relaxed text-ink/75">{t.profile.body}</p>
            <p className="mt-4 text-sm text-ink/50">{t.profile.note}</p>

            {/* The climb is what people came to read about, so the club's
                Strava sits right under it rather than in a social bar. */}
            <div className="mt-8 rounded-card border border-black/10 bg-white p-6">
              <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-teal">
                <StravaIcon size={16} />
                {dict.strava.clubHeading}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{dict.strava.clubBody}</p>
              <SmartLink
                href={ext.strava}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-teal px-6 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white"
              >
                {dict.strava.join}
              </SmartLink>
            </div>
          </div>
          <div className="rounded-card border border-black/10 bg-neutral-50 p-5 text-ink md:p-7">
            <ElevationProfile labels={t.profile.labels} narrow className="h-[260px] w-full md:hidden" />
            <ElevationProfile labels={t.profile.labels} className="hidden h-[300px] w-full md:block" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Ride info -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{t.infoHeading}</h2>
        <dl className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.info.map((row) => (
            <div key={row.label} className="rounded-card border border-black/10 bg-white p-7">
              <dt className="text-xs font-bold uppercase tracking-wider text-teal">{row.label}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-ink/80">{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* --------------------------------------------------- Meeting point -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-card bg-teal text-white lg:grid-cols-[0.85fr_1.15fr]">
          <div className="px-8 py-12 md:px-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">{t.map.heading}</h2>
            <p className="mt-6 text-2xl font-extrabold text-teal-mint">{t.map.name}</p>
            <p className="mt-1 font-bold">{t.map.street}</p>
            <p className="mt-1 text-white/80">{t.map.address}</p>
            <p className="mt-6 max-w-md leading-relaxed text-white/90">{t.map.body}</p>
            <SmartLink
              href={ext.rideMeetingPoint}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-mint px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
            >
              <Pin />
              {t.map.openInMaps}
            </SmartLink>
          </div>
          <div className="min-h-[320px] bg-white/10 lg:min-h-full">
            <iframe
              src={RIDE_MEETING_POINT_EMBED}
              title={t.map.embedTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Closing -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="rounded-card border border-black/10 bg-neutral-50 px-8 py-12 text-center md:px-12">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{t.closing.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/75">{t.closing.body}</p>
          <SmartLink
            href={t.closing.cta.href}
            className="mt-8 inline-block rounded-full bg-teal px-8 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            {t.closing.cta.label}
          </SmartLink>
        </div>
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
