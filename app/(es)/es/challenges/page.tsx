import ChallengesPage from '@/components/ChallengesPage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = { title: d.meta.challenges.title };

export default function Page() {
  return <ChallengesPage locale="es" />;
}
