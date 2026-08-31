'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Sparkles, CheckCircle, ArrowRight, User } from 'lucide-react';

export default function ProjetPage() {
  const [formData, setFormData] = useState({ name: '', domain: '', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.domain) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 flex flex-col justify-between font-sans transition-colors">
      <div className="max-w-2xl mx-auto w-full pt-4">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full hover:opacity-80 transition">Accueil</Link>
        </header>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs font-bold mb-4">
            <Sparkles size={14}/> Matching Intelligent 🍣
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Génère ton profil pro instantané</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 font-medium">L'algorithme analyse ton profil pour l'aligner directement avec les meilleures opportunités du marché.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ton Prénom & Nom</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Louise Martin" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700 focus:border-blue-500 transition" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ton Domaine ou Poste recherché</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ex: Alternance Marketing, Stage Dev React..." 
                  value={formData.domain}
                  onChange={(e) => setFormData({...formData, domain: e.target.value})}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700 focus:border-blue-500 transition" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ville souhaitée</label>
                <input 
                  type="text" 
                  placeholder="Ex: Paris, Lyon, Remote..." 
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700 focus:border-blue-500 transition" 
                />
              </div>
              <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl transition shadow-lg flex items-center justify-center gap-2">
                Activer mon profil et voir les offres <ArrowRight size={18}/>
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={36} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-1">Félicitations, {formData.name} !</h3>
                <p className="text-slate-500 text-sm">Ton profil pour <strong className="text-slate-900 dark:text-white">{formData.domain}</strong> ({formData.city || 'partout'}) est désormais actif dans le vivier.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-left border border-slate-100 dark:border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Statut du matching</div>
                <div className="text-sm font-semibold flex items-center justify-between">
                  <span>Entreprises compatibles :</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">14 opportunités détectées</span>
                </div>
              </div>
              <Link href="/alternance" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-slate-900 dark:bg-slate-800 text-white font-bold rounded-2xl hover:opacity-95 transition">
                Explorer les offres correspondantes <ArrowRight size={16}/>
              </Link>
            </div>
          )}
        </div>
      </div>

      <footer className="py-6 text-center text-xs text-slate-400 font-medium">
        louisemiaw. © 2026 — Fait par Bilal à Tarbes
      </footer>
    </div>
  );
}