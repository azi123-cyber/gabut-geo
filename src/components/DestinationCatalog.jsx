import React, { useState, useEffect } from 'react';
import { destinations, regions, matchesSearch } from '../data/tourismData';
import { Search, MapPin, Eye, Compass, Award, Mountain, Layers, ArrowRight, RotateCcw } from 'lucide-react';

const DestinationCatalog = ({ onSelectDestination, onFocusDestinationOnMap, activeSearchQuery, activeRegionFilter }) => {
  const [selectedRegion, setSelectedRegion] = useState(activeRegionFilter || 'all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchInput, setSearchInput] = useState(activeSearchQuery || '');

  // Synchronize with external search from Hero / Navbar
  useEffect(() => {
    if (activeSearchQuery !== undefined) {
      setSearchInput(activeSearchQuery);
    }
  }, [activeSearchQuery]);

  useEffect(() => {
    if (activeRegionFilter !== undefined) {
      setSelectedRegion(activeRegionFilter);
    }
  }, [activeRegionFilter]);

  const categories = ['all', 'Geowisata', 'Bahari', 'Budaya', 'Ekowisata', 'Alam'];

  const filteredList = destinations.filter(item => {
    // Region match
    const matchRegion = selectedRegion === 'all' || item.regionId === selectedRegion;
    // Category match
    const matchCategory = selectedCategory === 'all' || item.type === selectedCategory;
    // Search query match with intelligent normalization
    const matchSearch = matchesSearch(item, searchInput);

    return matchRegion && matchCategory && matchSearch;
  });

  const handleReset = () => {
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSearchInput('');
  };

  return (
    <section id="katalog" className="py-20 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-600/10 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-4 h-4 mr-1.5 text-emerald-600" />
            Katalog Lengkap Potensi Wisata Nusantara
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mb-4">
            Daftar Objek Wisata <span className="text-emerald-700">& Nilai Strategis</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Temukan 35 objek pariwisata unggulan di 6 zona kepulauan Indonesia lengkap dengan letak geografis, kondisi geologis, dan signifikansi strategisnya.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-6 shadow-md border border-slate-200 mb-10 space-y-6">
          
          {/* Search bar inside Catalog */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Cari nama wisata, provinsi, atau pulau (cth: Sumatra, Toba)..."
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Select Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'Semua Kategori' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Island / Region Tabs */}
          <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2 uppercase tracking-wider">
              Filter Wilayah:
            </span>
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedRegion === 'all'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🇮🇩 Semua Pulau ({destinations.length})
            </button>
            {regions.map((reg) => {
              const count = destinations.filter(d => d.regionId === reg.id).length;
              return (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedRegion === reg.id
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {reg.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Results Counter & Active Query Feedback */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <div>
              Menampilkan <strong className="text-slate-900 font-bold">{filteredList.length}</strong> objek wisata
              {searchInput && <span> untuk pencarian "<strong className="text-emerald-700">{searchInput}</strong>"</span>}
              {selectedRegion !== 'all' && <span> di wilayah <strong className="text-emerald-700">{regions.find(r => r.id === selectedRegion)?.name}</strong></span>}
            </div>

            {(searchInput || selectedRegion !== 'all' || selectedCategory !== 'all') && (
              <button
                onClick={handleReset}
                className="flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset Filter
              </button>
            )}
          </div>

        </div>

        {/* Cards Grid */}
        {filteredList.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold font-serif text-slate-800 mb-2">
              Tidak ada objek wisata ditemukan
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Tidak ada hasil yang sesuai dengan kata kunci "{searchInput}". Silakan coba kata kunci lain seperti "Sumatra", "Toba", "Jawa", atau "Bahari".
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl transition-all shadow-md"
            >
              Tampilkan Semua Wisata (35)
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredList.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Image and Badges */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-slate-900 backdrop-blur-md uppercase tracking-wider shadow-sm">
                      {item.type}
                    </span>
                    {item.isDSP && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-amber-500 text-slate-950 flex items-center shadow-md">
                        <Award className="w-3.5 h-3.5 mr-1" /> DPSP RI
                      </span>
                    )}
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-[11px] text-amber-300 font-semibold tracking-wider uppercase block">
                      {item.regionName} • {item.province}
                    </span>
                    <h3 className="text-xl font-bold font-serif leading-snug drop-shadow-sm">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-600 flex-shrink-0" />
                      <span>{item.lat.toFixed(4)}°, {item.lng.toFixed(4)}° • Elevasi: {item.elevation}</span>
                    </div>

                    {/* Letak Geografis */}
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs">
                      <span className="font-bold text-slate-900 block mb-1">
                        📍 Letak Geografis:
                      </span>
                      <p className="text-slate-600 line-clamp-2 leading-relaxed">
                        {item.locationDesc}
                      </p>
                    </div>

                    {/* Nilai Strategis */}
                    <div className="bg-amber-50/70 p-3 rounded-2xl border border-amber-200/60 text-xs">
                      <span className="font-bold text-amber-950 block mb-1">
                        ⭐ Nilai Strategis Kewilayahan:
                      </span>
                      <p className="text-amber-900/90 line-clamp-3 leading-relaxed">
                        {item.strategicPotential}
                      </p>
                    </div>
                  </div>

                  {/* Actions Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectDestination && onSelectDestination(item)}
                      className="flex-1 bg-slate-900 hover:bg-emerald-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-4 h-4" /> Buka Kajian Lengkap
                    </button>

                    <button
                      onClick={() => onFocusDestinationOnMap && onFocusDestinationOnMap(item)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 px-3.5 rounded-xl transition-colors flex items-center justify-center"
                      title="Lihat di Peta GIS"
                    >
                      <Compass className="w-4 h-4 text-emerald-600" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default DestinationCatalog;
