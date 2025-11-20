"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones do menu

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold">Aprenda o Básico do CS2</h1>

        {/* MENU DESKTOP*/}
        <ul className="hidden md:flex items-center gap-6">

          <li>
            <Link href="/" className="hover:text-gray-300">Início</Link>
          </li>

          <li>
            <Link href="/Sobre" className="hover:text-gray-300">Sobre</Link>
          </li>

          
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer">Mapas ▾</span>

            {openDropdown && (
              <ul className="absolute top-6 left-0 bg-gray-800 rounded-md shadow-lg w-40 p-2 flex flex-col">

                <Link href="/Mapas/Mirage" className="px-3 py-1 hover:bg-gray-700 block">
                  Módulo 1
                </Link>

                <Link href="/Mapas/Dust" className="px-3 py-1 hover:bg-gray-700 block">
                  Módulo 2
                </Link>

                <Link href="/Mapas/Inferno" className="px-3 py-1 hover:bg-gray-700 block">
                  Módulo 3
                </Link>

                <Link href="/Mapas/Overpass" className="px-3 py-1 hover:bg-gray-700 block">
                  Módulo 4
                </Link>
              </ul>
            )}
          </li>
        </ul>

        {/*Menu completo para Teste em Mobile*/}
        <button
          className="md:hidden"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

    
      {openMobile && (
        <div className="md:hidden bg-gray-800 w-full px-6 py-4 flex flex-col gap-4 border-t border-gray-700">

          <Link href="/" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
            Início
          </Link>

          <Link href="/Sobre" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
            Sobre
          </Link>

          
          <div className="flex flex-col">
            <button
              className="text-left hover:text-gray-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              Mapas ▾
            </button>

            {openDropdown && (
              <div className="ml-4 mt-2 flex flex-col gap-2">

                <Link href="/Mapas/Mirage" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
                  Módulo 1
                </Link>

                <Link href="/Mapas/Dust" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
                  Módulo 2
                </Link>

                <Link href="/Mapas/Inferno" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
                  Módulo 3
                </Link>

                <Link href="/Mapas/Overpass" className="hover:text-gray-300" onClick={() => setOpenMobile(false)}>
                  Módulo 4
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
