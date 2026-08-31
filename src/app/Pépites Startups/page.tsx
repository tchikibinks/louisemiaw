'use client';
import Link from 'next/link';
import { Sparkles, Flame, Heart, ExternalLink, ShieldCheck } from 'lucide-react';

export default function StartupsPage() {
  const startups = [
    { name: "Mistral AI", sector: "Intelligence Artificielle", perk: "PC de boss + actions gratuites", vibe: "Elite Tech", link: "https://mistral.ai/careers/" },
    { name: "Swile", sector: "FinTech / Avantages salariés", perk: "Semaine de 4 jours + Remote total", vibe: "Hyper-Growth", link: "https://swile.co/fr/carrieres" },
    { name: "Back Market", sector: "GreenTech / E-commerce", perk: "Remboursement matériel éco-responsable", vibe: "Impact Positif", link: "https://www.backmarket.fr/fr-fr/jobs" },
    { name: "Qonto", sector: "Neobanque Pro", perk: "Bureaux grand luxe au coeur de Paris", vibe: "Scale-up", link: "https://qonto.com/fr/carrieres" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="mb-10 text-center md:text-left">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Flame size={14}/> Top Startups & Licornes 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Viens bosser là où ça bouge vraiment.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Les entreprises les plus innovantes qui recrutent des jeunes talents sans langue de bois.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {startups.map((st, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-rose-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 rounded-full text-xs font-bold">{st.vibe}</span>
                  <span className="text-xs font-bold text-slate-400">{st.sector}</span>
                </div>
                <h3 className="font-bold text-2xl mb-2 group-hover:text-rose-500 transition">{st.name}</h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 mb-6">
                  <ShieldCheck size={14} className="text-rose-500"/> Avantage : {st.perk}
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <a 
                  href={st.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 dark:bg-rose-600 hover:opacity-90 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-md"
                >
                  Voir les postes ouverts <ExternalLink size={13}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}