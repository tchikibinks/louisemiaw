'use client';
import Link from 'next/link';

export default function CandidaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto pt-10">
        <h1 className="text-3xl font-black mb-2">Mon Suivi (ATS) 🐱</h1>
        <p className="text-slate-500 text-sm mb-8">Suis l'avancement de tes postulations.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border shadow-sm">
            <h3 className="font-extrabold text-blue-600 text-sm uppercase mb-4">Envoyées (1)</h3>
            <div className="p-4 bg-slate-50 rounded-2xl border"><div className="font-bold">Décathlon Tarbes</div></div>
          </div>
          <div className="bg-white p-6 rounded-3xl border shadow-sm">
            <h3 className="font-extrabold text-amber-600 text-sm uppercase mb-4">Entretiens Prévus (1)</h3>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100"><div className="font-bold text-amber-900">Hotel Barcelone</div></div>
          </div>
          <div className="bg-white p-6 rounded-3xl border shadow-sm">
            <h3 className="font-extrabold text-emerald-600 text-sm uppercase mb-4">Acceptées (0)</h3>
          </div>
        </div>
        <div className="mt-8"><Link href="/" className="text-slate-500 font-bold">Retour à l'accueil</Link></div>
      </div>
    </div>
  );
}