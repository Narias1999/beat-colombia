import BenefitsPage from '@/components/BenefitsPage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = { title: d.meta.benefits.title };

export default function Page() {
  return <BenefitsPage locale="es" />;
}
