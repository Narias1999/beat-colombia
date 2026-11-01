import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

export default function FirstTeamPage({ locale }: { locale: Locale }) {
  const { firstTeam } = getDict(locale);

  return (
    <PageShell locale={locale}>
      <PageHero
        title={firstTeam.hero.title}
        lead={firstTeam.hero.lead}
        paragraphs={firstTeam.hero.paragraphs}
        image={firstTeam.hero.image}
        imageAlt={firstTeam.hero.imageAlt}
      />

      {/* Riders */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-teal md:text-4xl">
          {firstTeam.ridersHeading}
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {firstTeam.riders.map((r) => (
            <figure key={r.name}>
              <div className="relative aspect-square overflow-hidden rounded-card bg-teal/10">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-4 text-center">
                <p className="text-lg font-extrabold text-ink">{r.name}</p>
                <p className="mt-0.5 text-sm font-semibold text-teal-mint">{r.disciplines}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Calendar — full-bleed teal band, as on the original */}
      <section className="mt-20 bg-teal py-14">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            {firstTeam.calendarHeading}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {firstTeam.calendar.map((e) => (
              <div key={e.name} className="rounded-card bg-white/10 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-teal-mint">{e.date}</p>
                <h3 className="mt-2 text-xl font-extrabold text-white">{e.name}</h3>
                <p className="mt-1 text-white/70">{e.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rider quotes */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {firstTeam.quotes.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-card bg-teal p-8 text-white">
              <span aria-hidden className="text-5xl font-extrabold leading-none text-teal-mint">“</span>
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-white/90">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/20 pt-4 text-center">
                <p className="font-bold">{q.name}</p>
                <p className="text-sm text-teal-mint">{q.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <SmartLink
            href={firstTeam.cta.href}
            className="inline-block rounded-full bg-teal-mint px-9 py-4 text-base font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            {firstTeam.cta.label}
          </SmartLink>
        </div>
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
