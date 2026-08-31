'use client';
import Link from 'next/link';
import { Search, MapPin, Sparkles, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* HEADER */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">l</div>
            <span className="text-2xl font-black tracking-tight text-slate-900">louisemiaw<span className="text-blue-600">.</span></span>
          </Link>
          <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-600">
            <Link href="#" className="hover:text-blue-600">Opportunités</Link>
            <Link href="#" className="hover:text-blue-600">Alternance</Link>
            <Link href="#" className="hover:text-blue-600">International</Link>
            <Link href="#" className="hover:text-blue-600">CV & Lettre</Link>
          </nav>
          <Link href="#" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md flex items-center gap-2">
            <Sparkles size={16}/> Créer mon profil
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 bg-gradient-to-b from-blue-50/60 to-slate-50">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 text-sm font-bold mb-8">
          <Sparkles size={16} /> Le premier moteur de matching orientation & emploi
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl mb-6">
          Et toi, tu fais quoi <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">l’année prochaine ?</span>
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mb-12">
          louisemiaw t’aide à trouver l’emploi, l’alternance ou l’expérience à l’étranger qui correspond réellement à ton profil.
        </p>

        {/* BARRE DE RECHERCHE */}
        <div className="bg-white p-3 rounded-3xl shadow-xl shadow-blue-900/10 border border-slate-200 flex flex-col md:flex-row gap-3 max-w-3xl w-full">
          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition">
            <Search className="text-slate-400 mr-3" size={20} />
            <input type="text" placeholder="Que recherches-tu ?" className="bg-transparent outline-none w-full font-medium text-slate-900" />
          </div>
          <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 rounded-2xl focus-within:ring-2 focus-within:ring-blue-500 transition">
            <MapPin className="text-slate-400 mr-3" size={20} />
            <input type="text" placeholder="Dans quelle ville ?" className="bg-transparent outline-none w-full font-medium text-slate-900" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg transition">
            Rechercher
          </button>
        </div>
      </main>
    </div>
  );
}