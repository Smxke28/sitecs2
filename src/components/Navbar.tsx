'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, X } from 'lucide-react';

const mapas = [
  { nome: 'Mirage',   href: '/Mapas/Mirage' },
  { nome: 'Dust II',  href: '/Mapas/Dust' },
  { nome: 'Inferno',  href: '/Mapas/Inferno' },
  { nome: 'Overpass', href: '/Mapas/Overpass' },
  { nome: 'Nuke',     href: '/Mapas/Nuke' },
  { nome: 'Ancient',  href: '/Mapas/Ancient' },
  { nome: 'Anubis',   href: '/Mapas/Anubis' },
];

const mainLinks = [
  { label: 'Início',  href: '/' },
  { label: 'Mapas',   href: '/Mapas', dropdown: true },
  { label: 'Sobre',   href: '/Sobre' },
  { label: 'Contato', href: '/Contato' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mapsOpen, setMapsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  useEffect(() => {
    setSidebarOpen(false);
    setMapsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') setSidebarOpen(false); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* ── TOPBAR ── */}
      <header style={{
        background: scrolled ? 'rgba(5,5,7,0.97)' : 'rgba(5,5,7,0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(232,25,44,0.15)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        position: 'relative',
        zIndex: 50,
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', gap: '16px' }}>

          {/* Hamburger */}
          <button className="md:hidden" onClick={() => setSidebarOpen(v => !v)} aria-label="Abrir menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: sidebarOpen ? '#E8192C' : '#888899',
                borderRadius: '2px', transition: 'all 0.3s',
                transform: sidebarOpen ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none' : 'none',
                opacity: sidebarOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #E8192C, #8B0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 14px rgba(232,25,44,0.4)', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1rem', color: '#fff', letterSpacing: '0.02em' }}>
              CS2
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.05rem', color: '#F5F5F8', lineHeight: 1, letterSpacing: '0.02em' }}>CS2 Utility Hub</span>
              <span className="hidden md:block" style={{ fontSize: '0.62rem', color: '#444455', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>TÁTICAS & MAPAS</span>
            </div>
          </Link>

          <div style={{ flex: 1 }} />

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }}>
            {mainLinks.map(link => {
              const active = isActive(link.href);
              if (link.dropdown) {
                return (
                  <div key={link.href} style={{ position: 'relative' }}
                    onMouseEnter={() => setMapsOpen(true)}
                    onMouseLeave={() => setMapsOpen(false)}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: active ? 600 : 400, color: active ? '#E8192C' : '#888899', padding: '6px 12px', borderRadius: '8px', background: active ? 'rgba(232,25,44,0.08)' : 'transparent', border: active ? '1px solid rgba(232,25,44,0.15)' : '1px solid transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
                      Mapas <ChevronDown size={13} style={{ opacity: 0.6 }} />
                    </button>
                    {mapsOpen && (
                      <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '180px', background: 'rgba(14,14,18,0.98)', border: '1px solid rgba(232,25,44,0.2)', borderRadius: '12px', padding: '8px', marginTop: '8px', boxShadow: '0 16px 40px rgba(0,0,0,0.6)', backdropFilter: 'blur(16px)', zIndex: 100 }}>
                        {mapas.map(m => (
                          <Link key={m.href} href={m.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderRadius: '8px', fontSize: '0.85rem', color: pathname === m.href ? '#E8192C' : '#AAAACC', background: pathname === m.href ? 'rgba(232,25,44,0.08)' : 'transparent', textDecoration: 'none', transition: 'all 0.15s', fontWeight: pathname === m.href ? 600 : 400 }}>
                            {m.nome}
                            {pathname === m.href && <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E8192C' }} />}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={link.href} href={link.href} style={{ fontSize: '0.85rem', fontWeight: active ? 600 : 400, color: active ? '#E8192C' : '#888899', padding: '6px 12px', borderRadius: '8px', textDecoration: 'none', background: active ? 'rgba(232,25,44,0.08)' : 'transparent', border: active ? '1px solid rgba(232,25,44,0.15)' : '1px solid transparent', transition: 'all 0.2s' }}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/Mapas/Mirage" className="hidden md:flex btn-red" style={{ padding: '8px 18px', marginLeft: '8px', fontSize: '0.78rem' }}>
            Começar →
          </Link>
        </div>
      </header>

      {/* ── BACKDROP ── */}
      <div onClick={() => setSidebarOpen(false)} aria-hidden style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: 55, opacity: sidebarOpen ? 1 : 0, pointerEvents: sidebarOpen ? 'auto' : 'none', transition: 'opacity 0.3s ease' }} />

      {/* ── SIDEBAR ── */}
      <nav aria-hidden={!sidebarOpen} style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '280px', background: 'rgba(8,8,10,0.99)', backdropFilter: 'blur(24px)', borderRight: '1px solid rgba(232,25,44,0.12)', zIndex: 60, display: 'flex', flexDirection: 'column', transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)', boxShadow: sidebarOpen ? '4px 0 40px rgba(0,0,0,0.6)' : 'none' }}>

        <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '7px', background: 'linear-gradient(135deg, #E8192C, #8B0000)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.75rem', color: '#fff', boxShadow: '0 0 10px rgba(232,25,44,0.35)' }}>CS2</div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#F5F5F8', letterSpacing: '0.02em' }}>CS2 Utility Hub</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#444455', padding: '4px', display: 'flex' }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ flex: 1, padding: '20px 12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <p style={{ fontSize: '0.62rem', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.12em', color: '#444455', padding: '0 8px', marginBottom: '10px' }}>Navegação</p>

          {[{ label: 'Início', href: '/' }, { label: 'Sobre', href: '/Sobre' }, { label: 'Contato', href: '/Contato' }].map(link => {
            const active = isActive(link.href);
            return (
              <Link key={link.href} href={link.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.93rem', fontWeight: active ? 600 : 400, color: active ? '#E8192C' : '#AAAACC', background: active ? 'rgba(232,25,44,0.08)' : 'transparent', border: '1px solid', borderColor: active ? 'rgba(232,25,44,0.15)' : 'transparent', transition: 'all 0.15s' }}>
                {link.label}
                {active && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8192C' }} />}
              </Link>
            );
          })}

          <div style={{ marginTop: '16px' }}>
            <p style={{ fontSize: '0.62rem', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.12em', color: '#444455', padding: '0 8px', marginBottom: '10px' }}>Mapas</p>
            {mapas.map(m => {
              const active = pathname === m.href;
              return (
                <Link key={m.href} href={m.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: active ? 600 : 400, color: active ? '#E8192C' : '#AAAACC', background: active ? 'rgba(232,25,44,0.08)' : 'transparent', border: '1px solid', borderColor: active ? 'rgba(232,25,44,0.15)' : 'transparent', transition: 'all 0.15s', marginBottom: '2px' }}>
                  {m.nome}
                  {active && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8192C' }} />}
                </Link>
              );
            })}
          </div>
        </div>

        <div style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', flexShrink: 0 }}>
          <Link href="/Mapas" className="btn-red" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
            Ver todos os mapas →
          </Link>
        </div>
      </nav>
    </>
  );
}
