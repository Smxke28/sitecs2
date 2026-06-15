// components/Navbar.tsx
'use client';
/// <reference types="react" />
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type Mapa = { nome: string; href: string };

const mapas: Mapa[] = [
  { nome: 'Mirage', href: '/mapas/mirage' },
  { nome: 'Dust II', href: '/mapas/dust' },
  { nome: 'Inferno', href: '/mapas/inferno' },
  { nome: 'Overpass', href: '/mapas/overpass' },
];

export default function Navbar(): React.JSX.Element {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(false);

  const closeMenus = () => {
    setOpenMobile(false);
    setOpenDropdownMobile(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-neutral-900 to-black text-white shadow-lg z-50 border-b border-red-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-extrabold" onClick={closeMenus}>
          CS2 Utility Hub
        </Link>

        <ul className="hidden md:flex gap-8 text-lg mx-auto items-center font-medium">
          <li><Link href="/" className="hover:text-red-400">Página Inicial</Link></li>

          <li className="relative group">
            <button type="button" className="hover:text-red-400 cursor-pointer select-none">
              Mapas ▾
            </button>

            <ul className="absolute left-1/2 top-full hidden w-48 -translate-x-1/2 rounded-md border border-red-700 bg-black/95 backdrop-blur-md group-hover:block">
              {mapas.map((mapa) => (
                <li key={mapa.href}>
                  <Link href={mapa.href} className="block px-4 py-2 hover:bg-red-700/70 rounded-md">
                    {mapa.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link href="/contato" className="hover:text-red-400">Contato</Link></li>
          <li><Link href="/sobre" className="hover:text-red-400">Sobre</Link></li>
        </ul>

        <button
          className="md:hidden text-red-500 hover:text-red-400"
          onClick={() => setOpenMobile((v) => !v)}
          aria-label={openMobile ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={openMobile}
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {openMobile && (
        <div className="md:hidden bg-black/95 backdrop-blur-md w-full px-6 py-4 flex flex-col gap-4 border-t border-red-700">
          <Link href="/" className="hover:text-red-400" onClick={closeMenus}>Página Inicial</Link>

          <div className="flex flex-col">
            <button
              type="button"
              className="text-left hover:text-red-400"
              onClick={() => setOpenDropdownMobile((v) => !v)}
              aria-expanded={openDropdownMobile}
              aria-controls="mobile-mapas"
            >
              Mapas ▾
            </button>

            {openDropdownMobile && (
              <div id="mobile-mapas" className="ml-4 mt-2 flex flex-col gap-2">
                {mapas.map((mapa) => (
                  <Link key={mapa.href} href={mapa.href} className="hover:text-red-400" onClick={closeMenus}>
                    {mapa.nome}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contato" className="hover:text-red-400" onClick={closeMenus}>Contato</Link>
          <Link href="/sobre" className="hover:text-red-400" onClick={closeMenus}>Sobre</Link>
        </div>
      )}
    </nav>
  );
}
