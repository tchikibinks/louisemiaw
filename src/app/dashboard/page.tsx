'use client';
import Link from 'next/link';
import { Sparkles, Briefcase, FileText, CheckCircle2, TrendingUp, ArrowRight, Bell, Settings, LogOut } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex font-sans transition-colors">
      
      {/* Sidebar SaaS */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 p-6 hidden md:flex flex-col justify-between bg-white dark:bg-slate-900">
        <div>
          <Link href="/" className="font-black text-2xl flex items-center gap-2 mb-10">
            🐱 louisemiaw<span className="text-blue-600">.</span>
          </Link>
          <nav className="space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-sm">
              <Briefcase size={18}/> Tableau de bord
            </Link>
            <Link href="/alternance" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold text-sm transition">
              <Sparkles size={18}/> Vivier d'Offres AI
            </Link>
            <Link href="/cv-builder" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold text-sm transition">
              <FileText size={18}/> CV & Lettre AI
            </Link>
          </nav>
        </div>
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-red-500 font-bold text-sm hover:bg-red-50 dark:hover:bg-red-950/30 rounded-2xl transition">
            <LogOut size={18}/> Déconnexion
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Espace Candidat SaaS</span>
            <h1 className="text-3xl font-black mt-1">Bonjour, Louise 👋</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm shadow-md">
              LM
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Score de Profil AI</div>
            <div className="text-4xl font-black text-blue-600 dark:text-blue-400">96%</div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Optimisé pour les postes tech & marketing</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Candidatures en cours</div>
            <div className="text-4xl font-black">7</div>
            <p className="text-xs text-emerald-500 mt-2 font-semibold">3 entretiens décrochés cette semaine</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="text-slate-400 text-xs font-bold uppercase mb-2">Offres compatibles</div>
            <div className="text-4xl font-black text-purple-600 dark:text-purple-400">42</div>
            <p className="text-xs text-slate-500 mt-2 font-medium">Prêtes à être postulées en 1 clic</p>
          </div>
        </div>

        {/* Section Recommandations & Candidatures */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
              <span>Mes candidatures actives</span>
              <Link href="/alternance" className="text-xs font-bold text-blue-600 hover:underline">Voir tout</Link>
            </h3>
            <div className="space-y-4">
              {[
                { company: "Qonto", role: "Développeur Fullstack Alternance", status: "Entretien Planifié", color: "text-emerald-500 bg-emerald-500/10" },
                { company: "Back Market", role: "Growth Marketing Alternance", status: "CV Vu par le recruteur", color: "text-blue-500 bg-blue-500/10" },
                { company: "Blablacar", role: "Product Manager Junior", status: "En attente", color: "text-amber-500 bg-amber-500/10" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-between border border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="font-bold text-base">{item.role}</h4>
                    <p className="text-xs text-slate-500 font-medium">{item.company}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold inline-block mb-4">Générateur CV SaaS</span>
              <h3 className="text-2xl font-black mb-3">Besoin d'un CV sur-mesure ?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">Notre IA réécrit ton CV en fonction de l'offre visée pour passer tous les filtres ATS des entreprises.</p>
            </div>
            <Link href="/cv-builder" className="w-full py-4 bg-white text-blue-900 font-extrabold rounded-2xl text-center shadow-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
              Lancer l'IA <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}