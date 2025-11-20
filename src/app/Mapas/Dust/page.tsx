"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, Zap, MoveUpRight, X } from "lucide-react";

export default function Dust() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* BOTÃO FIXO IR PARA INFERNO */}
      <Link
        href="/Mapas/Inferno"
        className="
          fixed bottom-8 right-8 z-50
          bg-[#0d0d0d]/70 backdrop-blur-xl
          px-4 py-3 rounded-2xl border-2 border-red-600
          shadow-[0_0_20px_rgba(255,0,0,0.4)]
          hover:shadow-[0_0_40px_rgba(255,0,0,0.7)]
          transition-all duration-300
          flex items-center gap-3
          hover:-translate-y-1 hover:scale-105
        "
      >
        {/* mini imagem */}
        <Image
          src="/Inferno.png"
          width={40}
          height={40}
          alt="Inferno"
          className="rounded-lg object-cover"
        />

        {/* texto */}
        <span className="text-xl font-bold text-red-400 drop-shadow-lg">
          Inferno
        </span>

        {/* ícone seta */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-500"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8l4 4-4 4" />
        </svg>
      </Link>

      {/* HEADER */}
      <header className="max-w-6xl mx-auto mb-14 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Dust II — Guia Completo
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Smokes, flashes, molotovs e pulos essenciais para dominar Dust II.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 text-red-500 hover:text-red-600 transition font-semibold"
        >
          ← Voltar para o menu
        </Link>
      </header>

      {/* IMAGEM PRINCIPAL */}
      <div className="max-w-6xl mx-auto mb-16 relative group">
        <Image
          src="/dust.png"
          width={1400}
          height={600}
          alt="Dust II"
          className="rounded-3xl shadow-[0_0_35px_rgba(255,0,0,0.45)] group-hover:shadow-[0_0_60px_rgba(255,0,0,0.7)] transition-all duration-500 object-cover"
          priority
        />
      </div>

      {/* GRID DE CARDS */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <Card
          title="Smokes"
          icon={
            <div className="p-2 rounded-full border-2 border-red-500 flex items-center justify-center shadow-[0_0_10px_rgba(255,0,0,0.5)]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-red-500"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 15c-1.5-1-2-3-.5-4.5s3-1.5 4.5-.5c.5-2 2.5-3 4-2s2 3 1 4c2 .5 3 2.5 2 4s-3 2-4.5 1c-.5 1.5-2 2.5-3.5 2s-2.5-2-2-3.5z" />
                <path d="M9 4c0 1.5 1 2.5 2 3" />
                <path d="M13 2c0 1.5 1.5 3 3 3.5" />
              </svg>
            </div>
          }
          onClick={() => openModal("smokes")}
        />

        <Card
          title="Flashbangs"
          icon={<Zap className="text-red-400 w-8 h-8" />}
          onClick={() => openModal("flashes")}
        />

        <Card
          title="Molotovs"
          icon={<Flame className="text-red-400 w-8 h-8" />}
          onClick={() => openModal("molotovs")}
        />

        <Card
          title="Pulos"
          icon={<MoveUpRight className="text-red-400 w-8 h-8" />}
          onClick={() => openModal("jumps")}
        />
      </div>

      {/* MODAIS - Dust II */}
      {activeModal === "smokes" && (
        <Modal title="Smokes — Dust II" close={closeModal}>
          <VideoBlock
            video="/videos/dust-smoke-ct.mp4"
            desc="Smoke CT — essencial para dominar meio."
          />
          <VideoBlock
            video="/videos/dust-smoke-cross.mp4"
            desc="Smoke Cross — entrada segura no bomb A."
          />
        </Modal>
      )}

      {activeModal === "flashes" && (
        <Modal title="Flashbangs — Dust II" close={closeModal}>
          <VideoBlock
            video="/videos/dust-flash-long.mp4"
            desc="Flash longa para avançar com segurança."
          />
          <VideoBlock
            video="/videos/dust-flash-mid.mp4"
            desc="Flash meio para contestar controle adversário."
          />
        </Modal>
      )}

      {activeModal === "molotovs" && (
        <Modal title="Molotovs — Dust II" close={closeModal}>
          <VideoBlock
            video="/videos/dust-molotov-car.mp4"
            desc="Molotov Car — essencial nos duelos no Long."
          />
        </Modal>
      )}

      {activeModal === "jumps" && (
        <Modal title="Pulos — Dust II" close={closeModal}>
          <VideoBlock
            video="/videos/dust-jump-xbox.mp4"
            desc="Pulo Xbox — método rápido sem boost."
          />
        </Modal>
      )}
    </div>
  );
}

/* CARD */
function Card({ title, icon, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="
        bg-[#0d0d0d]/60 backdrop-blur-xl 
        p-8 rounded-3xl border border-red-700/40 
        shadow-[0_0_20px_rgba(255,0,0,0.15)]
        hover:shadow-[0_0_45px_rgba(255,0,0,0.6)]
        transition-all duration-500
        transform hover:-translate-y-2 hover:scale-[1.02]
        text-left w-full
      "
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-3xl font-bold text-red-400 drop-shadow-md">{title}</h2>
      </div>
      <p className="text-gray-400 text-lg">Clique para ver vídeos e explicações.</p>
    </button>
  );
}

/* MODAL */
function Modal({ title, close, children }: any) {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-[#111] w-full max-w-3xl p-6 rounded-3xl border border-red-700 shadow-xl relative animate-fadeIn">
        <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500" onClick={close}>
          <X size={26} />
        </button>

        <h2 className="text-3xl font-bold mb-6 text-red-400">{title}</h2>

        <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2">
          {children}
        </div>
      </div>
    </div>
  );
}

/* BLOCO DE VÍDEO */
function VideoBlock({ video, desc }: any) {
  return (
    <div>
      <video src={video} controls className="w-full rounded-xl mb-2" />
      <p className="text-gray-300">{desc}</p>
    </div>
  );
}
