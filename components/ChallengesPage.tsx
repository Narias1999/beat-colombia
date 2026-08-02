import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { challenges } from '@/lib/content';

export default function ChallengesPage() {
  return (
    <PageShell>
      <PageHero
        title={challenges.hero.title}
        lead={challenges.hero.lead}
        paragraphs={challenges.hero.paragraphs}
        image={challenges.hero.image}
        imageAlt={challenges.hero.imageAlt}
      />

      {/* Each challenge: centered heading, video + badge, info card */}
      <div className="mx-auto max-w-site space-y-20 px-5 pt-20 md:px-8">
        {challenges.items.map((c) => (
          <section key={c.title}>
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-tight text-teal md:text-3xl">
              {c.title}
              <span className="text-ink"> — {c.tagline}</span>
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              {/* Video */}
              <div className="relative aspect-video overflow-hidden rounded-card bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${c.video}`}
                  title={c.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Badge */}
              <div className="relative min-h-[220px] overflow-hidden rounded-card">
                <Image src={c.image} alt={`${c.title} badge`} fill sizes="(max-width:1024px) 100vw, 440px" className="object-cover" />
              </div>
            </div>

            {/* Info card */}
            <div className="mt-6 rounded-card bg-teal px-8 py-9 text-white md:px-12">
              <p className="text-lg font-medium">{c.blurb}</p>
              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-wider text-teal-mint">How does it work?</p>
                <p className="mt-2 max-w-3xl leading-relaxed text-white/90">{c.how}</p>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.meta.map((m) => (
                  <li key={m} className="rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
                    {m}
                  </li>
                ))}
              </ul>
              <SmartLink
                href={c.href}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-mint px-6 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
              >
                Check the Online Clubhouse
                <span aria-hidden>→</span>
              </SmartLink>
            </div>
          </section>
        ))}
      </div>

      {/* Events */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="rounded-card bg-teal px-8 py-12 text-white md:px-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">{challenges.eventsHeading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {challenges.events.map((e) => (
              <div key={e.name} className="rounded-card bg-white/10 p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-teal-mint">{e.date}</p>
                <h3 className="mt-2 text-xl font-extrabold">{e.name}</h3>
                <p className="mt-1 text-white/70">{e.place}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strava band */}
      <section className="mx-auto mt-16 max-w-site px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 rounded-card bg-[#FC4C02] px-8 py-12 text-center text-white md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="shrink-0">
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">{challenges.strava.title}</h2>
              <p className="mt-2 max-w-xl text-white/90">{challenges.strava.body}</p>
            </div>
          </div>
          <SmartLink
            href={challenges.strava.cta.href}
            className="shrink-0 rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-[#FC4C02] transition-transform hover:scale-[1.03]"
          >
            {challenges.strava.cta.label}
          </SmartLink>
        </div>
      </section>

      <PartnerLogos />
    </PageShell>
  );
}
