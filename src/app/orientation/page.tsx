'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Compass, Users, Laptop, Wrench, ArrowRight } from 'lucide-react';

export default function OrientationFlow() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<string[]>([]);

  const handleSelect = async (trait: string) => {
    const newPrefs = [...preferences, trait];
    setPreferences(newPrefs);
    
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Simule l'envoi à l'API (à connecter avec un vrai système d'auth type NextAuth/Clerk)
      await fetch('/api/profile', {
        method: 'POST',
        body: JSON.stringify({ userId: "test-user-id", preferences: newPrefs, educationLevel: "Bac" })
      });
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="mb-12 text-center">
          <Compass className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-black mb-2">Construisons ton profil IA</h1>
          <p className="text-slate-500 font-bold">Étape {step} sur 2</p>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-8">Dans ton futur quotidien, tu préfères...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => handleSelect('contact')} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 shadow-sm transition-all text-left flex items-center gap-4">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-xl"><Users size={28}/></div>
                <span className="font-bold text-lg">Échanger, conseiller et convaincre</span>
              </button>
              <button onClick={() => handleSelect('tech')} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 shadow-sm transition-all text-left flex items-center gap-4">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-xl"><Laptop size={28}/></div>
                <span className="font-bold text-lg">Analyser, coder et résoudre des problèmes</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-center mb-8">Quel est ton objectif principal ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => handleSelect('quick_job')} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 shadow-sm transition-all text-left flex items-center gap-4">
                <span className="font-bold text-lg">Entrer rapidement sur le marché du travail</span>
              </button>
              <button onClick={() => handleSelect('long_studies')} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 shadow-sm transition-all text-left flex items-center gap-4">
                <span className="font-bold text-lg">Faire des études longues pour viser haut</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}