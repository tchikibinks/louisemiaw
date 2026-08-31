'use client';
import Link from 'next/link';
import { Search, MapPin, Clock, Laptop, Sparkles } from 'lucide-react';

export default function StagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      
      <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-xl flex items-center gap-2">
            <span>🎓</span> louisemiaw<span className="text-blue-600">.</span>
          </Link>
          <Link href="/projet" className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-full font-bold text-sm">
            Mon Profil
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl mb-10 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-4">
            <Sparkles size={14}/> Stages & Conventions
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Trouve le stage parfait.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mb-8">
            Filtre par durée, gratification et conditions de télétravail pour trouver l'expérience qui validera ton année.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800">1 à 2 mois</button>
            <button className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800">6 mois (Fin d'études)</button>
            <button className="px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold text-sm">Full Télétravail</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CARTE STAGE 1 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-blue-300 transition group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-1">Assistant(e) Marketing Digital</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold">StartUp InnovTech — Toulouse</p>
              </div>
              <span className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-black px-3 py-1 rounded-full">URGENT</span>
            </div>
            
            <div className="flex gap-4 mb-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1"><Clock size={16}/> 6 mois</span>
              <span className="flex items-center gap-1"><Laptop size={16}/> 2j Télétravail</span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="font-extrabold text-slate-900 dark:text-white">850 € / mois</span>
              <Link href="/candidatures" className="px-5 py-2.5 bg-slate-900 dark:bg-slate-800 text-white font-extrabold rounded-xl text-sm group-hover:bg-blue-600 transition">Postuler</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}