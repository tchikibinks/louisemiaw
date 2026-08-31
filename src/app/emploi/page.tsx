'use client';
import Link from 'next/link';
import { Search, ArrowRight, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function EmploiPage() {
  const [search, setSearch] = useState('');

  const jobs = [
    { title: "Junior Product Manager", company: "Blablacar", location: "Paris / Hybride", contract: "CDI", salary: "42k - 48k €", perk: "RTT + 2 jours remote" },
    { title: "Growth Hacker Junior", company: "Swile", location: "Montpellier / Remote", contract: "CDI", salary: "38k - 44k €", perk: "Carte swile max + actions" },
    { title: "Account Executive Junior", company: "Doctolib", location: "Nantes", contract: "CDI", salary: "40k € fixe + variable", perk: "Formation intensive" },
    { title: "Développeur Front-End React", company: "Back Market", location: "Bordeaux / Remote", contract: "CDI", salary: "45k - 52k €", perk: "Matos Apple dernier cri" },
  ];

  const filtered = jobs.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="mb-10">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold inline-flex items-center gap-1">
            <Zap size={14}/> Premiers postes post-études (CDI qui paient bien)
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Ton premier vrai CDI sans galérer 3 mois.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Des offres transparentes avec salaires affichés. Pas de "rémunération selon profil" louche.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher un poste, une techno, une ville..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold">{job.contract}</span>
                  <span className="font-black text-slate-900 dark:text-white text-base">{job.salary}</span>
                </div>
                <h3 className="font-bold text-2xl mb-2 group-hover:text-blue-500 transition">{job.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold">{job.company} • {job.location}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 mb-6">
                  <ShieldCheck size={14} className="text-emerald-500"/> Avantage : {job.perk}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <Link href="/projet" className="px-5 py-2.5 bg-slate-900 dark:bg-blue-600 text-white text-xs font-bold rounded-xl hover:opacity-95 transition flex items-center gap-1.5 shadow-md">
                  Postuler direct <ArrowRight size={14}/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}