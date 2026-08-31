'use client';
import Link from 'next/link';
import { Search, MapPin, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function AlternancePage() {
  const [search, setSearch] = useState('');
  
  const offers = [
    { title: "Développeur Fullstack React/Next.js", company: "TechNova", location: "Paris / Remote", type: "Alternance (1 ou 2 ans)", stipend: "1 250 € / mois", tag: "Tech" },
    { title: "Assistant Marketing Digital & Growth", company: "ScaleUp Agency", location: "Lyon", type: "Alternance", stipend: "1 100 € / mois", tag: "Marketing" },
    { title: "Chargé de Recrutement & RH", company: "PeopleFirst", location: "Toulouse", type: "Alternance", stipend: "1 050 € / mois", tag: "RH" },
    { title: "Product Manager Junior", company: "Stellar App", location: "Bordeaux", type: "Alternance", stipend: "1 300 € / mois", tag: "Produit" },
  ];

  const filtered = offers.filter(o => o.title.toLowerCase().includes(search.toLowerCase()) || o.location.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition">Accueil</Link>
        </header>

        <div className="mb-10 text-center md:text-left">
          <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold">🎯 Alternance 2026-2027</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Trouve ton contrat pro ou ton apprentissage</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">Des centaines d'entreprises partenaires qui recrutent de vrais talents sans blabla.</p>
        </div>

        {/* Barre de recherche dynamique */}
        <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 mb-10 flex items-center gap-3">
          <Search className="text-slate-400 ml-2" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par poste ou ville (ex: Paris, Marketing...)" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white"
          />
        </div>

        {/* Liste des offres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((offer, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 transition shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold">{offer.tag}</span>
                  <span className="font-black text-blue-600 dark:text-blue-400 text-sm">{offer.stipend}</span>
                </div>
                <h3 className="font-bold text-xl mb-1">{offer.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-medium">{offer.company} • {offer.location}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400">{offer.type}</span>
                <Link href="/projet" className="px-4 py-2 bg-slate-900 dark:bg-blue-600 text-white text-xs font-bold rounded-xl hover:opacity-90 transition flex items-center gap-1">
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