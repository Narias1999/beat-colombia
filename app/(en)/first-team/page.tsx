import FirstTeamPage from '@/components/FirstTeamPage';
import { getDict } from '@/lib/dict';

const d = getDict('en');

export const metadata = { title: d.meta.firstTeam.title };

export default function Page() {
  return <FirstTeamPage locale="en" />;
}
