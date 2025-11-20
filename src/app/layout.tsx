import './globals.css';
import React from 'react';

export const metadata = {
  title: 'CS2',
  description: 'Projeto CS2'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
