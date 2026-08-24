import Image from 'next/image';
import SmartLink from '@/components/SmartLink';

export type HeroCta = { label: string; href: string; variant?: 'solid' | 'outline' };

type Props = {
  title: string;
  lead?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  ctas?: HeroCta[];
  /** When there is no side image, let the card span the full width. */
  fullWidth?: boolean;
};

export default function PageHero({
  title,
  lead,
  paragraphs = [],
  image,
  imageAlt = '',
  ctas = [],
  fullWidth = false,
}: Props) {
  const Copy = (
    <div className="rounded-card bg-teal px-8 py-10 text-white md:px-12 md:py-14">
      <h1 className="text-4xl font-extrabold leading-[1.05] md:text-6xl">{title}</h1>
      {lead && <p className="mt-7 text-lg font-medium leading-relaxed md:text-xl">{lead}</p>}
      {paragraphs.map((p, i) => (
        <p key={i} className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">
          {p}
        </p>
      ))}
      {ctas.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {ctas.map((c) => (
            <SmartLink
              key={c.label}
              href={c.href}
              className={
                c.variant === 'outline'
                  ? 'rounded-full border-2 border-white px-7 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white hover:text-teal'
                  : 'rounded-full bg-teal-mint px-7 py-3 text-[15px] font-bold text-white transition-transform hover:scale-[1.03]'
              }
            >
              {c.label}
            </SmartLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="mx-auto max-w-site px-5 pt-4 md:px-8">
      {image && !fullWidth ? (
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {Copy}
          <div className="relative min-h-[260px] overflow-hidden rounded-card lg:min-h-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-top"
            />
          </div>
        </div>
      ) : (
        Copy
      )}
    </section>
  );
}
