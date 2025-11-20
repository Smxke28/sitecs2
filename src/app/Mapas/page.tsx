import Link from "next/link";

export default function Mapas() {
  return (
    <div className="min-h-screen text-white p-10">

      <h1 className="text-4xl font-bold text-red-500 mb-6">
        Mapas Disponíveis
      </h1>

      <p className="text-gray-300 mb-8">
        Escolha um mapa abaixo para ver o módulo completo.
      </p>

      {/* GRID DE MAPAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Mapa 1 */}
        <Link
          href="/Mapas/Mirage"
          className="bg-black border border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-600/50 hover:bg-red-600/20 transition"
        >
          <h2 className="text-xl font-bold mb-2">Mirage</h2>
          <p className="text-gray-400 text-sm">
            Acesse o módulo completo do mapa Mirage.
          </p>
        </Link>

        {/* Mapa 2 */}
        <Link
          href="/Mapas/Dust"
          className="bg-black border border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-600/50 hover:bg-red-600/20 transition"
        >
          <h2 className="text-xl font-bold mb-2">Dust 2</h2>
          <p className="text-gray-400 text-sm">
            Acesse o módulo completo do mapa Dust 2.
          </p>
        </Link>

        {/* Mapa 3 */}
        <Link
          href="/Mapas/Inferno"
          className="bg-black border border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-600/50 hover:bg-red-600/20 transition"
        >
          <h2 className="text-xl font-bold mb-2">Inferno</h2>
          <p className="text-gray-400 text-sm">
            Acesse o módulo completo do mapa Inferno.
          </p>
        </Link>

        {/* Mapa 4 */}
        <Link
          href="/Mapas/Overpass"
          className="bg-black border border-red-600 rounded-xl p-6 shadow-lg hover:shadow-red-600/50 hover:bg-red-600/20 transition"
        >
          <h2 className="text-xl font-bold mb-2">Overpass</h2>
          <p className="text-gray-400 text-sm">
            Acesse o módulo completo do mapa Overpass.
          </p>
        </Link>

      </div>
    </div>
  );
}
