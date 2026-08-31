'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Wand2 } from 'lucide-react';

export default function CvBuilderPage() {
  const [loading, setLoading] = useState(false);
  const [letter, setLetter] = useState('');

  const generateLetter = () => {
    setLoading(true);
    setTimeout(() => {
      setLetter("Madame, Monsieur,\n\nActuellement à la recherche d'une opportunité, je vous adresse ma candidature. Motivé et rigoureux, je serais ravi d'intégrer votre équipe.\n\nCordialement.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 max-w-2xl w-full">
        <h1 className="text-3xl font-black mb-2">Générateur de Lettre IA 🍣</h1>
        <p className="text-slate-500 text-sm mb-8">Génère une lettre sur-mesure adaptée à l'offre en 1 clic.</p>
        
        <button onClick={generateLetter} className="w-full py-4 bg-blue-600 text-white font-extrabold rounded-2xl flex items-center justify-center gap-2 mb-6">
          <Wand2 size={18}/> {loading ? 'Génération...' : 'Générer ma lettre'}
        </button>

        {letter && <div className="bg-slate-50 p-6 rounded-2xl border text-sm font-serif whitespace-pre-line">{letter}</div>}
        
        <div className="mt-6 pt-4 border-t"><Link href="/" className="text-slate-500 font-bold text-sm">Retour</Link></div>
      </div>
    </div>
  );
}