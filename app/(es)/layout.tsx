import type { Metadata } from 'next';
import RootHtml from '@/components/RootHtml';
import { getDict } from '@/lib/dict';
import '../globals.css';

const d = getDict('es');

export const metadata: Metadata = {
  title: d.meta.home.title,
  description: d.meta.home.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="es">{children}</RootHtml>;
}
