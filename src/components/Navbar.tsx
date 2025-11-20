'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-red-600 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-red-500">Meu Projeto</h1>

        {/* MENU HAMBÚRGUER (mobile) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* LINKS DESKTOP */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>

          {/* Dropdown Mapas */}
          <li className="relative group">
            <span className="cursor-pointer">Mapas</span>

            <ul className="absolute hidden group-hover:flex flex-col bg-black border border-red-600 p-2 mt-2 w-40">
              <Link href="/Mapas/Dust" className="hover:text-red-500">Dust</Link>
              <Link href="/Mapas/Mirage" className="hover:text-red-500">Mirage</Link>
              <Link href="/Mapas/Nuke" className="hover:text-red-500">Nuke</Link>
              <Link href="/Mapas/Inferno" className="hover:text-red-500">Inferno</Link>
              <Link href="/Mapas/Vertigo" className="hover:text-red-500">Vertigo</Link>
            </ul>
          </li>

        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black border-t border-red-600 p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/sobre" onClick={() => setOpen(false)}>Sobre</Link>

          {/* Mapas */}
          <div>
            <p className="font-semibold mb-2">Mapas</p>
            <div className="flex flex-col gap-2 pl-4">
              <Link href="/Mapas/Dust">Dust</Link>
              <Link href="/Mapas/Mirage">Mirage</Link>
              <Link href="/Mapas/Nuke">Nuke</Link>
              <Link href="/Mapas/Inferno">Inferno</Link>
              <Link href="/Mapas/Vertigo">Vertigo</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
