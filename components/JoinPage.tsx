import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0" stroke="currentColor" strokeWidth="3">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function JoinPage({ locale }: { locale: Locale }) {
  const { join } = getDict(locale);

  return (
    <PageShell locale={locale}>
      <PageHero
        title={join.hero.title}
        lead={join.hero.lead}
        paragraphs={join.hero.paragraphs}
        image={join.hero.image}
        imageAlt={join.hero.imageAlt}
      />

      {/* Plan chooser */}
      <section className="mx-auto mt-16 max-w-site px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{join.chooseHeading}</h2>
          <p className="mt-3 text-ink/70">{join.chooseSub}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {join.plans.map((plan) => (
            <div
              key={plan.name}
              className={
                'relative flex flex-col rounded-card p-8 ' +
                (plan.highlight
                  ? 'bg-teal text-white ring-2 ring-teal-mint'
                  : 'border border-black/10 bg-white text-ink')
              }
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-teal-mint px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {join.mostChosen}
                </span>
              )}
              <h3 className="text-xl font-extrabold">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-1.5">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className={'pb-1 text-sm ' + (plan.highlight ? 'text-white/70' : 'text-ink/60')}>
                  {plan.period}
                </span>
              </div>

              <div className="mt-6 space-y-5">
                {plan.groups.map((g) => (
                  <div key={g.label}>
                    <p
                      className={
                        'text-xs font-bold uppercase tracking-wider ' +
                        (plan.highlight ? 'text-teal-mint' : 'text-teal')
                      }
                    >
                      {g.label}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className={
                            'flex gap-2 text-[15px] leading-snug ' +
                            (plan.highlight ? 'text-white/90' : 'text-ink/80')
                          }
                        >
                          <span className={plan.highlight ? 'text-teal-mint' : 'text-teal'}>
                            <Check />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <SmartLink
                href={plan.href}
                className={
                  'mt-8 rounded-full px-7 py-3 text-center text-[15px] font-bold uppercase tracking-wide transition-transform hover:scale-[1.03] ' +
                  (plan.highlight
                    ? 'bg-teal-mint text-white'
                    : 'bg-teal text-white')
                }
              >
                {plan.button}
              </SmartLink>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {join.testimonials.map((t, i) => (
            <figure key={i} className="flex flex-col overflow-hidden rounded-card bg-neutral-50">
              <div className="relative aspect-[4/3]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <blockquote className="flex-1 text-[16px] font-medium leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-teal">
                  {t.name}
                  <span className="block text-xs font-medium text-ink/50">{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Podcast + press features (alternating image side) */}
      <section className="mx-auto mt-16 max-w-site space-y-6 px-5 md:px-8">
        {[join.podcast, join.press].map((f, i) => {
          const dark = i === 0;
          return (
            <div
              key={i}
              className={
                'grid items-center overflow-hidden rounded-card md:grid-cols-2 ' +
                (dark ? 'bg-teal text-white' : 'border border-black/10 bg-neutral-50 text-ink')
              }
            >
              <div className={'relative min-h-[240px] ' + (i === 1 ? 'md:order-2' : '')}>
                <Image src={f.image} alt="" fill sizes="(max-width:768px) 100vw, 640px" className="object-cover" />
              </div>
              <div className="px-8 py-10 md:px-12">
                <h2 className="text-2xl font-extrabold md:text-3xl">{f.heading}</h2>
                <p className={'mt-4 leading-relaxed ' + (dark ? 'text-white/90' : 'text-ink/75')}>{f.body}</p>
                <SmartLink
                  href={f.cta.href}
                  className={
                    'mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03] ' +
                    (dark ? 'bg-teal-mint' : 'bg-teal')
                  }
                >
                  {f.cta.label}
                  <span aria-hidden>→</span>
                </SmartLink>
              </div>
            </div>
          );
        })}
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
