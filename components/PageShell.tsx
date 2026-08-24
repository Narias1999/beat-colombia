import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

export default function PageShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const dict = getDict(locale);

  // Scope the language of this subtree explicitly — valid HTML and correct for
  // screen readers / translation tools even before LocaleScript fixes <html>.
  return (
    <div lang={dict.ui.htmlLang}>
      <Header locale={locale} />
      <main className="pb-10">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
