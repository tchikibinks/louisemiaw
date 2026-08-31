'use client';
import Link from 'next/link';
import { Globe, Plane, Calculator, MapPin, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function InternationalPage() {
  const [activeTab, setActiveTab] = useState('all');

  const opportunities = [
    {
      id: 1,
      title: "VIE Business Developer",
      company: "Ubisoft",
      country: "Japon",
      city: "Tokyo",
      duration: "12 à 24 mois",
      type: "VIE",
      salary: 2800, // Indemnité mensuelle nette
      costs: { housing: 900, food: 600, transport: 100, flight: 1200 },
      perks: ["Vol aller-retour payé", "Accompagnement Visa"],
    },
    {
      id: 2,
      title: "Job d'été en Start-up (Service Client FR)",
      company: "Typeform",
      country: "Espagne",
      city: "Barcelone",
      duration: "2 à 3 mois",
      type: "Saisonnier",
      salary: 1600,
      costs: { housing: 650, food: 350, transport: 40, flight: 150 },
      perks: ["Colocation d'entreprise", "Bureaux à 10min de la plage"],
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-full shadow-md">Mon Moteur</Link>
        </header>

        <div className="mb-12">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold inline-flex items-center gap-2 mb-4">
            <Globe size={14}/> S'exporter sans se ruiner
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Pars quelques mois ou plusieurs années.</h1>
          <p className="text-slate-500 max-w-2xl text-lg font-medium">LOUISemiaw calcule ton budget réel de départ pour t'éviter les mauvaises surprises.</p>
        </div>

        {/* Filtres NLP simplifiés */}
        <div className="flex flex-wrap gap-3 mb-10">
          <button className="px-5 py-3 rounded-full bg-indigo-600 text-white font-bold text-sm shadow-md">Toutes les expériences</button>
          <button className="px-5 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold text-sm text-slate-600 dark:text-slate-400">"Je veux partir 2 mois cet été"</button>
          <button className="px-5 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold text-sm text-slate-600 dark:text-slate-400">"Je veux une vraie première expérience (VIE)"</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {opportunities.map((opp) => {
            const totalCosts = opp.costs.housing + opp.costs.food + opp.costs.transport;
            const remaining = opp.salary - totalCosts;

            return (
              <div key={opp.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-black uppercase tracking-wider">{opp.type} • {opp.duration}</span>
                    <span className="flex items-center gap-1 text-slate-500 font-bold text-sm"><MapPin size={16}/> {opp.city}, {opp.country}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-2">{opp.title}</h3>
                  <p className="font-bold text-slate-500 mb-6">{opp.company}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {opp.perks.map((perk, i) => (
                      <span key={i} className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 size={12}/> {perk}
                      </span>
                    ))}
                  </div>

                  {/* Le Calculateur de Départ Intégré */}
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
                    <h4 className="text-sm font-black flex items-center gap-2 mb-4"><Calculator size={18}/> Calculateur de Budget IA (Estimatif)</h4>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Revenu Net Mensuel</span>
                        <span className="font-black text-indigo-600">+{opp.salary} €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Loyer estimé</span>
                        <span className="font-bold text-slate-900 dark:text-white">-{opp.costs.housing} €</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500 font-medium">Nourriture & Transports</span>
                        <span className="font-bold text-slate-900 dark:text-white">-{opp.costs.food + opp.costs.transport} €</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Reste à vivre (Loisirs/Epargne)</span>
                      <span className={`text-xl font-black ${remaining > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                        {remaining > 0 ? '+' : ''}{remaining} € / mois
                      </span>
                    </div>

                    <div className="mt-4 flex items-start gap-2 bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl">
                      <AlertCircle size={16} className="text-indigo-600 shrink-0 mt-0.5"/>
                      <p className="text-xs text-indigo-700 dark:text-indigo-300 font-medium">
                        Prévois environ <strong className="font-black">{opp.costs.flight}€</strong> en frais d'installation initiaux (Billet d'avion).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition shadow-lg flex items-center justify-center gap-2">
                    Préparer mon départ <Plane size={18}/>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}