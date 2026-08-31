'use client';
import Link from 'next/link';
import { Sparkles, FileText, Download } from 'lucide-react';
import { useState } from 'react';

export default function CvBuilderPage() {
  const [jobTitle, setJobTitle] = useState('');
  const [generated, setGenerated] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="text-center mb-10">
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 text-xs font-bold">✨ Générateur IA</span>
          <h1 className="text-4xl font-black mt-3 mb-2">Crée ton CV & ta Lettre en 30 secondes</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">L'IA analyse l'offre visée et génère un contenu percutant.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Poste visé (ex: Alternance Développeur chez Google)</label>
            <input 
              type="text" 
              placeholder="Ex: Alternance Marketing Digital" 
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700" 
            />
          </div>

          <button 
            onClick={() => setGenerated(true)} 
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-extrabold rounded-2xl transition shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles size={18}/> Générer mon pack CV & Lettre de motivation
          </button>

          {generated && (
            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4 animate-fade-in">
              <h3 className="font-bold text-lg flex items-center gap-2 text-emerald-500"><FileText size={20}/> Génération réussie pour : {jobTitle}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300">Votre lettre de motivation personnalisée et votre résumé de CV optimisé ATS ont été créés avec succès par l'intelligence artificielle.</p>
              <button className="px-6 py-3 bg-slate-900 dark:bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center gap-2">
                <Download size={16}/> Télécharger le PDF complet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}