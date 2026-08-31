'use client';
import Link from 'next/link';
import { Sparkles, MapPin, Building, ArrowRight, ShieldCheck, Wallet } from 'lucide-react';
import { useState } from 'react';

export default function ComparateurPage() {
  const [ville, setVille] = useState('toulouse');

  const dataVille: Record<string, { nom: string; loyerMoyen: string; transport: string; dynamisme: string; verite: string }> = {
    toulouse: { nom: "Toulouse", loyerMoyen: "550 € / studio", transport: "10 € / mois (-26 ans)", dynamisme: "Aéronautique, Spatial & Tech", verite: "Le meilleur compromis qualité de vie / loyer en Occitanie." },
    paris: { nom: "Paris", loyerMoyen: "950 € / studio", transport: "38 € / mois (Pass Navigo Alternant)", dynamisme: "Fintech, IA, Startups & Sièges sociaux", verite: "Loyers chers, mais salaires et opportunités massives." },
    bordeaux: { nom: "Bordeaux", loyerMoyen: "700 € / studio", transport: "30 € / mois", dynamisme: "Marketing, Vin tech & Agences", verite: "Cadre de vie exceptionnel, marché un peu tendu." },
    tarbes: { nom: "Tarbes", loyerMoyen: "380 € / studio", transport: "Gratuit ou quasi", dynamisme: "Industrie, Alpine F1, Tourisme & Local", verite: "Pouvoir d'achat maximal, calme et proximité des Pyrénées." },
    lyon: { nom: "Lyon", loyerMoyen: "680 € / studio", transport: "32 € / mois", dynamisme: "Santé, Tech & Numérique", verite: "La grande métropole gourmande et ultra-dynamique." }
  };

  const current = dataVille[ville];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="text-center mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Wallet size={14}/> Comparateur Pouvoir d'Achat Étudiant
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-2 tracking-tight">Où fait-il bon vivre en Alternance ?</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Analyse des loyers, transports et du coût de la vie réelle ville par ville.</p>
        </div>

        {/* Sélecteur de ville */}
        <div className="flex justify-center gap-2 flex-wrap mb-10">
          {Object.keys(dataVille).map((k) => (
            <button
              key={k}
              onClick={() => setVille(k)}
              className={`px-5 py-3 rounded-2xl font-extrabold text-sm transition capitalize ${ville === k ? 'bg-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
            >
              📍 {dataVille[k].nom}
            </button>
          ))}
        </div>

        {/* Fiche détaillée de la ville */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Analyse Territoriale</span>
              <h2 className="text-4xl font-black mt-1 mb-3">{current.nom}</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{current.verite}</p>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex justify-between items-center border border-slate-100 dark:border-slate-800">
                <span className="text-sm font-semibold text-slate-500">Loyer moyen studio</span>
                <span className="font-black text-base">{current.loyerMoyen}</span>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex justify-between items-center border border-slate-100 dark:border-slate-800">
                <span className="text-sm font-semibold text-slate-500">Abonnement Transport</span>
                <span className="font-black text-base">{current.transport}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 rounded-[2rem] shadow-xl space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Secteurs & Dynamisme</div>
            <div className="text-2xl font-black">{current.dynamisme}</div>
            <p className="text-sm text-blue-100 font-medium">Les entreprises locales recrutent massivement de nouveaux profils en alternance cette année.</p>
            <Link href="/alternance" className="w-full py-4 bg-white text-blue-900 font-extrabold rounded-xl text-center shadow-md hover:bg-blue-50 transition flex items-center justify-center gap-2">
              Voir les offres à {current.nom} <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}