import ClubPage from '@/components/ClubPage';

export const metadata = {
  title: 'The Club – BEAT Cycling Club',
};

// Statically generated at build time (SSG) into /club/index.html.
export default function Club() {
  return <ClubPage />;
}
