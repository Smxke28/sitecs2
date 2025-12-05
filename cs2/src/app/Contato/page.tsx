'use client';

import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contatos() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Contatos</h1>

      <p className="text-lg mb-8 max-w-md">
        Aqui você encontra meus principais meios de contato e redes profissionais.
      </p>

      {/* CONTAINER COM GRADIENTE */}
      <div
        className="w-full max-w-xs p-6 rounded-2xl border border-red-600 
                   bg-gradient-to-b from-red-900/40 to-black/70 shadow-lg"
      >
        <div className="flex flex-col gap-3">

          {/* === EMAIL === */}
          <a
            href="mailto:juanlavecchia23@gmail.com"
            className="flex items-center justify-center gap-2 px-4 py-2 
                       rounded-lg bg-black/60 border border-red-600 
                       hover:bg-black/80 hover:border-red-400 transition"
          >
            <Mail className="w-5 h-5 text-red-500" />
            <span className="text-base">Email</span>
          </a>

          {/* === GITHUB === */}
          <a
            href="https://github.com/Smxke28"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 
                       rounded-lg bg-black/60 border border-red-600 
                       hover:bg-black/80 hover:border-red-400 transition"
          >
            <Github className="w-5 h-5 text-red-500" />
            <span className="text-base">GitHub</span>
          </a>

          {/* === LINKEDIN === */}
          <a
            href="https://www.linkedin.com/in/juan-lavecchia-8b3b5131a/"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 py-2 
                       rounded-lg bg-black/60 border border-red-600 
                       hover:bg-black/80 hover:border-red-400 transition"
          >
            <Linkedin className="w-5 h-5 text-red-500" />
            <span className="text-base">LinkedIn</span>
          </a>

        </div>
      </div>
    </main>
  );
}
