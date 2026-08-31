'use client';
import Link from 'next/link';
import { Sparkles, BrainCircuit, Globe, Compass, ArrowRight, Sun, Moon, Map } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const [nlQuery, setNlQuery] = useState('');

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setIsDark(true);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col font-sans transition-colors duration-300 selection:bg-blue-500/30">
      
      {/* Header Premium */}
      <header className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-black tracking-tighter">
              louisemiaw<span className="text-blue-600">.</span>
            </span>
          </Link>
          
          <nav className="hidden lg:flex gap-8 font-semibold text-sm text-slate-500 dark:text-slate-400">
            <Link href="/explorer" className="hover:text-slate-900 dark:hover:text-white transition">Explorer</Link>
            <Link href="/international" className="hover:text-slate-900 dark:hover:text-white transition">International</Link>
            <Link href="/formations" className="hover:text-slate-900 dark:hover:text-white transition">Formations & Plan B</Link>
            <Link href="/entreprises" className="hover:text-slate-900 dark:hover:text-white transition">Entreprises</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link href="/dashboard" className="px-5 py-2.5 text-sm font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:scale-105 rounded-full shadow-lg transition-transform flex items-center gap-2">
              <BrainCircuit size={16}/> Mon Moteur IA
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-32 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-8">
          <Sparkles size={14} className="animate-pulse"/> L'IA qui comprend ton projet de vie
        </div>

        <h1 className="text-5xl sm:text-7xl font-black tracking-tight max-w-5xl mb-6 text-center leading-[1.05]">
          Tu ne cherches pas juste un job. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Tu cherches la suite.
          </span>
        </h1>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl text-center mb-12 font-medium">
          LOUISemiaw analyse ton profil, tes envies et tes contraintes pour trouver les opportunités et les chemins qui ont <strong className="text-slate-900 dark:text-white">réellement du sens</strong> pour toi.
        </p>

        {/* NLP Search Bar */}
        <div className="w-full max-w-3xl bg-white dark:bg-slate-900 p-3 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-2 transition-all focus-within:ring-4 ring-blue-500/20">
          <div className="flex-1 flex items-center px-6 py-4">
            <input 
              type="text" 
              value={nlQuery}
              onChange={(e) => setNlQuery(e.target.value)}
              placeholder="Ex: J'ai un Bac Pro Commerce, je veux gagner ma vie mais j'aimerais voyager..." 
              className="bg-transparent outline-none w-full font-medium text-slate-900 dark:text-white placeholder-slate-400" 
            />
          </div>
          <Link href={`/explorer?q=${encodeURIComponent(nlQuery)}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 whitespace-nowrap">
            Analyser ma demande <ArrowRight size={18}/>
          </Link>
        </div>

        {/* NLP Suggestions */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-2xl text-xs font-semibold">
          <button onClick={() => setNlQuery("Je veux une alternance en marketing près de Tarbes sans télétravail")} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">"Alternance marketing près de Tarbes..."</button>
          <button onClick={() => setNlQuery("Je veux travailler 2 mois en Espagne cet été")} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">"Travailler 2 mois en Espagne..."</button>
          <button onClick={() => setNlQuery("Je n'ai pas de diplôme mais je veux apprendre à coder")} className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition">"Apprendre à coder sans diplôme..."</button>
        </div>

        {/* Feature: Et si... */}
        <div className="mt-32 max-w-6xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Et si tu faisais autre chose ?</h2>
            <p className="text-slate-500 dark:text-slate-400">Explore des scénarios alternatifs basés sur ton profil.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6"><Compass size={24}/></div>
              <h3 className="text-xl font-bold mb-2">Si tu partais à l'étranger ?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Découvre les visas PVT, les emplois logés et les VIE accessibles avec ton niveau actuel.</p>
              <span className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Simuler un départ <ArrowRight size={16}/></span>
            </div>
            
            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><Map size={24}/></div>
              <h3 className="text-xl font-bold mb-2">Si tu faisais un Plan B ?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Tu n'as pas eu ton école ? Voici 5 formations courtes et métiers qui recrutent immédiatement.</p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Voir mes Plans B <ArrowRight size={16}/></span>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition-transform cursor-pointer group">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><BrainCircuit size={24}/></div>
              <h3 className="text-xl font-bold mb-2">Mon parcours sur 5 ans</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">L'IA génère ta roadmap : Diplômes ➔ 1er Job ➔ Évolution de carrière et salaires.</p>
              <span className="text-blue-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Construire mon parcours <ArrowRight size={16}/></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}