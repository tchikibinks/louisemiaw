'use client';
import Link from 'next/link';
import { Search, MapPin, Moon, Sun, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col font-sans transition-colors duration-300">
      
      {/* HEADER */}
      <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🐱</span>
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              louisemiaw<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex gap-6 font-semibold text-sm text-slate-500 dark:text-slate-400 items-center">
            <Link href="/alternance" className="hover:text-slate-900 dark:hover:text-white transition">Alternance</Link>
            <Link href="/stages" className="hover:text-slate-900 dark:hover:text-white transition">Stages</Link>
            <Link href="/emploi" className="hover:text-slate-900 dark:hover:text-white transition">Emploi</Link>
            <Link href="/international" className="hover:text-slate-900 dark:hover:text-white transition">International</Link>
            <Link href="/cv-builder" className="hover:text-slate-900 dark:hover:text-white transition">CV & Lettre AI</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/dashboard" className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md transition flex items-center gap-1.5">
              Mon Dashboard SaaS <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center text-center px-4 pt-28 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-extrabold mb-8 shadow-sm">
          <Sparkles size={14} className="animate-spin"/> Le SaaS de matching nouvelle génération 🍣
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-4xl mb-6 text-slate-900 dark:text-white leading-[1.08]">
          Décroche ton alternance ou ton CDI <br/>
          <span className="text-blue-600">grâce à l'IA.</span>
        </h1>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-12 font-medium">
          Fini les lettres de motivation interminables envoyées dans le vide. <strong className="text-slate-900 dark:text-white">louisemiaw.</strong> analyse ton profil et l'envoie aux meilleures entreprises tech & corporate.
        </p>

        {/* BARRE DE RECHERCHE ACCUEIL */}
        <div className="bg-white dark:bg-slate-900 p-2.5 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-2 max-w-3xl w-full mb-16">
          <div className="flex-1 flex items-center px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-full">
            <Search className="text-slate-400 mr-3 shrink-0" size={20} />
            <input type="text" placeholder="Poste recherché (ex: Développeur, Marketing...)" className="bg-transparent outline-none w-full font-semibold text-slate-900 dark:text-white text-sm" />
          </div>
          <div className="flex-1 flex items-center px-5 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-full">
            <MapPin className="text-slate-400 mr-3 shrink-0" size={20} />
            <input type="text" placeholder="Ville (ex: Paris, Lyon, Remote...)" className="bg-transparent outline-none w-full font-semibold text-slate-900 dark:text-white text-sm" />
          </div>
          <Link href="/alternance" className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-9 py-4 rounded-full transition flex items-center justify-center text-sm shadow-md">
            Chercher
          </Link>
        </div>

        {/* SECTION VALEURS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 text-left">
          <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Matching de Précision</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Algorithme propriétaire qui score ta compatibilité avec chaque offre en direct.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Candidature 1-Clic</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Redirection instantanée vers les portails officiels ou postulation directe via ton profil SaaS.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Zéro Annonce Fake</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Toutes nos offres affichent des salaires réels et proviennent de partenariats vérifiés.</p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-2 text-sm text-slate-400 dark:text-slate-500 font-medium">
        <span>louisemiaw. © 2026 — Le SaaS de référence</span>
        <span className="text-xs">Fait par Bilal à Tarbes</span>
      </footer>
    </div>
  );
}