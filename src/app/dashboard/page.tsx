'use client';
import Link from 'next/link';
import { User, Target, Compass, Briefcase, MapPin, CheckCircle, Clock, Trophy, Heart, ShieldAlert, ArrowRight, UploadCloud } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col md:flex-row font-sans transition-colors">
      
      {/* Sidebar SaaS */}
      <aside className="w-full md:w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col md:min-h-screen sticky top-0 z-10">
        <Link href="/" className="font-black text-2xl mb-10 flex items-center gap-2">
          🐱 louisemiaw<span className="text-blue-600">.</span>
        </Link>
        <nav className="space-y-3 flex-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-md">
            <User size={18}/> Mon Espace Profil
          </Link>
          <Link href="/explorer" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold text-sm transition">
            <Target size={18}/> Recommandations IA
          </Link>
          <Link href="/candidatures" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold text-sm transition">
            <Briefcase size={18}/> Pipeline Candidatures
          </Link>
          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-sm transition hover:scale-[1.02]">
              <UploadCloud size={18}/> Importer un nouveau CV
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Bonjour, Louise 👋</h1>
            <p className="text-slate-500 font-medium mt-2">Voici l'état de ton moteur d'opportunités aujourd'hui.</p>
          </div>
          
          {/* Gamification : Profil Complété */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 min-w-[250px]">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center font-black text-sm">
              <Trophy size={20}/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>Profil complété</span>
                <span className="text-blue-600">85%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </header>

        {/* Le Profil Multi-dimensionnel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Ce que je veux (Ambitions) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 mb-4">
              <Target size={20} className="shrink-0"/>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Mes Ambitions</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold">Alternance Marketing</span>
              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold">Évolution rapide</span>
              <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold">Management</span>
            </div>
          </div>

          {/* Mon environnement idéal */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <Heart size={20} className="shrink-0"/>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Environnement Idéal</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-bold">Télétravail Partiel</span>
              <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-bold">Équipe Jeune</span>
              <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs font-bold">Autonomie</span>
            </div>
          </div>

          {/* Mes Contraintes */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-rose-600 mb-4">
              <ShieldAlert size={20} className="shrink-0"/>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Mes Contraintes</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Salaire minimum</span>
                <span className="font-bold text-slate-900 dark:text-white">1 100 € net</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Distance max</span>
                <span className="font-bold text-slate-900 dark:text-white">30 minutes</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 font-medium">Permis B</span>
                <span className="font-bold text-rose-600">Non véhiculé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline de Candidatures Visuel */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black">Pipeline d'Opportunités</h2>
            <Link href="/explorer" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">Découvrir plus <ArrowRight size={14}/></Link>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-6 shadow-sm overflow-x-auto">
            <div className="flex gap-4 min-w-[700px]">
              {/* Colonne 1 : À Postuler */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex justify-between">À Postuler <span className="bg-slate-200 dark:bg-slate-700 px-2 rounded-full text-slate-600 dark:text-slate-300">2</span></h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-blue-500">
                    <h5 className="font-bold text-sm">Assistant Marketing</h5>
                    <p className="text-xs text-slate-500 mt-1">L'Oréal • Paris</p>
                    <div className="mt-3 text-xs font-bold text-blue-600">Match 91%</div>
                  </div>
                </div>
              </div>

              {/* Colonne 2 : Envoyé */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex justify-between">Envoyé <span className="bg-slate-200 dark:bg-slate-700 px-2 rounded-full text-slate-600 dark:text-slate-300">1</span></h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-amber-500">
                    <h5 className="font-bold text-sm">Business Developer</h5>
                    <p className="text-xs text-slate-500 mt-1">Swile • Remote</p>
                    <div className="mt-3 text-xs font-medium text-slate-400 flex items-center gap-1"><Clock size={12}/> Envoyé il y a 2j</div>
                  </div>
                </div>
              </div>

              {/* Colonne 3 : Entretien */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex justify-between">Entretiens <span className="bg-slate-200 dark:bg-slate-700 px-2 rounded-full text-slate-600 dark:text-slate-300">1</span></h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 border-l-4 border-l-emerald-500">
                    <h5 className="font-bold text-sm">Growth Hacker</h5>
                    <p className="text-xs text-slate-500 mt-1">TechNova • Toulouse</p>
                    <button className="mt-3 w-full py-1.5 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-lg border border-emerald-200 dark:border-emerald-800">Préparer l'entretien IA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}