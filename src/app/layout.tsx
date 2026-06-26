import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'CS2 Utility Hub — Táticas & Mapas',
  description: 'Guias, smokes, flashes e táticas de Counter-Strike 2. Domine Dust2, Mirage, Inferno e Overpass.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'CS2 Utility Hub — Táticas & Mapas',
    description: 'Guias, táticas e mapas de CS2. Aprenda smokes, posições e estratégias.',
    url: 'https://sitecs2.vercel.app',
    siteName: 'CS2 Utility Hub',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <Navbar />
        </div>

        <main style={{ paddingTop: '64px', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
          {children}
        </main>

        <footer style={{
          borderTop: '1px solid rgba(232,25,44,0.1)',
          background: 'rgba(5,5,7,0.98)',
          position: 'relative', zIndex: 10,
        }}>
          <div style={{
            maxWidth: '1200px', margin: '0 auto', padding: '28px 24px',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '24px', height: '24px', borderRadius: '5px',
                background: 'linear-gradient(135deg, #E8192C, #8B0000)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
                fontSize: '0.6rem', color: '#fff',
              }}>CS2</div>
              <span style={{ fontSize: '0.8rem', color: '#444455' }}>
                © {new Date().getFullYear()} Juan Lavecchia — CS2 Utility Hub
              </span>
            </div>
            <span style={{ fontSize: '0.7rem', color: '#333344', fontFamily: "'JetBrains Mono', monospace" }}>
              // conteúdo para fins educacionais
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
