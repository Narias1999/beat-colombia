import Image from 'next/image';
import SmartLink from '@/components/SmartLink';

export type Feature = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <SmartLink
      href={feature.href}
      className="group relative block overflow-hidden rounded-card"
      aria-label={feature.title}
    >
      <div className="relative aspect-[16/11]">
        <Image
          src={feature.image}
          alt={feature.alt}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
        <h3 className="text-2xl font-extrabold text-white md:text-3xl">{feature.title}</h3>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-teal transition-transform group-hover:translate-x-1">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </SmartLink>
  );
}
