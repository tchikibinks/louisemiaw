'use content';
import Link from 'next/link';
import { Globe, Plane, Home, ShieldCheck } from 'lucide-react';

export default function InternationalPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-xl">🌍 louisemiaw.</Link>
          <Link href="/" className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-full text-sm font-bold">Retour</Link>
        </header>

        <h1 className="text-4xl font-black mb-4">Pars vivre l'aventure à l'étranger ✈️</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl">Stages Erasmus+, PVT, ou jobs d'été avec pack logement inclus.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Plane className="text-blue-600 mb-4" size={28}/>
            <h3 className="font-bold text-lg mb-2">Stage à Dublin</h3>
            <p className="text-sm text-slate-500 mb-4">Entreprise tech + colocation fournie.</p>
            <span className="font-extrabold text-blue-600">Dès 3 mois</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Globe className="text-indigo-600 mb-4" size={28}/>
            <h3 className="font-bold text-lg mb-2">Job à Montréal</h3>
            <p className="text-sm text-slate-500 mb-4">Accompagnement PVT et visa inclus.</p>
            <span className="font-extrabold text-indigo-600">CDI / Mission</span>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Home className="text-emerald-600 mb-4" size={28}/>
            <h3 className="font-bold text-lg mb-2">Barcelone - Tech & Beach</h3>
            <p className="text-sm text-slate-500 mb-4">Service client francophone bilingue.</p>
            <span className="font-extrabold text-emerald-600">1 800 € / mois</span>
          </div>
        </div>
      </div>
    </div>
  );
}