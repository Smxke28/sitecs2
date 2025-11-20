export default function HomePage() {
  return (
    <main className="min-h-screen pt-24 px-6 section-dark animate-fadeIn">
      {/* HERO */}
      <section className="max-w-6xl mx-auto text-center py-20">
        <h1 className="text-5xl font-extrabold red-title animate-glow">
          Aprenda o Básico do CS2
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Domine os fundamentos, mapas, estratégias e mecânicas essenciais para evoluir no Counter‑Strike 2.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="/Mapas/Mirage" className="my-btn">Começar Agora</a>
          <a href="/Sobre" className="my-btn-outline">Sobre o Projeto</a>
        </div>
      </section>

      {/* SEÇÃO MAPAS */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold red-title mb-6">Mapas Populares</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
          { name: "Mirage", img: "/mirage.png" },
          { name: "Dust II", img: "/Dust.png" },
          { name: "Inferno", img: "/Inferno.png" },
          { name: "Overpass", img: "/Overpass.png" }
        ].map((map) => (
            <a key={map.name} href={`/Mapas/${map.name}`} className="card cursor-pointer hover:scale-[1.02] transition-all duration-200 text-center overflow-hidden p-0">
              <img src={map.img} alt={map.name} className="w-full h-32 object-cover opacity-90 hover:opacity-100 transition" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{map.name}</h3>
                <p className="text-sm text-gray-300">Guia completo, posições, táticas e rotações.</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section className="max-w-6xl mx-auto mt-24 section-red rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Por que aprender CS2?</h2>
        <p className="max-w-2xl mx-auto text-lg">
          O CS2 trouxe novos sistemas, smokes dinâmicas, mecânicas atualizadas e maior precisão.
          Aprender o básico corretamente acelera sua evolução e transforma seu desempenho.
        </p>
        <a href="/Sobre" className="my-btn mt-6 inline-block">Ler Mais</a>
      </section>

      {/* CONTATO */}
      <section className="max-w-6xl mx-auto mt-24 pb-20 text-center">
        <h2 className="text-3xl font-bold red-title mb-4">Precisa de Ajuda?</h2>
        <p className="text-gray-300 mb-6">Entre em contato para apoio, ideias ou sugestões.</p>
        <a href="/Contato" className="my-btn">Fale Conosco</a>
      </section>
    </main>
  );
}
