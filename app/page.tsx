import HomePage from '@/components/HomePage';

export const metadata = {
  title: 'BEAT Cycling Club — the first professional cycling club',
};

// The homepage — statically generated at build time (SSG).
export default function Home() {
  return <HomePage />;
}
