"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50 border-b border-red-600">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <h1 className="text-xl font-bold text-red-500">
          Aprenda o Básico do CS2
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-lg mx-auto items-center">
          <li>
            <Link href="/" className="hover:text-red-500 transition">
              Pagina Inicial
            </Link>
          </li>

          <li>
            <Link href="/Sobre" className="hover:text-red-500 transition">
              Sobre
            </Link>
          </li>

          {/* MAPAS (DESKTOP HOVER) */}
          <li className="relative group">
            <span className="hover:text-red-500 cursor-pointer select-none">
              Mapas ▾
            </span>

            {/* Dropdown posicionado colado no trigger (sem margem) */}
            <ul className="absolute left-1/2 -translate-x-1/2 top-full bg-black border border-red-600 w-44 rounded-md shadow-2xl z-50 hidden group-hover:block">
              {/* Opcional: um pequeno padding para não criar “vazio” detectável */}
              <li>
                <Link href="/Mapas/Mirage" className="block px-3 py-2 hover:bg-red-700 rounded">
                  Mirage
                </Link>
              </li>
              <li>
                <Link href="/Mapas/Dust" className="block px-3 py-2 hover:bg-red-700 rounded">
                  Dust II
                </Link>
              </li>
              <li>
                <Link href="/Mapas/Inferno" className="block px-3 py-2 hover:bg-red-700 rounded">
                  Inferno
                </Link>
              </li>
              <li>
                <Link href="/Mapas/Overpass" className="block px-3 py-2 hover:bg-red-700 rounded">
                  Overpass
                </Link>
              </li>
              <li>

                                {/*Futuros mapas*/}
                                
                {/*<Link href="/Mapas/Vertigo" className="block px-3 py-2 hover:bg-red-700 rounded">
                  Vertigo
                </Link>*/}
              </li>
            </ul>
          </li>

          <li>
            <Link href="/Contato" className="hover:text-red-500 transition">
              Contato
            </Link>
          </li>
        </ul>

        {/* BOTÃO MOBILE */}
        <button className="md:hidden" onClick={() => setOpenMobile(!openMobile)}>
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {openMobile && (
        <div className="md:hidden bg-black w-full px-6 py-4 flex flex-col gap-4 border-top border-red-600">
          <Link href="/" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
            Pagina Inicial
          </Link>

          <Link href="/Sobre" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
            Sobre
          </Link>

          <Link href="/Contato" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
            Contato
          </Link>

          {/* MAPAS (MOBILE CLICK) */}
          <div className="flex flex-col">
            <button
              className="text-left hover:text-red-500"
              onClick={() => setOpenDropdownMobile(!openDropdownMobile)}
            >
              Mapas ▾
            </button>

            {openDropdownMobile && (
              <div className="ml-4 mt-2 flex flex-col gap-2">
                <Link href="/Mapas/Mirage" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
                  Mirage
                </Link>
                <Link href="/Mapas/Dust" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
                  Dust II
                </Link>
                <Link href="/Mapas/Inferno" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
                  Inferno
                </Link>
                <Link href="/Mapas/Overpass" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
                  Overpass
                </Link>
                {/*<Link href="/Mapas/Vertigo" className="hover:text-red-500" onClick={() => setOpenMobile(false)}>
                  Vertigo
                </Link>*/}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
