import Image from 'next/image';
import PageShell from '@/components/PageShell';
import PartnerLogos from '@/components/PartnerLogos';
import SmartLink from '@/components/SmartLink';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomePage({ locale }: { locale: Locale }) {
  const { hero, news, podcast, membership, collection } = getDict(locale).home;

  return (
    <PageShell locale={locale}>
      {/* ---------------------------------------------------------- Hero -- */}
      <section className="mx-auto max-w-site px-5 pt-4 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-card bg-teal px-8 py-10 text-white md:px-12 md:py-14">
            <h1 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">{hero.title}</h1>
            {hero.paragraphs.map((p, i) => (
              <p key={i} className="mt-6 text-base leading-relaxed text-white/90 md:text-lg">
                {p}
              </p>
            ))}
            <div className="mt-auto pt-8">
              <SmartLink
                href={hero.cta.href}
                className="inline-block rounded-full bg-teal-mint px-8 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-transform hover:scale-[1.03]"
              >
                {hero.cta.label}
              </SmartLink>
            </div>
          </div>

          {/* Promo image card with English overlay */}
          <div className="relative min-h-[320px] overflow-hidden rounded-card lg:min-h-full">
            <Image src={hero.promoImage} alt="" fill priority sizes="(max-width:1024px) 100vw, 680px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal/85 via-teal/10 to-teal/40" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <p className="text-3xl font-extrabold uppercase leading-none tracking-tight md:text-4xl">
                {hero.promoKicker}
              </p>
              <p className="max-w-sm text-lg font-bold uppercase leading-tight md:text-xl">
                {hero.promoHeadline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- What's happening -- */}
      <section className="mt-20">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{news.heading}</h2>
        </div>
        <div className="mt-8 flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:px-8 [scrollbar-width:thin]">
          {news.items.map((item) => (
            <SmartLink
              key={item.title}
              href={news.href}
              className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-card border border-black/10 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-mint">{item.tag}</span>
                <h3 className="mt-1 line-clamp-2 min-h-[44px] text-[15px] font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-teal">
                  {item.cta}
                  <Arrow />
                </span>
              </div>
            </SmartLink>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- Podcast -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="grid items-center gap-0 overflow-hidden rounded-card bg-teal text-white md:grid-cols-2">
          <div className="relative min-h-[280px]">
            <Image src={podcast.image} alt="" fill sizes="(max-width:768px) 100vw, 640px" className="object-cover" />
          </div>
          <div className="px-8 py-12 md:px-12">
            <h2 className="text-3xl font-extrabold md:text-4xl">{podcast.heading}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/90">{podcast.body}</p>
            <SmartLink
              href={podcast.cta.href}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-mint px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
            >
              {podcast.cta.label}
              <Arrow />
            </SmartLink>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- Membership -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{membership.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg font-medium text-ink">{membership.sub}</p>
          <p className="mx-auto mt-2 max-w-xl text-ink/70">{membership.body}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          {membership.options.map((o) => (
            <SmartLink
              key={o.name}
              href={o.href}
              className="group flex flex-col rounded-card border border-black/10 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl font-extrabold text-teal">{o.name}</h3>
                <span className="text-sm font-bold text-ink/60">{o.price}</span>
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75">{o.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-teal group-hover:gap-2.5">
                {membership.becomeA} {o.name}
                <Arrow />
              </span>
            </SmartLink>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------- Collection -- */}
      <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-ink md:text-4xl">{collection.heading}</h2>
            <p className="mt-2 text-ink/70">{collection.sub}</p>
          </div>
          <SmartLink
            href={collection.href}
            className="rounded-full bg-teal px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]"
          >
            {collection.shopNow}
          </SmartLink>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {collection.products.map((p) => (
            <SmartLink
              key={p.name}
              href={collection.href}
              className="group overflow-hidden rounded-card border border-black/10 bg-white"
            >
              <div className="relative aspect-square bg-neutral-50">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width:640px) 50vw, 300px"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="border-t border-black/5 px-4 py-3 text-sm font-bold text-ink">{p.name}</p>
            </SmartLink>
          ))}
        </div>
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
