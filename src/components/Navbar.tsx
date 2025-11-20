"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-neutral-900 to-black text-white shadow-lg shadow-red-900/20 z-50 border-b border-red-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* LOGO */}
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,0,0,0.4)]">
          CS2 Utility Hub
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-lg mx-auto items-center font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-red-400 transition duration-200"
            >
              Pagina Inicial
            </Link>
          </li>

          <li>
            <Link
              href="/Sobre"
              className="hover:text-red-400 transition duration-200"
            >
              Sobre
            </Link>
          </li>

          {/* MAPAS (DESKTOP HOVER) */}
          <li className="relative group">
            <span className="hover:text-red-400 cursor-pointer select-none transition duration-200">
              Mapas ▾
            </span>

            <ul className="absolute left-1/2 -translate-x-1/2 top-full bg-black/95 backdrop-blur-md border border-red-700 w-48 rounded-md shadow-2xl shadow-red-900/30 z-50 hidden group-hover:block animate-fadeIn">
              <li>
                <Link
                  href="/Mapas/Mirage"
                  className="block px-4 py-2 hover:bg-red-700/70 transition rounded-md"
                >
                  Mirage
                </Link>
              </li>
              <li>
                <Link
                  href="/Mapas/Dust"
                  className="block px-4 py-2 hover:bg-red-700/70 transition rounded-md"
                >
                  Dust II
                </Link>
              </li>
              <li>
                <Link
                  href="/Mapas/Inferno"
                  className="block px-4 py-2 hover:bg-red-700/70 transition rounded-md"
                >
                  Inferno
                </Link>
              </li>
              <li>
                <Link
                  href="/Mapas/Overpass"
                  className="block px-4 py-2 hover:bg-red-700/70 transition rounded-md"
                >
                  Overpass
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              href="/Contato"
              className="hover:text-red-400 transition duration-200"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          className="md:hidden text-red-500 hover:text-red-400 transition"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {openMobile && (
        <div className="md:hidden bg-black/95 backdrop-blur-md w-full px-6 py-4 flex flex-col gap-4 border-t border-red-700 shadow-lg shadow-red-900/40 animate-fadeIn">
          <Link
            href="/"
            className="hover:text-red-400 transition"
            onClick={() => setOpenMobile(false)}
          >
            Pagina Inicial
          </Link>

          <Link
            href="/Sobre"
            className="hover:text-red-400 transition"
            onClick={() => setOpenMobile(false)}
          >
            Sobre
          </Link>

          <Link
            href="/Contato"
            className="hover:text-red-400 transition"
            onClick={() => setOpenMobile(false)}
          >
            Contato
          </Link>

          {/* MAPAS (MOBILE CLICK) */}
          <div className="flex flex-col">
            <button
              className="text-left hover:text-red-400 transition"
              onClick={() => setOpenDropdownMobile(!openDropdownMobile)}
            >
              Mapas ▾
            </button>

            {openDropdownMobile && (
              <div className="ml-4 mt-2 flex flex-col gap-2 animate-fadeIn">
                <Link
                  href="/Mapas/Mirage"
                  className="hover:text-red-400 transition"
                  onClick={() => setOpenMobile(false)}
                >
                  Mirage
                </Link>

                <Link
                  href="/Mapas/Dust"
                  className="hover:text-red-400 transition"
                  onClick={() => setOpenMobile(false)}
                >
                  Dust II
                </Link>

                <Link
                  href="/Mapas/Inferno"
                  className="hover:text-red-400 transition"
                  onClick={() => setOpenMobile(false)}
                >
                  Inferno
                </Link>

                <Link
                  href="/Mapas/Overpass"
                  className="hover:text-red-400 transition"
                  onClick={() => setOpenMobile(false)}
                >
                  Overpass
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
