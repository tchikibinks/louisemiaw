'use client';
import Link from 'next/link';
import { Sparkles, Calculator, Euro, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function SimulateurPage() {
  const [contrat, setContrat] = useState('alternance');
  const [niveau, setNiveau] = useState('bac+3');
  const [age, setAge] = useState(21);

  // Calcul estimatif du salaire brut/net légal en alternance / premier emploi
  const getSalaire = () => {
    if (contrat === 'alternance') {
      let base = 1766.92; // SMIC 2026
      let pourcentage = age >= 26 ? 100 : age >= 21 ? 57 : 53;
      if (niveau === 'bac+4' || niveau === 'bac+5') pourcentage += 15;
      const brut = Math.round((base * pourcentage) / 100);
      return { brut, net: Math.round(brut * 0.79), type: 'Mensuel Net estimé' };
    } else {
      let baseAnnuelle = niveau === 'bac+5' ? 42000 : niveau === 'bac+3' ? 36000 : 31000;
      return { brut: baseAnnuelle, net: Math.round(baseAnnuelle * 0.78), type: 'Annuel Net estimé' };
    }
  };

  const resultat = getSalaire();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full">Accueil</Link>
        </header>

        <div className="text-center mb-10">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Calculator size={14}/> Outil SaaS Exclusif
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-2 tracking-tight">Simulateur de Rémunération Précis</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Découvre exactement ce que tu vas toucher selon ton âge, ton diplôme et ton contrat.</p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Type de Contrat</label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setContrat('alternance')}
                  className={`py-3 rounded-2xl font-bold text-sm transition ${contrat === 'alternance' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                >
                  Alternance
                </button>
                <button 
                  onClick={() => setContrat('cdi')}
                  className={`py-3 rounded-2xl font-bold text-sm transition ${contrat === 'cdi' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}
                >
                  CDI Junior
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Ton Niveau d'Études</label>
              <select 
                value={niveau} 
                onChange={(e) => setNiveau(e.target.value)}
                className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl outline-none font-semibold border border-slate-200 dark:border-slate-700"
              >
                <option value="bac+2">Bac +2 (BTS / DUT)</option>
                <option value="bac+3">Bac +3 (Bachelor / Licence)</option>
                <option value="bac+5">Bac +5 (Master / École d'Ingé / Commerce)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Ton Âge : {age} ans</label>
              <input 
                type="range" 
                min="18" 
                max="35" 
                value={age} 
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Résultat en direct */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 rounded-[2rem] shadow-xl text-center flex flex-col justify-between">
            <div>
              <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Estimation Calculée par IA</div>
              <div className="text-5xl font-black my-4">{resultat.net.toLocaleString()} €</div>
              <div className="text-sm font-semibold text-blue-100">{resultat.type}</div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 text-left space-y-2">
              <div className="text-xs flex items-center gap-2 font-medium"><CheckCircle size={14} className="text-emerald-400"/> Exonération totale des charges salariales</div>
              <div className="text-xs flex items-center gap-2 font-medium"><CheckCircle size={14} className="text-emerald-400"/> Avantages entreprise (Transport + Titres-resto)</div>
            </div>
            <Link href="/alternance" className="mt-6 w-full py-3.5 bg-white text-blue-900 font-extrabold rounded-xl text-xs hover:bg-blue-50 transition shadow-md flex items-center justify-center gap-1.5">
              Trouver une offre à ce tarif <ArrowRight size={14}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}