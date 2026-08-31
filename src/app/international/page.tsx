'use client';
import Link from 'next/link';
import { Globe, Plane, Home, ArrowRight, Compass } from 'lucide-react';
import { useState } from 'react';

export default function InternationalPage() {
  const [search, setSearch] = useState('');

  const destinations = [
    { title: "Stage Tech & Logement inclus", city: "Dublin, Irlande", company: "Stripe European HQ", salary: "1 900 € / mois", perk: "Colocation d'entreprise offerte" },
    { title: "Assistant Marketing Bilingue", city: "Barcelone, Espagne", company: "Typeform", salary: "1 600 € / mois", perk: "Soleil 300j/an + Beach office" },
    { title: "Job de Rêve PVT / Jeune Diplômé", city: "Montréal, Canada", company: "Ubisoft Montréal", salary: "45k $ CAD", perk: "Accompagnement visa complet" },
    { title: "Stage Business Development", city: "Tokyo, Japon", company: "Rakuten Global", salary: "180 000 ¥", perk: "Immersion culturelle totale" },
  ];

  const filtered = destinations.filter(d => d.city.toLowerCase().includes(search.toLowerCase()) || d.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="mb-10">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold inline-flex items-center gap-1">
            <Compass size={14}/> Expériences hors frontières
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Pars bosser à l'étranger sans galérer pour le logement.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Des packages complets avec aide à l'installation, visas simplifiés et salaires adaptés au coût de la vie.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Globe className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par pays ou ville (ex: Dublin, Canada...)" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((dest, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-bold">{dest.city}</span>
                  <span className="font-black text-slate-900 dark:text-white text-base">{dest.salary}</span>
                </div>
                <h3 className="font-bold text-2xl mb-2 group-hover:text-indigo-500 transition">{dest.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold">{dest.company}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 mb-6">
                  <Home size={14} className="text-indigo-500"/> {dest.perk}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Link href="/projet" className="px-5 py-2.5 bg-slate-900 dark:bg-indigo-600 text-white text-xs font-bold rounded-xl hover:opacity-95 transition flex items-center gap-1.5 shadow-md">
                  Découvrir le package <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}