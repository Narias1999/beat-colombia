import InaugurationPage from '@/components/InaugurationPage';
import { getDict } from '@/lib/dict';

const d = getDict('en');

export const metadata = { title: d.meta.inauguration.title };

export default function Page() {
  return <InaugurationPage locale="en" />;
}
