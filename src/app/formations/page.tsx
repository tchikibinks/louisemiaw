'use client';
import Link from 'next/link';
import { BookOpen, ArrowRight, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

type Formation = { id: string; title: string; level: string; possibleCareers: string[] };

export default function FormationsPage() {
  const [formations, setFormations] = useState<Formation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Utilise des données simulées si la DB n'est pas encore remplie
    setFormations([
      { id: "1", title: "BTS NDRC", level: "Bac+2", possibleCareers: ["Commercial Terrain", "Business Developer"] },
      { id: "2", title: "BUT Informatique", level: "Bac+3", possibleCareers: ["Développeur Web", "Technicien Réseau"] }
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-4">Études & Formations</h1>
          <p className="text-slate-500 text-lg">Découvre les diplômes et les parcours qui mènent à tes objectifs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map(f => (
            <div key={f.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{f.level}</span>
              <h2 className="text-2xl font-black mt-4 mb-2">{f.title}</h2>
              
              <div className="mt-6 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2"><TrendingUp size={16}/> Que faire après ?</h3>
                <div className="flex flex-wrap gap-2">
                  {f.possibleCareers.map(career => (
                    <span key={career} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold">{career}</span>
                  ))}
                </div>
              </div>

              <Link href={`/formations/${f.id}`} className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition">
                Voir le parcours complet <ArrowRight size={18}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}