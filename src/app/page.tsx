import Link from 'next/link';
import Image from 'next/image';

const maps = [
  { name: 'Mirage',   img: '/mirage.png',  href: '/Mapas/Mirage',  desc: 'O mapa mais jogado do cenário competitivo. Dominar Mirage é essencial.' },
  { name: 'Dust II',  img: '/Dust.png',    href: '/Mapas/Dust',    desc: 'O clássico absoluto do CS. Smokes de cross e long são obrigatórias.' },
  { name: 'Inferno',  img: '/Inferno.png', href: '/Mapas/Inferno', desc: 'Mapa fechado e intenso. Controlar banana define rounds inteiros.' },
  { name: 'Overpass', img: '/Overpass.png',href: '/Mapas/Overpass',desc: 'Complexo e vertical. Controle de água e short garantem vitórias.' },
];

const features = [
  { icon: '◈', title: 'Smokes Precisas',   desc: 'Trajetórias mapeadas e demonstradas em vídeo para cada posição de cada mapa.' },
  { icon: '◈', title: 'Flashbangs',         desc: 'Flashes one-way e pop-flashes para entradas seguras e rotações eficientes.' },
  { icon: '◈', title: 'Molotovs & HEs',     desc: 'Granadas de área para retakes, holds e quebrar posições vantajosas.' },
  { icon: '◈', title: 'Pulos & Boosts',     desc: 'Posições elevadas e boosts solo para ângulos que seus inimigos não esperam.' },
];

export default function HomePage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #050507 0%, #080810 100%)', minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px 96px' }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '350px',
          background: 'radial-gradient(ellipse, rgba(232,25,44,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <span className="section-label">Counter-Strike 2 · Guias Táticos</span>
          </div>

          <h1 className="fade-up-1 font-display" style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 900,
            letterSpacing: '-0.01em',
            lineHeight: 0.95,
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}>
            <span style={{ color: '#F5F5F8', display: 'block' }}>Domine</span>
            <span className="text-red-gradient" style={{ display: 'block' }}>o CS2</span>
            <span style={{ color: '#F5F5F8', display: 'block' }}>do Jeito Certo</span>
          </h1>

          <p className="fade-up-2" style={{ fontSize: '1rem', color: '#888899', maxWidth: '480px', margin: '0 auto 48px', lineHeight: 1.75 }}>
            Smokes, flashes, molotovs e pulos — todas as utilidades essenciais dos
            principais mapas competitivos, organizadas e demonstradas em vídeo.
          </p>

          <div className="fade-up-3" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/Mapas/Mirage" className="btn-red">
              Começar agora →
            </Link>
            <Link href="/Sobre" className="btn-outline">
              Sobre o projeto
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="fade-up-4" style={{
          maxWidth: '600px', margin: '72px auto 0',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'rgba(255,255,255,0.04)',
          borderRadius: '14px', overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          {[
            { value: '4', label: 'Mapas' },
            { value: '16+', label: 'Utilidades' },
            { value: '100%', label: 'Gratuito' },
          ].map(stat => (
            <div key={stat.label} style={{ padding: '20px', textAlign: 'center', background: 'rgba(14,14,18,0.8)' }}>
              <div className="font-display" style={{ fontSize: '2rem', fontWeight: 900, color: '#E8192C', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: '0.72rem', color: '#555577', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── MAPS GRID ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '12px' }}>Guias disponíveis</div>
            <h2 className="font-display" style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.01em', color: '#F5F5F8',
            }}>Mapas Populares</h2>
          </div>
          <Link href="/Mapas" className="btn-outline" style={{ fontSize: '0.8rem', padding: '9px 18px' }}>
            Ver todos →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
          {maps.map((map, i) => (
            <Link
              key={map.name}
              href={map.href}
              className="card-cs2"
              style={{ textDecoration: 'none', display: 'block', animationDelay: `${i * 0.08}s` }}
            >
              <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                <Image
                  src={map.img} alt={map.name} fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(14,14,18,0.95) 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: '14px', left: '16px' }}>
                  <span className="tag-red">{map.name}</span>
                </div>
              </div>
              <div style={{ padding: '20px' }}>
                <p style={{ fontSize: '0.85rem', color: '#888899', lineHeight: 1.65, marginBottom: '16px' }}>
                  {map.desc}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#E8192C', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Ver guia →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label" style={{ marginBottom: '12px' }}>Por que usar</div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.01em', color: '#F5F5F8',
          }}>Conteúdo Completo</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
          {features.map((f, i) => (
            <div key={f.title} className="card-cs2" style={{ padding: '28px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: 'rgba(232,25,44,0.1)', border: '1px solid rgba(232,25,44,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', color: '#E8192C', marginBottom: '16px',
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#F5F5F8', marginBottom: '10px' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#888899', lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── CTA ── */}
      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          Pronto para evoluir?
        </div>
        <h2 className="font-display" style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900,
          textTransform: 'uppercase', color: '#F5F5F8',
          lineHeight: 1, marginBottom: '16px',
        }}>
          Comece pelo <span className="text-red-gradient">Mirage</span>
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#888899', lineHeight: 1.75, marginBottom: '40px' }}>
          O mapa mais disputado do cenário competitivo.
          Aprenda as utilidades essenciais e veja sua rank subir.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/Mapas/Mirage" className="btn-red">Ver guia do Mirage</Link>
          <Link href="/Contato" className="btn-outline">Fale comigo</Link>
        </div>
      </section>
    </div>
  );
}
