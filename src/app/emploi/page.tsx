'use client';
import Link from 'next/link';
import { Briefcase, Zap, Euro, Sparkles } from 'lucide-react';

export default function EmploiPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      
      <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-xl flex items-center gap-2">
            <span>💼</span> louisemiaw<span className="text-blue-600">.</span>
          </Link>
          <Link href="/projet" className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-full font-bold text-sm">
            Mon Profil
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-slate-900 dark:bg-slate-900 text-white p-8 sm:p-12 rounded-3xl mb-10 shadow-xl border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-4">
            <Sparkles size={14}/> Junior & Jeune Diplômé
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Ton premier vrai contrat.</h1>
          <p className="text-slate-400 max-w-2xl mb-8">
            CDI, CDD et jobs d'été. Des offres transparentes qui acceptent les profils juniors.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition">CDI / CDD</button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold transition">Job Saisonnier</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARTE EMPLOI 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl font-black text-xs">CDI</div>
            
            <h3 className="text-xl font-bold mb-1 mt-2">Développeur Front-End Junior</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-4">TechAgency — Bordeaux (Hybride)</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl flex flex-col gap-1">
                <Euro size={16} className="text-emerald-500"/>
                <span className="font-bold text-sm">32k - 35k / an</span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl flex flex-col gap-1">
                <Zap size={16} className="text-amber-500"/>
                <span className="font-bold text-sm">Tickets Resto + Mutuelle</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">Publié il y a 2h</span>
              <Link href="/candidatures" className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-extrabold rounded-xl text-sm hover:bg-blue-600 transition">Postuler en 1 clic</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}