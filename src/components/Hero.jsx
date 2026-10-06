import React, { useState } from 'react';
import { MapPin, Navigation, Search, Sparkles, BookOpen } from 'lucide-react';

const Hero = ({ onSearch, onSelectCategory, onOpenGeographyTable }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm);
    if (onSelectCategory && selectedCat) onSelectCategory(selectedCat);
    
    // Smooth scroll to map section
    const el = document.getElementById('peta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChipClick = (term) => {
    setSearchTerm(term);
    if (onSearch) onSearch(term);
    const el = document.getElementById('peta');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop" 
          alt="Indonesian Geography Landscape" 
          className="w-full h-full object-cover scale-105 animate-pulse duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/75 to-slate-950/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center min-h-[65vh]">
        
        {/* Tugas Geografi Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-xs sm:text-sm font-medium mb-6 text-emerald-300 shadow-lg">
          <BookOpen className="w-4 h-4 mr-2 text-emerald-400" />
          Modul Edukasi: Potensi & Letak Strategis Geografi Pariwisata Indonesia
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-6 leading-tight max-w-5xl">
          Potensi Wilayah Nusantara: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-emerald-400">
            Letak Geografis & Nilai Strategis
          </span> Pariwisata
        </h1>
        
        <p className="max-w-3xl text-base md:text-xl text-gray-200 mb-8 leading-relaxed font-light">
          Kajian komprehensif letak astronomis, kondisi geologis Ring of Fire, biodiversitas Segitiga Karang Dunia, serta keunggulan strategis ekonomi dan konservasi kepulauan Indonesia.
        </p>

        {/* Quick Search Form */}
        <form onSubmit={handleSearchSubmit} className="w-full max-w-3xl bg-white/95 p-2.5 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 backdrop-blur-xl border border-white/40">
          <div className="flex-grow flex items-center px-4 w-full sm:w-auto">
            <Search className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari destinasi / letak wilayah (cth: Danau Toba, Raja Ampat)" 
              className="w-full bg-transparent text-gray-900 placeholder-gray-500 py-3 text-sm focus:outline-none"
            />
          </div>

          <div className="hidden sm:block w-px h-8 bg-gray-200 mx-1"></div>

          <div className="flex-grow flex items-center px-3 w-full sm:w-auto">
            <select 
              value={selectedCat}
              onChange={(e) => setSelectedCat(e.target.value)}
              className="w-full bg-transparent text-gray-700 py-3 text-sm focus:outline-none cursor-pointer"
            >
              <option value="">Semua Kategori</option>
              <option value="Geowisata">Geowisata & Vulkanik</option>
              <option value="Bahari">Wisata Bahari</option>
              <option value="Budaya">Budaya & Sejarah</option>
              <option value="Ekowisata">Ekowisata & Satwa</option>
              <option value="Alam">Bentang Alam</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-emerald-600/30 whitespace-nowrap flex items-center justify-center text-sm"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Eksplorasi di Peta
          </button>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-gray-300">
          <span className="flex items-center text-gray-400 mr-1">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-400" /> Coba telusuri:
          </span>
          {['Danau Toba', 'Borobudur', 'Raja Ampat', 'Labuan Bajo', 'Bromo', 'Banda Neira'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleChipClick(tag)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 px-2.5 py-1 rounded-full text-xs text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Action Button for Geography Table */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tabel-geografi"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20"
          >
            📊 Lihat Tabel Analisis Tugas Geografi
          </a>
          <a
            href="#peta"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-medium text-sm transition-all backdrop-blur-md"
          >
            🗺️ Buka Peta Interaktif Nusantara
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 w-full max-w-4xl border-t border-white/15 pt-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-amber-400">17.508</h3>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Pulau Maritim</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-amber-400">10</h3>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">UNESCO Geoparks</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-amber-400">5 DPSP</h3>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Destinasi Super Prioritas</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-amber-400">38</h3>
            <p className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Provinsi Kaya Potensi</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
