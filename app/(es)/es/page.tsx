import HomePage from '@/components/HomePage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = {
  title: d.meta.home.title,
  description: d.meta.home.description,
};

export default function Page() {
  return <HomePage locale="es" />;
}
