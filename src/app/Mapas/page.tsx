import Link from 'next/link';
import Image from 'next/image';

const maps = [
  { name: 'Mirage',   img: '/mirage.png',  href: '/Mapas/Mirage',  desc: 'O mais jogado do competitivo. Dominar Mirage é essencial para qualquer rank.' },
  { name: 'Dust II',  img: '/Dust.png',    href: '/Mapas/Dust',    desc: 'O clássico absoluto. Long, mid e bomb B definem rounds inteiros.' },
  { name: 'Inferno',  img: '/Inferno.png', href: '/Mapas/Inferno', desc: 'Fechado e intenso. Controlar banana muda o resultado da partida.' },
  { name: 'Overpass', img: '/Overpass.png',href: '/Mapas/Overpass',desc: 'Complexo e vertical. Canal e short são os pontos mais decisivos.' },
];

export default function MapasPage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #050507 0%, #080810 100%)', minHeight: '100vh' }}>
      <section style={{ padding: '72px 24px 56px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '16px' }}>Guias Táticos</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '0.01em',
          color: '#F5F5F8', lineHeight: 1, marginBottom: '16px',
        }}>
          Mapas <span className="text-red-gradient">Disponíveis</span>
        </h1>
        <p style={{ fontSize: '1rem', color: '#888899', maxWidth: '460px', lineHeight: 1.7 }}>
          Escolha um mapa para acessar o guia completo de utilidades,
          smokes, flashes e posições.
        </p>
      </section>

      <hr className="divider" />

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 96px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {maps.map((map, i) => (
            <Link key={map.name} href={map.href} className="card-cs2" style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <Image src={map.img} alt={map.name} fill
                  style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  sizes="(max-width: 768px) 100vw, 320px" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, transparent 30%, rgba(14,14,18,0.97) 100%)',
                }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '18px', right: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h2 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F5F5F8', textTransform: 'uppercase', letterSpacing: '0.02em', lineHeight: 1 }}>
                    {map.name}
                  </h2>
                  <span className="tag-red">Guia</span>
                </div>
              </div>
              <div style={{ padding: '20px 18px' }}>
                <p style={{ fontSize: '0.875rem', color: '#888899', lineHeight: 1.65, marginBottom: '16px' }}>
                  {map.desc}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#E8192C', fontWeight: 600 }}>
                  Ver utilidades →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
