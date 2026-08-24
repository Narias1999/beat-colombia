import ClubhousePage from '@/components/ClubhousePage';
import { getDict } from '@/lib/dict';

const d = getDict('en');

export const metadata = { title: d.meta.clubhouse.title };

export default function Page() {
  return <ClubhousePage locale="en" />;
}
