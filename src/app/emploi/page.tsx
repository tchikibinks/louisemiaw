'use client';
import Link from 'next/link';
import { Search, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function EmploiPage() {
  const [search, setSearch] = useState('');

  const jobs = [
    { title: "Junior Product Manager", company: "Blablacar", location: "Paris", salary: "42k - 48k €", contract: "CDI", link: "https://carers.blablacar.com/" },
    { title: "Growth Hacker Junior", company: "Swile", location: "Montpellier", salary: "38k - 44k €", contract: "CDI", link: "https://swile.co/fr/carrieres" },
    { title: "Account Executive Junior", company: "Doctolib", location: "Nantes", salary: "40k € + variable", contract: "CDI", link: "https://about.doctolib.fr/carrieres/" },
    { title: "Développeur Front-End React", company: "Back Market", location: "Bordeaux", salary: "45k - 52k €", contract: "CDI", link: "https://www.backmarket.fr/fr-fr/jobs" },
    { title: "Data Scientist Junior", company: "Criteo", location: "Paris", salary: "48k - 55k €", contract: "CDI", link: "https://www.criteo.com/careers/" },
    { title: "Sales Development Representative", company: "Aircall", location: "Paris", salary: "38k € + bonus", contract: "CDI", link: "https://aircall.io/careers/" },
    { title: "Junior Brand Manager", company: "Danone", location: "Rueil-Malmaison", salary: "41k - 46k €", contract: "CDI", link: "https://corporate.danone.com/careers.html" },
    { title: "Cybersecurity Engineer", company: "Thales", location: "Rennes", salary: "44k - 50k €", contract: "CDI", link: "https://www.thalesgroup.com/fr/carrieres" },
    { title: "UX Writer Junior", company: "Doctorlib", location: "Paris", salary: "39k - 43k €", contract: "CDI", link: "https://about.doctolib.fr/carrieres/" },
    { title: "Junior Supply Chain Analyst", company: "L'Oréal", location: "Strasbourg", salary: "40k - 45k €", contract: "CDI", link: "https://careers.loreal.com/" },
    { title: "Fullstack Software Engineer", company: "OVHcloud", location: "Roubaix", salary: "42k - 47k €", contract: "CDI", link: "https://careers.ovhcloud.com/" },
    { title: "Financial Analyst Junior", company: "TotalEnergies", location: "Pau", salary: "43k - 48k €", contract: "CDI", link: "https://totalenergies.com/fr/carrieres" },
  ];

  const filtered = jobs.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <div className="flex gap-3">
            <Link href="/projet" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full">Mon Profil AI</Link>
            <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
          </div>
        </header>

        <div className="mb-10 text-center md:text-left">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Zap size={14}/> 12 CDI Juniors à forte rémunération
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Ton premier CDI sans compromis.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Salaires transparents affichés et avantages réels inclus.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par poste ou entreprise..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((job, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold">{job.contract}</span>
                  <span className="font-black text-slate-900 dark:text-white text-sm">{job.salary}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-blue-500 transition line-clamp-1">{job.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold">{job.company} • {job.location}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <a 
                  href={job.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-md"
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