const techs = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'CSS Animations', 'JavaScript'];

export default function SobrePage() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #050507 0%, #080810 100%)', minHeight: '100vh' }}>
      <section style={{ padding: '72px 24px 56px', maxWidth: '900px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '16px' }}>Sobre o projeto</div>
        <h1 className="font-display" style={{
          fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900,
          textTransform: 'uppercase', letterSpacing: '0.01em',
          color: '#F5F5F8', lineHeight: 1, marginBottom: '16px',
        }}>
          CS2 <span className="text-red-gradient">Utility Hub</span>
        </h1>
        <p style={{ fontSize: '1rem', color: '#888899', maxWidth: '480px', lineHeight: 1.7 }}>
          Plataforma criada para reunir utilidades, smokes, flashes e táticas de CS2
          — organizada com foco em aprender, treinar e evoluir.
        </p>
      </section>

      <hr className="divider" />

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px 96px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Propósito */}
        <div className="card-cs2" style={{ padding: '36px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>01 — Propósito</div>
          <h2 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', color: '#F5F5F8', marginBottom: '16px' }}>
            Por que existe?
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#888899', lineHeight: 1.8 }}>
            Este projeto foi desenvolvido para estudar e evoluir em desenvolvimento web, organização visual,
            experiência do usuário e práticas modernas de frontend. Também serve como repositório pessoal
            de estratégias para CS2, reunindo vídeos e explicações sobre utilidades essenciais nos mapas.
          </p>
        </div>

        {/* Tecnologias */}
        <div className="card-cs2" style={{ padding: '36px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>02 — Stack</div>
          <h2 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', color: '#F5F5F8', marginBottom: '24px' }}>
            Tecnologias
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {techs.map(t => (
              <span key={t} className="tag-red" style={{ fontSize: '0.75rem', padding: '6px 14px' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Créditos */}
        <div className="card-cs2" style={{ padding: '36px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>03 — Créditos</div>
          <h2 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', color: '#F5F5F8', marginBottom: '16px' }}>
            Vídeos
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#888899', lineHeight: 1.8 }}>
            Todos os vídeos usados neste projeto são destinados a fins de estudo e aprendizado.
            Os direitos pertencem aos criadores originais no YouTube.
            Sempre que possível, os links e nomes dos autores são mencionados.
          </p>
        </div>

        {/* Autor */}
        <div className="card-cs2" style={{ padding: '36px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>04 — Criador</div>
          <h2 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', color: '#F5F5F8', marginBottom: '16px' }}>
            Juan Lavecchia
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#888899', lineHeight: 1.8, marginBottom: '12px' }}>
            Desenvolvedor web e estudante de Ciências da Computação. Este projeto une aprendizado em
            programação com a paixão pelo Counter-Strike. A ideia é expandir cada vez mais o site,
            aprimorando mapas, utilidades e recursos.
          </p>
          <p style={{ fontSize: '0.78rem', color: '#444455', fontFamily: "'JetBrains Mono', monospace" }}>
            // novos mapas e recursos serão adicionados gradualmente
          </p>
        </div>
      </section>
    </div>
  );
}
