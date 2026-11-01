import FirstTeamPage from '@/components/FirstTeamPage';
import { getDict } from '@/lib/dict';

const d = getDict('es');

export const metadata = { title: d.meta.firstTeam.title };

export default function Page() {
  return <FirstTeamPage locale="es" />;
}
