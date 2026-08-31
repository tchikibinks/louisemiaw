'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';

export default function ProjetPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto w-full pt-6">
        <header className="flex justify-between items-center mb-10">
          <Link href="/" className="font-black text-xl">🐱 louisemiaw.</Link>
          <Link href="/" className="px-4 py-2 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Retour</Link>
        </header>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-4">
            <Sparkles size={14}/> Profil Intelligent 🍣
          </div>
          <h1 className="text-3xl font-black mb-2">Crée ton profil en 1 min</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">L'IA se chargera de l'envoyer aux entreprises correspondantes.</p>

          {!submitted ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ton Prénom & Nom</label>
                <input type="text" placeholder="Louise Martin" className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ton Diplôme / Recherche</label>
                <input type="text" placeholder="BTS, Licence, Alternance Marketing..." className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700" />
              </div>
              <button onClick={() => setSubmitted(true)} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl transition shadow-lg">
                Activer mon profil 🚀
              </button>
            </div>
          ) : (
            <div className="text-center py-10 space-y-4">
              <CheckCircle className="mx-auto text-emerald-500" size={50} />
              <h3 className="text-2xl font-black">Profil créé avec succès !</h3>
              <p className="text-slate-500 text-sm">Les premières offres adaptées t'attendent sur ton tableau de bord.</p>
              <Link href="/candidatures" className="inline-block mt-4 px-6 py-3 bg-slate-900 dark:bg-slate-800 text-white font-bold rounded-xl">Voir mes candidatures</Link>
            </div>
          )}
        </div>
      </div>

      <footer className="py-6 text-center text-xs text-slate-400">
        louisemiaw. © 2026 — Fait par Bilal à Tarbes
      </footer>
    </div>
  );
}