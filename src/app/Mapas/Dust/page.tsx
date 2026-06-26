"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

type UtilKey = "smokes" | "flashes" | "molotovs" | "jumps";

const utils: { key: UtilKey; label: string; icon: string }[] = [
  { key: "smokes",   label: "Smokes",     icon: "💨" },
  { key: "flashes",  label: "Flashbangs", icon: "⚡" },
  { key: "molotovs", label: "Molotovs",   icon: "🔥" },
  { key: "jumps",    label: "Pulos",      icon: "⬆" },
];

const modalData: Record<UtilKey, { title: string; videos: { src: string; desc: string }[] }> = {
  smokes:   { title: "Smokes — Dust II",     videos: [{ src: "/videos/dust-smoke-ct.mp4", desc: "Smoke CT — essencial para dominar meio." }, { src: "/videos/dust-smoke-cross.mp4", desc: "Smoke Cross — entrada segura no bomb A." }] },
  flashes:  { title: "Flashbangs — Dust II", videos: [{ src: "/videos/dust-flash-long.mp4", desc: "Flash longa para avançar com segurança." }, { src: "/videos/dust-flash-mid.mp4", desc: "Flash meio para contestar controle adversário." }] },
  molotovs: { title: "Molotovs — Dust II",   videos: [{ src: "/videos/dust-molotov-car.mp4", desc: "Molotov Car — essencial nos duelos no Long." }] },
  jumps:    { title: "Pulos — Dust II",      videos: [{ src: "/videos/dust-jump-xbox.mp4", desc: "Pulo Xbox — método rápido sem boost." }] },
};

export default function DustPage() {
  const [active, setActive] = useState<UtilKey | null>(null);

  return (
    <div style={{ background: "linear-gradient(180deg, #050507 0%, #080810 100%)", minHeight: "100vh" }}>

      <Link href="/Mapas/Inferno" className="next-map-btn">
        <Image src="/Inferno.png" width={40} height={40} alt="Inferno" style={{ borderRadius: "8px", objectFit: "cover" }} />
        <div>
          <div style={{ fontSize: "0.62rem", color: "#555577", fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px" }}>Próximo mapa</div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F5F5F8" }}>Inferno</div>
        </div>
        <span style={{ color: "#E8192C", fontSize: "1.1rem" }}>→</span>
      </Link>

      <section style={{ padding: "72px 24px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <Link href="/Mapas" style={{ fontSize: "0.78rem", color: "#555577", fontFamily: "'JetBrains Mono', monospace", textDecoration: "none" }}>← Todos os mapas</Link>
        </div>
        <div className="section-label" style={{ marginBottom: "16px" }}>Guia Completo</div>
        <h1 className="font-display" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.01em", lineHeight: 1, marginBottom: "16px" }}>
          <span style={{ color: "#F5F5F8" }}>Dust II</span>
          <span className="text-red-gradient"> — Utilidades</span>
        </h1>
        <p style={{ fontSize: "1rem", color: "#888899", maxWidth: "500px", lineHeight: 1.7 }}>
          O clássico absoluto. Long, mid e bomb B definem o ritmo do jogo. Aprenda cada smoke essencial.
        </p>
      </section>

      <hr className="divider" />

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>
        <div className="map-img-wrap" style={{ position: "relative", height: "clamp(200px, 35vw, 420px)" }}>
          <Image src="/Dust.png" alt="Dust II" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(5,5,7,0.8) 100%)" }} />
        </div>
      </section>

      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 96px" }}>
        <div style={{ marginBottom: "32px" }}>
          <div className="section-label" style={{ marginBottom: "12px" }}>Selecione a categoria</div>
          <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, textTransform: "uppercase", color: "#F5F5F8" }}>Utilidades</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
          {utils.map((u) => (
            <button key={u.key} className="util-card" onClick={() => setActive(u.key)}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "12px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(232,25,44,0.1)", border: "1px solid rgba(232,25,44,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>{u.icon}</div>
                <h3 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#F5F5F8", textTransform: "uppercase", letterSpacing: "0.02em" }}>{u.label}</h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#888899", lineHeight: 1.6 }}>Clique para ver vídeos e explicações detalhadas.</p>
              <div style={{ marginTop: "16px", fontSize: "0.8rem", color: "#E8192C", fontWeight: 600 }}>Ver utilidades →</div>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="modal-overlay" onClick={() => setActive(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "6px", cursor: "pointer", color: "#888899", display: "flex" }}>
              <X size={20} />
            </button>
            <div className="section-label" style={{ marginBottom: "12px" }}>{modalData[active].title}</div>
            <h2 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", color: "#F5F5F8", marginBottom: "28px" }}>
              {utils.find(u => u.key === active)?.label}
            </h2>
            <div style={{ maxHeight: "60vh", overflowY: "auto", display: "flex", flexDirection: "column", gap: "28px", paddingRight: "4px" }}>
              {modalData[active].videos.map((v, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.03)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <video src={v.src} controls style={{ width: "100%", display: "block" }} />
                  <div style={{ padding: "12px 16px" }}>
                    <p style={{ fontSize: "0.875rem", color: "#888899", lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
