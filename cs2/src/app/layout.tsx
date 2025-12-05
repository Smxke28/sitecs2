import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Meu Projeto',
  description: 'Descrição do meu projeto',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <Navbar />

        {/* CONTEÚDO PRINCIPAL */}
        <div className="pt-20">
          {children}
        </div>

        {/* === RODAPÉ GLOBAL === */}
        <footer className="w-full text-center text-sm text-gray-500 py-6 mt-10 border-t border-red-900/40">
          © 2025 Juan • Desenvolvedor Web — CS2 Tática & Mapas
        </footer>
      </body>
    </html>
  )
}
