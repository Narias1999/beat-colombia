import Image from 'next/image';
import { partners } from '@/lib/config';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

export default function PartnerLogos({ locale }: { locale: Locale }) {
  // Duplicate the list so the CSS marquee loops seamlessly (-50% translate).
  const row = [...partners, ...partners];

  return (
    <section className="mx-auto mt-20 max-w-site px-5 md:px-8">
      <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-ink/50">
        {getDict(locale).ui.partnersHeading}
      </h2>

      {/* White partner marks sit on a branded teal strip so they read clearly */}
      <div className="group relative mt-8 overflow-hidden rounded-card bg-teal py-10">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-teal to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-teal to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-20 group-hover:[animation-play-state:paused]">
          {row.map((p, i) => (
            <div key={i} className="relative h-16 w-32 shrink-0 opacity-85 transition-opacity hover:opacity-100">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
