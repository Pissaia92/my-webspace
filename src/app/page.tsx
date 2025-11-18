'use client';

import Link from 'next/link';
import AuthButton from './components/AuthButton';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/fundo.webm" type="video/webm" />
      </video>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-white hover:text-green-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white hover:text-green-400">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-white hover:text-green-400"
              >
                Dashboard
              </Link>
            </li>
          </ul>
          <AuthButton />
        </nav>
      </header>

      {/* Conteúdo central */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Carlos Pissaia Junior <br />
          <span className="text-green-500"></span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Fullstack Developer | Data Scientist
        </p>
        <Link
          href="/projects"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg shadow-lg transition hover:scale-105"
        >
          View Projects
        </Link>
      </main>
    </div>
  );
}
