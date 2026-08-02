import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import { about } from '@/lib/content';

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title={about.hero.title}
        lead={about.hero.lead}
        paragraphs={about.hero.paragraphs}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
        ctas={[{ label: about.hero.cta.label, href: about.hero.cta.href }]}
      />

      {/* History timeline */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{about.historyHeading}</h2>

        <ol className="relative mt-10 border-l-2 border-teal/20 pl-8">
          {about.timeline.map((entry) => (
            <li key={entry.year} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-teal ring-4 ring-white">
                <span className="h-2 w-2 rounded-full bg-teal-mint" />
              </span>
              <p className="text-sm font-extrabold uppercase tracking-wider text-teal">{entry.year}</p>
              <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-ink/80">{entry.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Future vision */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid gap-6 overflow-hidden rounded-card bg-teal text-white lg:grid-cols-[1fr_0.9fr]">
          <div className="px-8 py-12 md:px-12 md:py-16">
            <h2 className="text-3xl font-extrabold md:text-4xl">{about.future.heading}</h2>
            {about.future.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-white/90">
                {p}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap gap-8">
              {about.future.leaders.map((l) => (
                <div key={l.name}>
                  <p className="font-bold">{l.name}</p>
                  <p className="text-sm text-teal-mint">{l.role}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src={about.future.image}
              alt={about.future.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <PartnerLogos />
    </PageShell>
  );
}
