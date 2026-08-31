'use client';
import Link from 'next/link';
import { Search, ArrowRight, Building2, Sparkles, Flame, Coffee } from 'lucide-react';
import { useState } from 'react';

export default function StagesPage() {
  const [search, setSearch] = useState('');
  const [selectedVibe, setSelectedVibe] = useState('Tous');

  const stages = [
    { title: "Stage Growth & Acquisition (IA)", company: "Mistral AI vibes", location: "Paris", duration: "6 mois", stipend: "1 400 € / mois", vibe: "Tech", desc: "Viens scaler l'acquisition utilisateur avec des budgets publicitaires massifs." },
    { title: "Stage Community Manager / TikTok Creator", company: "Sephora", location: "Boulogne / Remote partiel", duration: "6 mois", stipend: "1 200 € / mois", vibe: "Créatif", desc: "Crée les tendances TikTok et gère les partenariats influenceurs." },
    { title: "Stage Assistant Chef de Produit FinTech", company: "Qonto", location: "Paris", duration: "6 mois", stipend: "1 350 € / mois", vibe: "Startup", desc: "Conçois les fonctionnalités bancaires de demain pour les PME." },
    { title: "Stage Data & Business Intelligence", company: "Ubisoft", location: "Montreuil", duration: "6 mois", stipend: "1 250 € / mois", vibe: "Gaming", desc: "Analyse les comportements des joueurs sur les blockbusters mondiaux." },
  ];

  const filtered = stages.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.company.toLowerCase().includes(search.toLowerCase());
    const matchesVibe = selectedVibe === 'Tous' || s.vibe === selectedVibe;
    return matchesSearch && matchesVibe;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full hover:opacity-80 transition">Accueil</Link>
        </header>

        <div className="mb-10">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold inline-flex items-center gap-1">
            <Sparkles size={14}/> Les meilleurs stages de fin d'études (Zéro corvée de café)
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Des stages qui font vraiment vibrer CV.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Sélectionnés pour leur rémunération correcte, leur encadrement et leur impact réel.</p>
        </div>

        {/* Filtres par "Vibe" */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['Tous', 'Tech', 'Créatif', 'Startup', 'Gaming'].map((vibe) => (
            <button
              key={vibe}
              onClick={() => setSelectedVibe(vibe)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${selectedVibe === vibe ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400'}`}
            >
              {vibe}
            </button>
          ))}
        </div>

        {/* Barre de recherche */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Recherche par poste ou entreprise..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((stage, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">{stage.duration}</span>
                  <span className="font-black text-slate-900 dark:text-white text-base">{stage.stipend}</span>
                </div>
                <h3 className="font-bold text-2xl mb-2 group-hover:text-emerald-500 transition">{stage.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold flex items-center gap-1.5"><Building2 size={16}/> {stage.company} • {stage.location}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 font-medium bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">{stage.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">{stage.vibe}</span>
                <Link href="/projet" className="px-5 py-2.5 bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold rounded-xl hover:opacity-95 transition flex items-center gap-1.5 shadow-md">
                  Postuler en 1 clic <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}