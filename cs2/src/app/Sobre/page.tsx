export default function Sobre() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">

      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Sobre o Projeto
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Uma plataforma criada para reunir utilidades, execuções, smokes, flashes e táticas de CS2 — organizada com foco em aprender, treinar e evoluir.
        </p>
      </header>

      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-4xl mx-auto space-y-10">

        {/* CARD 1 — SOBRE */}
        <section
          className="
            bg-[#0d0d0d]/60 backdrop-blur-xl p-8 rounded-3xl 
            border border-red-700/40 shadow-[0_0_20px_rgba(255,0,0,0.15)]
            hover:shadow-[0_0_45px_rgba(255,0,0,0.5)]
            transition-all duration-500
          "
        >
          <h2 className="text-3xl font-bold text-red-400 mb-4">O Propósito</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Este projeto foi desenvolvido com o objetivo de estudar e evoluir em:
            desenvolvimento web, organização visual, experiência do usuário e práticas modernas de frontend.
            Ele também serve como um repositório pessoal de estratégias para CS2, reunindo vídeos e explicações
            sobre utilidades essenciais nos mapas.
          </p>
        </section>

        {/* CARD 2 — TECNOLOGIAS */}
        <section
          className="
            bg-[#0d0d0d]/60 backdrop-blur-xl p-8 rounded-3xl 
            border border-red-700/40 shadow-[0_0_20px_rgba(255,0,0,0.15)]
            hover:shadow-[0_0_45px_rgba(255,0,0,0.5)]
            transition-all duration-500
          "
        >
          <h2 className="text-3xl font-bold text-red-400 mb-6">Tecnologias Utilizadas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* ITEM */}
            <TechItem name="Next.js" />
            <TechItem name="React" />
            <TechItem name="TypeScript" />
            <TechItem name="Tailwind CSS" />
            <TechItem name="Lucide Icons" />
            <TechItem name="CSS Animations" />
            <TechItem name="JavaScript" />
          </div>
        </section>

        {/* CARD 3 — CRÉDITOS */}
        <section
          className="
            bg-[#0d0d0d]/60 backdrop-blur-xl p-8 rounded-3xl 
            border border-red-700/40 shadow-[0_0_20px_rgba(255,0,0,0.15)]
            hover:shadow-[0_0_45px_rgba(255,0,0,0.5)]
            transition-all duration-500
          "
        >
          <h2 className="text-3xl font-bold text-red-400 mb-6">Créditos dos Vídeos</h2>

          <p className="text-gray-300 text-lg">
            Todos os vídeos usados neste projeto são destinados a fins de estudo e aprendizado.
            Os direitos pertencem aos criadores originais no YouTube.
            Sempre que possível, os links e nomes dos autores serão mencionados.
          </p>
        </section>

        {/* CARD 4 — AUTOR */}
        <section
          className="
            bg-[#0d0d0d]/60 backdrop-blur-xl p-8 rounded-3xl 
            border border-red-700/40 shadow-[0_0_20px_rgba(255,0,0,0.15)]
            hover:shadow-[0_0_45px_rgba(255,0,0,0.5)]
            transition-all duration-500
          "
        >
          <h2 className="text-3xl font-bold text-red-400 mb-6">O Criador</h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            O projeto foi criado por <span className="text-red-400 font-semibold">Juan Lavecchia</span>,
            com o objetivo de unir aprendizado em programação com a paixão pelo Counter-Strike.
            A ideia é expandir cada vez mais o site, aprimorando mapas, utilidades e recursos.
          </p>

          <p className="text-gray-500 mt-3 text-sm">
            *Novos mapas, táticas e recursos serão adicionados gradualmente conforme o projeto evolui ao longo do tempo.*
          </p>
        </section>
      </div>

    </main>
  );
}

/* COMPONENTE — Tecnologias */
function TechItem({ name }: { name: string }) {
  return (
    <button
      type="button"
      className="
        flex items-center gap-3 bg-black/40 px-4 py-3 rounded-2xl border border-red-700/40
        hover:bg-red-700 hover:border-red-600 hover:text-white transition-colors duration-200
      "
      aria-label={name}
    >
      {/* Ícone genérico de tecnologia */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-80 text-red-400"
        aria-hidden
      >
        <path d="M4 4h16v16H4z" />
        <path d="M9 9h6v6H9z" />
      </svg>

      <span className="text-lg text-gray-300 hover:text-white">{name}</span>
    </button>
  );
}
