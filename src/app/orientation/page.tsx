'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function OrientationPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-2xl w-full border border-slate-100">
        <h1 className="text-3xl font-black text-slate-900 mb-3">Tu ne sais pas quoi faire ?</h1>
        <p className="text-slate-500 text-sm mb-8">Découvre les domaines qui te correspondent vraiment.</p>

        {step === 1 && (
          <div className="space-y-3 mb-8">
            <p className="font-bold text-slate-800 text-sm mb-2">Quel environnement de travail préfères-tu ?</p>
            {["Sur le terrain / En mouvement", "En bureau / Sur ordinateur", "En contact avec les clients", "En extérieur / Sport"].map((opt, i) => (
              <button key={i} onClick={() => setStep(2)} className="w-full p-4 rounded-2xl border-2 border-slate-100 text-left font-extrabold hover:border-indigo-600 hover:bg-indigo-50 transition flex justify-between">
                {opt} <ArrowRight size={18} className="text-slate-400"/>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="bg-indigo-50 p-6 rounded-2xl mb-8">
            <h3 className="font-black text-indigo-900 text-lg mb-2">Tes 3 pistes recommandées 🐱</h3>
            <ul className="space-y-2 text-sm font-semibold text-indigo-800">
              <li>• Commerce & Vente (BTS NDRC)</li>
              <li>• Management du Sport (STAPS)</li>
              <li>• Hôtellerie Internationale</li>
            </ul>
          </div>
        )}
        <Link href="/" className="text-slate-500 font-bold text-sm hover:text-black">Retour à l'accueil</Link>
      </div>
    </div>
  );
}