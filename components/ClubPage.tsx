import PageShell from '@/components/PageShell';
import PageHero from '@/components/PageHero';
import FeatureCard from '@/components/FeatureCard';
import PartnerLogos from '@/components/PartnerLogos';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

export default function ClubPage({ locale }: { locale: Locale }) {
  const { club } = getDict(locale);

  return (
    <PageShell locale={locale}>
      <PageHero
        title={club.hero.title}
        lead={club.hero.lead}
        paragraphs={club.hero.paragraphs}
        image={club.hero.image}
        imageAlt={club.hero.imageAlt}
      />

      <section className="mx-auto mt-6 max-w-site px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {club.features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>

      <PartnerLogos locale={locale} />
    </PageShell>
  );
}
