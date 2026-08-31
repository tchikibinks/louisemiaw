'use client';
import Link from 'next/link';
import { Search, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-100">
      
      {/* HEADER ÉPURÉ */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl transition-transform group-hover:scale-110">🐱</span>
            <span className="text-xl font-black tracking-tight text-slate-900">
              louisemiaw<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex gap-8 font-semibold text-sm text-slate-500">
            <Link href="/projet" className="hover:text-slate-900 transition">Alternance</Link>
            <Link href="/international" className="hover:text-slate-900 transition">International</Link>
            <Link href="/projet" className="hover:text-slate-900 transition">CV & Lettre</Link>
          </nav>

          <Link href="/projet" className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-full shadow-sm transition">
            Créer mon profil
          </Link>
        </div>
      </header>

      {/* HERO SECTION MINIMALISTE */}
      <main className="flex-1 flex flex-col items-center text-center px-4 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Le moteur de matching nouvelle génération 🍣
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-4xl mb-6 text-slate-900 leading-[1.1]">
          Et toi, tu fais quoi <br/>
          <span className="text-blue-600">l’année prochaine ?</span>
        </h1>
        
        <p className="text-lg text-slate-500 max-w-2xl mb-12 font-medium">
          Découvre l’emploi, l’alternance ou l’expérience à l’étranger qui correspond <strong className="text-slate-900">réellement</strong> à ton profil. Sans stress, sans perdre de temps.
        </p>

        {/* BARRE DE RECHERCHE PREMIUM */}
        <div className="bg-white p-2 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-2 max-w-3xl w-full transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="flex-1 flex items-center px-5 py-3.5 bg-transparent rounded-full focus-within:bg-slate-50 transition">
            <Search className="text-slate-400 mr-3" size={20} />
            <input 
              type="text" 
              placeholder="Que recherches-tu ?" 
              className="bg-transparent outline-none w-full font-semibold text-slate-900 placeholder-slate-400" 
            />
          </div>

          <div className="hidden md:block w-px bg-slate-100 my-2"></div>

          <div className="flex-1 flex items-center px-5 py-3.5 bg-transparent rounded-full focus-within:bg-slate-50 transition">
            <MapPin className="text-slate-400 mr-3" size={20} />
            <input 
              type="text" 
              placeholder="Dans quelle ville ?" 
              className="bg-transparent outline-none w-full font-semibold text-slate-900 placeholder-slate-400" 
            />
          </div>

          <Link href="/projet" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2">
            Rechercher
          </Link>
        </div>
      </main>

      {/* SECTION FONCTIONNALITÉS (Clean & Efficace) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Matching sur-mesure</h3>
          <p className="text-slate-500 text-sm font-medium">Notre IA analyse tes compétences et te propose uniquement ce qui te correspond.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition">
          <div className="text-3xl mb-4">🍣</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Alternance & Emploi</h3>
          <p className="text-slate-500 text-sm font-medium">Des milliers d'offres qualifiées pour lancer ta carrière dans les meilleures conditions.</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 transition">
          <div className="text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900">Départ à l'étranger</h3>
          <p className="text-slate-500 text-sm font-medium">Stages et jobs internationaux avec options de logement inclus pour voyager l'esprit léger.</p>
        </div>
      </section>

      {/* FOOTER DISCRET */}
      <footer className="py-8 border-t border-slate-100 text-center flex flex-col items-center justify-center gap-2 text-sm text-slate-400 font-medium">
        <span>louisemiaw. © 2026</span>
        <span className="text-xs">Fait avec 🐱 et 🍣 à Tarbes</span>
      </footer>

    </div>
  );
}