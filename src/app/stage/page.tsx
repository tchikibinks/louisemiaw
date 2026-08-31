'use client';
import Link from 'next/link';
import { Search, ExternalLink, Sparkles, Building2 } from 'lucide-react';
import { useState } from 'react';

export default function StagesPage() {
  const [search, setSearch] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Tous');

  const stages = [
    { title: "Stage Assistant Chef de Produit", company: "Ubisoft", location: "Montreuil", duration: "6 mois", stipend: "1 050 € / mois", link: "https://www.ubisoft.com/fr-fr/company/careers" },
    { title: "Stage Data Analyst Junior", company: "Deezer", location: "Paris", duration: "6 mois", stipend: "1 200 € / mois", link: "https://www.deezer.com/company/jobs" },
    { title: "Stage Communication & Influence", company: "Red Bull", location: "Lyon", duration: "4-6 mois", stipend: "950 € / mois", link: "https://jobs.redbull.com/" },
    { title: "Stage UI/UX Designer", company: "Blablacar", location: "Paris", duration: "6 mois", stipend: "1 150 € / mois", link: "https://carers.blablacar.com/" },
    { title: "Stage Growth Marketing", company: "Qonto", location: "Paris", duration: "6 mois", stipend: "1 300 € / mois", link: "https://qonto.com/fr/carrieres" },
    { title: "Stage Ingénieur R&D IA", company: "Mistral AI", location: "Paris", duration: "6 mois", stipend: "1 600 € / mois", link: "https://mistral.ai/careers/" },
    { title: "Stage Brand Content Creator", company: "Sephora", location: "Neuilly-sur-Seine", duration: "6 mois", stipend: "1 100 € / mois", link: "https://jobs.sephora.com/" },
    { title: "Stage Business Analyst", company: "Airbus", location: "Toulouse", duration: "6 mois", stipend: "1 150 € / mois", link: "https://www.airbus.com/en/careers" },
    { title: "Stage Finance d'Entreprise", company: "LVMH", location: "Paris", duration: "6 mois", stipend: "1 400 € / mois", link: "https://www.lvmh.com/talents/" },
    { title: "Stage Cybersécurité Junior", company: "Thales", location: "Bordeaux", duration: "6 mois", stipend: "1 250 € / mois", link: "https://www.thalesgroup.com/fr/carrieres" },
    { title: "Stage Chef de Projet Événementiel", company: "Publicis", location: "Paris", duration: "6 mois", stipend: "1 000 € / mois", link: "https://www.publicisgroupe.com/en/careers" },
    { title: "Stage Supply Chain Junior", company: "Schneider Electric", location: "Grenoble", duration: "6 mois", stipend: "1 100 € / mois", link: "https://www.se.com/ww/en/about-us/careers/" },
  ];

  const filtered = stages.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || 
                          s.company.toLowerCase().includes(search.toLowerCase()) || 
                          s.location.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <div className="flex gap-3">
            <Link href="/projet" className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-full hover:bg-emerald-700 transition">Mon Profil AI</Link>
            <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
          </div>
        </header>

        <div className="mb-10 text-center md:text-left">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Sparkles size={14}/> 12 Stages de fin d'études / Césure
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Décroche un stage haut de gamme.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Zéro corvée de café, uniquement des missions formatrices et bien rémunérées.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par entreprise, poste ou ville..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((stage, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">{stage.duration}</span>
                  <span className="font-black text-slate-900 dark:text-white text-sm">{stage.stipend}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-emerald-500 transition line-clamp-1">{stage.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold flex items-center gap-1.5"><Building2 size={14}/> {stage.company} • {stage.location}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <a 
                  href={stage.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-md"
                >
                  Postuler officiel <ExternalLink size={13}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}