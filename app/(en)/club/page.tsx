import ClubPage from '@/components/ClubPage';
import { getDict } from '@/lib/dict';

const d = getDict('en');

export const metadata = { title: d.meta.club.title };

export default function Page() {
  return <ClubPage locale="en" />;
}
