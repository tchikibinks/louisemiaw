'use client';
import Link from 'next/link';
import { Search, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function AlternancePage() {
  const [degree, setDegree] = useState('BTS NDRC');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl mb-10 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold mb-4">
            <Sparkles size={14}/> Moteur de Recherche Inversé
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Trouve ton entreprise</h1>
          <p className="text-blue-100 max-w-2xl mb-8">
            Indique ton diplôme et découvre directement les entreprises qui recrutent dans ton secteur.
          </p>

          <div className="bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-2 max-w-2xl text-slate-800">
            <input 
              type="text" 
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              placeholder="Ex: BTS NDRC, BUT Info..." 
              className="px-4 py-3 outline-none font-bold flex-1"
            />
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-extrabold hover:bg-slate-800 transition">
              Rechercher
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-black mb-6">Offres recommandées pour <span className="text-blue-600">{degree}</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm relative">
            <div className="absolute top-6 right-6 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-black text-xs">
              95% MATCH 🐱
            </div>
            <h3 className="text-xl font-bold mb-1">Alternant Commercial</h3>
            <p className="text-sm text-slate-500 font-semibold mb-4">Décathlon — Tarbes (65)</p>
            
            <div className="bg-slate-50 p-3 rounded-xl mb-6 space-y-1">
              <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500"/> Compatible avec ton diplôme</div>
              <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-500"/> Débutant accepté</div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-extrabold text-slate-900">1 150 € / mois</span>
              <Link href="/candidatures" className="px-5 py-2.5 bg-blue-600 text-white font-extrabold rounded-xl text-sm hover:bg-blue-700">Postuler</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}