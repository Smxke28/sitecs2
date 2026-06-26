'use client';
import { Mail, Github, Linkedin } from 'lucide-react';

const contacts = [
  { label: 'Email', sub: 'juanlavecchia23@gmail.com', href: 'mailto:juanlavecchia23@gmail.com', Icon: Mail },
  { label: 'GitHub', sub: 'github.com/Smxke28', href: 'https://github.com/Smxke28', Icon: Github },
  { label: 'LinkedIn', sub: 'Juan Lavecchia', href: 'https://www.linkedin.com/in/juan-lavecchia-8b3b5131a/', Icon: Linkedin },
];

export default function ContatoPage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #050507 0%, #080810 100%)', minHeight: '100vh' }}>
      <section style={{ padding: '72px 24px 56px', maxWidth: '700px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '16px' }}>Fale comigo</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '0.01em',
          color: '#F5F5F8', lineHeight: 1, marginBottom: '16px',
        }}>
          Contato
        </h1>
        <p style={{ fontSize: '1rem', color: '#888899', lineHeight: 1.7 }}>
          Aqui você encontra meus principais meios de contato e redes profissionais.
        </p>
      </section>

      <hr className="divider" />

      <section style={{ maxWidth: '700px', margin: '0 auto', padding: '56px 24px 96px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {contacts.map(({ label, sub, href, Icon }) => (
          <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
            className="card-cs2"
            style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px 28px', textDecoration: 'none' }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
              background: 'rgba(232,25,44,0.1)', border: '1px solid rgba(232,25,44,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={22} style={{ color: '#E8192C' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.65rem', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em', color: '#555577', marginBottom: '4px' }}>
                {label}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#F5F5F8' }}>{sub}</div>
            </div>
            <span style={{ color: '#E8192C', fontSize: '1rem', opacity: 0.7 }}>→</span>
          </a>
        ))}
      </section>
    </div>
  );
}
