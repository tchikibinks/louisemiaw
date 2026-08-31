'use client';
import Link from 'next/link';
import { Search, MapPin, Moon, Sun, Sparkles } from 'lucide-react';
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
      <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl transition-transform group-hover:scale-110">🐱</span>
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
              louisemiaw<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex gap-6 font-semibold text-sm text-slate-500 dark:text-slate-400 items-center">
            <Link href="/alternance" className="hover:text-slate-900 dark:hover:text-white transition">Alternance</Link>
            <Link href="/stages" className="hover:text-slate-900 dark:hover:text-white transition">Stages</Link>
            <Link href="/emploi" className="hover:text-slate-900 dark:hover:text-white transition">Emploi</Link>
            <Link href="/international" className="hover:text-slate-900 dark:hover:text-white transition">International</Link>
            <Link href="/cv-builder" className="hover:text-slate-900 dark:hover:text-white transition">CV & Lettre</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Changer de thème"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/projet" className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 rounded-full shadow-sm transition hidden sm:block">
              Créer mon profil
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center text-center px-4 pt-32 pb-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold mb-8 transition-colors">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Le moteur de matching nouvelle génération 🍣
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-4xl mb-6 text-slate-900 dark:text-white leading-[1.1] transition-colors">
          Et toi, tu fais quoi <br/>
          <span className="text-blue-600">l’année prochaine ?</span>
        </h1>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mb-12 font-medium transition-colors">
          Découvre l’emploi, l’alternance ou l’expérience à l’étranger qui correspond <strong className="text-slate-900 dark:text-white">réellement</strong> à ton profil. Sans stress, sans perdre de temps.
        </p>

        {/* BARRE DE RECHERCHE */}
        <div className="bg-white dark:bg-slate-900 p-2 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row gap-2 max-w-3xl w-full transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          
          <div className="flex-1 flex items-center px-5 py-3.5 bg-transparent rounded-full focus-within:bg-slate-50 dark:focus-within:bg-slate-800/50 transition">
            <Search className="text-slate-400 mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Que recherches-tu ?" 
              className="bg-transparent outline-none w-full font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500" 
            />
          </div>

          <div className="hidden md:block w-px bg-slate-100 dark:bg-slate-800 my-2"></div>

          <div className="flex-1 flex items-center px-5 py-3.5 bg-transparent rounded-full focus-within:bg-slate-50 dark:focus-within:bg-slate-800/50 transition">
            <MapPin className="text-slate-400 mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              placeholder="Dans quelle ville ?" 
              className="bg-transparent outline-none w-full font-semibold text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500" 
            />
          </div>

          <Link href="/alternance" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-md dark:shadow-none">
            Rechercher
          </Link>
        </div>
      </main>

      {/* SECTION FONCTIONNALITÉS */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-100 transition-colors">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Matching sur-mesure</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Notre IA analyse tes compétences et te propose uniquement ce qui te correspond.</p>
        </div>
        
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-100 transition-colors">
          <div className="text-3xl mb-4">🍣</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Alternance & Emploi</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Des milliers d'offres qualifiées pour lancer ta carrière dans les meilleures conditions.</p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-blue-100 transition-colors">
          <div className="text-3xl mb-4">🌍</div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Départ à l'étranger</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Stages et jobs internationaux avec options de logement inclus pour voyager l'esprit léger.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-100 dark:border-slate-800 text-center flex flex-col items-center justify-center gap-2 text-sm text-slate-400 dark:text-slate-500 font-medium transition-colors">
        <span>louisemiaw. © 2026</span>
        <span className="text-xs">Fait par Bilal à Tarbes</span>
      </footer>

    </div>
  );
}