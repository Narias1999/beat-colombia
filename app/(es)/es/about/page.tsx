import AboutPage from '@/components/AboutPage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = { title: d.meta.about.title };

export default function Page() {
  return <AboutPage locale="es" />;
}
