// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'CS2 Tática & Mapas',
  description:
    'Guias, táticas e mapas de Counter-Strike 2. Aprenda smokes, posições e estratégias para Dust2, Mirage, Inferno e outros mapas.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'CS2 Tática & Mapas',
    description:
      'Guias, táticas e mapas de Counter-Strike 2. Aprenda smokes, posições e estratégias.',
    url: 'https://sitecs2.vercel.app',
    siteName: 'CS2 Tática & Mapas',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white min-h-screen">
        <Navbar />

        <main className="pt-20 max-w-6xl mx-auto px-4">
          {children}
        </main>

        <footer className="w-full text-center text-sm text-gray-400 py-6 mt-10 border-t border-red-900/40">
          © 2025 Juan • Desenvolvedor Web — CS2 Tática & Mapas
        </footer>
      </body>
    </html>
  );
}
