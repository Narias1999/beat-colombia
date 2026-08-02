import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { clubhouse } from '@/lib/content';

function Check() {
  return (
    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-teal-mint text-white">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ClubhousePage() {
  return (
    <PageShell>
      <PageHero
        title={clubhouse.hero.title}
        lead={clubhouse.hero.lead}
        paragraphs={clubhouse.hero.paragraphs}
        image={clubhouse.hero.image}
        imageAlt={clubhouse.hero.imageAlt}
      />

      {/* Access callouts + app CTA */}
      <section className="mx-auto mt-12 max-w-site px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {clubhouse.callouts.map((c) => (
            <div key={c.title} className="rounded-card border border-black/10 bg-neutral-50 p-7">
              <h3 className="text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{c.body}</p>
              <SmartLink
                href={c.cta.href}
                className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-bold text-teal hover:underline"
              >
                {c.cta.label}
                <span aria-hidden>→</span>
              </SmartLink>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <SmartLink
            href={clubhouse.appCta.href}
            className="inline-block rounded-full bg-teal-mint px-9 py-4 text-base font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            {clubhouse.appCta.label}
          </SmartLink>
        </div>
      </section>

      {/* What is the Online Clubhouse — checklist + collage */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{clubhouse.featuresHeading}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">{clubhouse.featuresIntro}</p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <ul className="space-y-5">
            {clubhouse.features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <Check />
                <p className="text-[15px] leading-relaxed text-ink/80">
                  <span className="font-bold text-ink">{f.title}</span> — {f.desc}
                </p>
              </li>
            ))}
          </ul>
          <div className="relative aspect-square overflow-hidden rounded-card bg-neutral-100">
            <Image
              src={clubhouse.featuresImage}
              alt="The Online Clubhouse app"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Join us band */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="rounded-card bg-teal px-8 py-14 text-center text-white md:px-12">
          <h2 className="text-3xl font-extrabold md:text-4xl">{clubhouse.joinBand.heading}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{clubhouse.joinBand.body}</p>
          <SmartLink
            href={clubhouse.joinBand.cta.href}
            className="mt-7 inline-block rounded-full bg-teal-mint px-9 py-4 text-base font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
          >
            {clubhouse.joinBand.cta.label}
          </SmartLink>
        </div>
      </section>

      <PartnerLogos />
    </PageShell>
  );
}
