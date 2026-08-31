'use client';
import Link from 'next/link';
import { BrainCircuit, CheckCircle2, AlertTriangle, Briefcase, MapPin, SlidersHorizontal, ThumbsDown } from 'lucide-react';
import { useState } from 'react';

export default function ExplorerPage() {
  const recommendations = [
    {
      id: 1,
      title: "Business Developer Junior",
      company: "TechNova (Scale-up)",
      type: "CDI",
      location: "Toulouse",
      salary: "35k€ - 40k€",
      match: 94,
      why: ["Ton diplôme (Bac+3 Commerce) correspond", "Compétence 'Négociation' détectée", "Salaire dans tes critères", "Moins de 20km de chez toi"],
      whyNot: ["Demande un niveau d'Anglais C1 (tu as B2)", "Télétravail limité (1j/semaine)"],
      environment: "Terrain & Bureau"
    },
    {
      id: 2,
      title: "Commercial Sédentaire",
      company: "Swile",
      type: "CDI",
      location: "Remote Total",
      salary: "32k€ + Variable",
      match: 87,
      why: ["Correspond à ta recherche de stabilité", "Environnement Start-up (tes préférences)", "Aucune contrainte géographique"],
      whyNot: ["Poste 100% derrière un écran", "Processus de recrutement long (4 étapes)"],
      environment: "100% Télétravail"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar IA Config */}
        <aside className="w-full lg:w-80 bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm h-fit sticky top-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><SlidersHorizontal size={18}/></div>
            <h2 className="font-bold text-lg">Réglage de l'IA</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Pondération du Matching</label>
              <div className="space-y-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2">🧠 Compétences</span> <span>30%</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2">🎯 Projet de vie</span> <span>20%</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2">💼 Expérience</span> <span>15%</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2">📍 Localisation</span> <span>10%</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2">🌿 Environnement</span> <span>25%</span></div>
              </div>
            </div>
            <button className="w-full py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300">Ajuster mes critères</button>
          </div>
        </aside>

        {/* Main Feed: Le Top du Jour */}
        <main className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-black mb-2 flex items-center gap-2">Ton Top du Jour <Sparkles className="text-blue-500"/></h1>
            <p className="text-slate-500 font-medium">L'IA a analysé 1,405 offres. Voici les 5 chemins qui te correspondent vraiment aujourd'hui.</p>
          </div>

          <div className="space-y-6">
            {recommendations.map((job) => (
              <div key={job.id} className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-lg text-sm font-black ${job.match >= 90 ? 'bg-emerald-500/10 text-emerald-600' : 'bg-blue-500/10 text-blue-600'}`}>
                        {job.match}% MATCH
                      </span>
                      <span className="text-sm font-bold text-slate-400">{job.type}</span>
                    </div>
                    <h3 className="text-2xl font-black">{job.title}</h3>
                    <p className="font-semibold text-slate-500 mt-1 flex items-center gap-2"><Briefcase size={16}/> {job.company} • <MapPin size={16}/> {job.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-blue-600">{job.salary}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase mt-1">{job.environment}</div>
                  </div>
                </div>

                {/* Explication IA Transparente */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-2xl">
                    <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center gap-2">Pourquoi cette offre ?</h4>
                    <ul className="space-y-2">
                      {job.why.map((reason, i) => (
                        <li key={i} className="text-sm text-emerald-600 dark:text-emerald-300 flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0"/> {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl">
                    <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">Pourquoi PAS cette offre ?</h4>
                    <ul className="space-y-2">
                      {job.whyNot.map((reason, i) => (
                        <li key={i} className="text-sm text-amber-600 dark:text-amber-300 flex items-start gap-2">
                          <AlertTriangle size={16} className="mt-0.5 shrink-0"/> {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Machine Learning Feedback Actions */}
                <div className="flex items-center gap-3 mt-6 pt-6">
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-md">
                    Candidature 1-Clic
                  </button>
                  <button className="px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 transition">
                    Sauvegarder
                  </button>
                  <button title="L'IA apprendra de ce refus" className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-red-500 rounded-xl transition">
                    <ThumbsDown size={20}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}