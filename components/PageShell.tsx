import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-10">{children}</main>
      <Footer />
    </>
  );
}
