import JoinPage from '@/components/JoinPage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = { title: d.meta.join.title };

export default function Page() {
  return <JoinPage locale="es" />;
}
