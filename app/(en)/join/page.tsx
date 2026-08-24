import JoinPage from '@/components/JoinPage';
import { getDict } from '@/lib/dict';

const d = getDict('en');

export const metadata = { title: d.meta.join.title };

export default function Page() {
  return <JoinPage locale="en" />;
}
