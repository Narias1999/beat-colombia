import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

export default function BenefitsPage({ locale }: { locale: Locale }) {
  const { benefits } = getDict(locale);

  return (
    <PageShell locale={locale}>
      <PageHero
        title={benefits.hero.title}
        lead={benefits.hero.lead}
        paragraphs={benefits.hero.paragraphs}
        image={benefits.hero.image}
        imageAlt={benefits.hero.imageAlt}
      />

      {/* Benefit groups */}
      <section className="mx-auto mt-16 max-w-site space-y-14 px-5 md:px-8">
        {benefits.groups.map((group) => (
          <div key={group.title}>
            <div className="grid items-center gap-6 md:grid-cols-[0.8fr_1.2fr]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-8 w-1.5 rounded-full bg-teal-mint" />
                  <h2 className="text-2xl font-extrabold text-ink md:text-3xl">{group.title}</h2>
                </div>
                <p className="mt-3 text-ink/70">{group.intro}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-card border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-teal">{item.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="rounded-card bg-teal px-8 py-14 text-center text-white md:px-12">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold md:text-4xl">
            {benefits.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{benefits.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {benefits.cta.buttons.map((b) => (
              <SmartLink
                key={b.label}
                href={b.href}
                className={
                  b.variant === 'outline'
                    ? 'rounded-full border-2 border-white px-7 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-teal'
                    : 'rounded-full bg-teal-mint px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]'
                }
              >
                {b.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
