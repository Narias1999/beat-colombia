import { Poppins } from 'next/font/google';
import LocaleScript from '@/components/LocaleScript';
import { getDict } from '@/lib/dict';
import type { Locale } from '@/lib/i18n';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

/**
 * Shared document shell for both locale root layouts, so the <html lang> is
 * baked into the static HTML for each locale rather than patched at runtime.
 */
export default function RootHtml({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={getDict(locale).ui.htmlLang} className={poppins.variable}>
      <body className="font-sans antialiased">
        <LocaleScript />
        {children}
      </body>
    </html>
  );
}
