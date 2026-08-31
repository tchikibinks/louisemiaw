'use client';
import Link from 'next/link';
import { Search, MapPin, Sparkles, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans relative overflow-hidden selection:bg-pink-200">
      
      {/* DECORATIONS CHATS & SUSHIS EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-80">
        <span className="absolute top-12 left-10 text-4xl animate-bounce duration-1000">🐱</span>
        <span className="absolute top-28 right-16 text-4xl animate-pulse">🍣</span>
        <span className="absolute top-1/3 left-8 text-3xl opacity-60 hover:opacity-100 transition">🐾</span>
        <span className="absolute top-1/2 right-12 text-4xl animate-bounce delay-300">😸</span>
        <span className="absolute bottom-32 left-16 text-4xl animate-pulse delay-500">🥢</span>
        <span className="absolute bottom-20 right-20 text-4xl">🍣</span>
        <span className="absolute top-2/3 left-1/4 text-2xl opacity-40">🐾</span>
        <span className="absolute top-20 left-1/2 -translate-x-1/2 text-2xl opacity-50">✨</span>
      </div>

      {/* HEADER */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
              🐱
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              louisemiaw<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-600 items-center">
            <Link href="/projet" className="hover:text-blue-600 transition">Opportunités</Link>
            <Link href="/projet" className="hover:text-blue-600 transition flex items-center gap-1">
              Alternance <span className="text-xs">🍣</span>
            </Link>
            <Link href="/projet" className="hover:text-blue-600 transition flex items-center gap-1">
              International <span className="text-xs">🌍</span>
            </Link>
            <Link href="/projet" className="hover:text-blue-600 transition">CV & Lettre</Link>
          </nav>

          <Link href="/projet" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition hover:scale-105">
            <Sparkles size={16}/> Créer mon profil <span className="text-base">🐾</span>
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 relative z-10 bg-gradient-to-b from-blue-50/50 via-pink-50/20 to-slate-50">
        
        {/* BADGES PROMO AMUSANTS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-800 text-sm font-bold shadow-sm backdrop-blur-sm">
            <Sparkles size={16} className="text-blue-600" /> Le 1er moteur de matching orientation & emploi
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs font-bold border border-pink-200">
            <span>🐱 100% Miaw Compliant</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs font-bold border border-amber-200">
            <span>🍣 Fresh Offres</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl mb-6 text-slate-900 leading-[1.1]">
          Et toi, tu fais quoi <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500">
            l’année prochaine ?
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          <strong className="text-slate-900">louisemiaw</strong> t’aide à trouver l’emploi, l’alternance ou l’expérience à l’étranger qui correspond réellement à ton profil. 🐾
        </p>

        {/* BARRE DE RECHERCHE */}
        <div className="bg-white p-3 rounded-3xl shadow-xl shadow-blue-900/10 border border-slate-200 flex flex-col md:flex-row gap-3 max-w-3xl w-full relative group">
          
          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition">
            <Search className="text-slate-400 mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Que recherches-tu ? (ex: BTS, Vente...)" 
              className="bg-transparent outline-none w-full font-medium text-slate-900 placeholder-slate-400" 
            />
          </div>

          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition">
            <MapPin className="text-slate-400 mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Dans quelle ville ?" 
              className="bg-transparent outline-none w-full font-medium text-slate-900 placeholder-slate-400" 
            />
          </div>

          <Link href="/projet" className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2">
            Rechercher 🍣
          </Link>

        </div>

        {/* PETIT CHAT MASCOTTE EN BAS DE HERO */}
        <div className="mt-12 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm inline-flex items-center gap-3">
          <span className="text-3xl">😺</span>
          <div className="text-left text-xs font-semibold text-slate-600">
            <span className="font-bold text-slate-900 block text-sm">Assistant louisemiaw AI</span>
            Laisse-moi t'aider à trouver le meilleur parcours !
          </div>
        </div>

      </main>

      {/* FOOTER SIMPLE */}
      <footer className="py-6 border-t border-slate-200 text-center text-xs text-slate-400 relative z-10 bg-white">
        © 2026 louisemiaw 🐾 Tout droit réservé 🍣
      </footer>

    </div>
  );
}