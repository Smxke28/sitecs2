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
        <div className="pt-20"> {/* empurra o conteúdo para baixo */}
          {children}
        </div>
      </body>
    </html>
  )
}
