import type { Metadata } from 'next';
import RootHtml from '@/components/RootHtml';
import { getDict } from '@/lib/dict';
import '../globals.css';

const d = getDict('es');

export const metadata: Metadata = {
  title: d.meta.home.title,
  description: d.meta.home.description,
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="es">{children}</RootHtml>;
}
