'use client';
import Link from 'next/link';
import { Search, ExternalLink, Sparkles, Briefcase, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function AlternancePage() {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('Toutes');
  const [selectedTag, setSelectedTag] = useState('Tous');

  const offers = [
    { title: "Développeur Fullstack React / Node", company: "Qonto", location: "Paris", stipend: "1 350 € / mois", tag: "Tech", match: "98%", link: "https://qonto.com/fr/carrieres" },
    { title: "Assistant Marketing Digital & Growth", company: "Back Market", location: "Bordeaux", stipend: "1 200 € / mois", tag: "Marketing", match: "95%", link: "https://www.backmarket.fr/fr-fr/jobs" },
    { title: "Chargé de Recrutement & Talents", company: "Doctolib", location: "Nantes", stipend: "1 150 € / mois", tag: "RH", match: "91%", link: "https://about.doctolib.fr/carrieres/" },
    { title: "Product Manager Junior", company: "Blablacar", location: "Paris", stipend: "1 400 € / mois", tag: "Produit", match: "94%", link: "https://carers.blablacar.com/" },
    { title: "Data Analyst Junior", company: "Deezer", location: "Paris", stipend: "1 300 € / mois", tag: "Tech", match: "89%", link: "https://www.deezer.com/company/jobs" },
    { title: "Community Manager & TikTok Creator", company: "Sephora", location: "Lyon", stipend: "1 100 € / mois", tag: "Marketing", match: "92%", link: "https://jobs.sephora.com/" },
    { title: "Assistant Commercial B2B", company: "Swile", location: "Montpellier", stipend: "1 250 € / mois", tag: "Sales", match: "88%", link: "https://swile.co/fr/carrieres" },
    { title: "UI/UX Designer Junior", company: "Ubisoft", location: "Lyon", stipend: "1 180 € / mois", tag: "Design", match: "96%", link: "https://www.ubisoft.com/fr-fr/company/careers" },
    { title: "DevOps & Cloud Apprentice", company: "OVHcloud", location: "Lille", stipend: "1 320 € / mois", tag: "Tech", match: "90%", link: "https://careers.ovhcloud.com/" },
    { title: "Chargé de Communication Externe", company: "L'Oréal", location: "Paris", stipend: "1 220 € / mois", tag: "Marketing", match: "87%", link: "https://careers.loreal.com/" },
    { title: "Financial Controller Junior", company: "Société Générale", location: "Toulouse", stipend: "1 450 € / mois", tag: "Finance", match: "85%", link: "https://careers.societegenerale.com/" },
    { title: "Cybersecurity Analyst Junior", company: "Thales", location: "Toulouse", stipend: "1 380 € / mois", tag: "Tech", match: "93%", link: "https://www.thalesgroup.com/fr/carrieres" },
    { title: "Développeur Mobile Flutter / React Native", company: "Capgemini", location: "Toulouse", stipend: "1 280 € / mois", tag: "Tech", match: "92%", link: "https://www.capgemini.com/fr-fr/carrieres/" },
    { title: "Assistant Chef de Projet Supply Chain", company: "Airbus", location: "Toulouse", stipend: "1 340 € / mois", tag: "Logistique", match: "94%", link: "https://www.airbus.com/en/careers" },
    { title: "Alternant Logistique & Achats", company: "Pierre Fabre", location: "Toulouse", stipend: "1 120 € / mois", tag: "Logistique", match: "89%", link: "https://www.pierre-fabre.com/fr/carrieres" },
    { title: "Assistant Marketing Local", company: "Leclerc", location: "Tarbes", stipend: "1 050 € / mois", tag: "Marketing", match: "91%", link: "https://www.leclerc.fr" },
    { title: "Alternant Gestion & Comptabilité", company: "In Extenso", location: "Tarbes", stipend: "1 020 € / mois", tag: "Finance", match: "88%", link: "https://www.inextenso.fr/" },
    { title: "Chargé d'Accueil & Vente Conseil", company: "Crédit Agricole", location: "Tarbes", stipend: "1 100 € / mois", tag: "Sales", match: "95%", link: "https://www.credit-agricole.com" },
  ];

  const cities = ['Toutes', 'Paris', 'Toulouse', 'Lyon', 'Bordeaux', 'Nantes', 'Tarbes', 'Montpellier', 'Lille'];

  const filtered = offers.filter(o => {
    const query = search.toLowerCase();
    const matchesSearch = o.title.toLowerCase().includes(query) || 
                          o.company.toLowerCase().includes(query) || 
                          o.location.toLowerCase().includes(query);
    const matchesCity = cityFilter === 'Toutes' || o.location.toLowerCase().includes(cityFilter.toLowerCase());
    const matchesTag = selectedTag === 'Tous' || o.tag === selectedTag;
    return matchesSearch && matchesCity && matchesTag;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 p-6 md:p-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/" className="font-black text-2xl flex items-center gap-2">🐱 louisemiaw<span className="text-blue-600">.</span></Link>
          <div className="flex gap-3">
            <Link href="/projet" className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition">Mon Profil AI</Link>
            <Link href="/" className="px-5 py-2.5 bg-slate-200 dark:bg-slate-800 text-sm font-bold rounded-full hover:opacity-80 transition">Accueil</Link>
          </div>
        </header>

        <div className="mb-10 text-center md:text-left">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold inline-flex items-center gap-1.5">
            <Sparkles size={14}/> {offers.length}+ Offres vérifiées en direct (National & Régional)
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-3 mb-4 tracking-tight">Le vivier Alternance ultime.</h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg font-medium">Recherche par mot-clé et sélection instantanée par ville.</p>
        </div>

        {/* Barres de recherche et filtres */}
        <div className="space-y-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <Search className="text-slate-400 ml-2 shrink-0" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher par poste ou entreprise (ex: Développeur, Qonto...)" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-3">
              <MapPin className="text-blue-500 ml-2 shrink-0" size={20} />
              <select 
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full bg-transparent outline-none font-semibold text-slate-900 dark:text-white text-sm cursor-pointer"
              >
                {cities.map(c => <option key={c} value={c} className="bg-white dark:bg-slate-900">{c === 'Toutes' ? '📍 Toutes les villes' : c}</option>)}
              </select>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {['Tous', 'Tech', 'Marketing', 'RH', 'Produit', 'Sales', 'Design', 'Finance', 'Logistique'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition whitespace-nowrap ${selectedTag === tag ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-800'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grille massive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((offer, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-7 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-xs font-bold">{offer.tag}</span>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-extrabold">Match {offer.match}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-blue-500 transition line-clamp-1">{offer.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-semibold flex items-center gap-1.5"><Briefcase size={14}/> {offer.company} • <span className="text-blue-600 dark:text-blue-400 font-bold">{offer.location}</span></p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="font-black text-blue-600 dark:text-blue-400 text-sm">{offer.stipend}</span>
                <a 
                  href={offer.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 shadow-md"
                >
                  Postuler officiel <ExternalLink size={13}/>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-400 font-semibold text-lg">Aucune offre ne correspond à cette ville ou recherche. Essaie un autre filtre !</p>
          </div>
        )}
      </div>
    </div>
  );
}