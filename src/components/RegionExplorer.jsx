import React from 'react';
import { regions, destinations } from '../data/tourismData';
import { Compass, ArrowRight, MapPin, Eye } from 'lucide-react';

const RegionExplorer = ({ onSelectDestination, onFocusRegion }) => {
  return (
    <section id="wilayah" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">
            <Compass className="w-5 h-5 mr-2" />
            Zonasi Kepulauan Indonesia
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
            Eksplorasi <span className="text-emerald-700">6 Zona Wilayah</span> Utama
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Setiap gugusan pulau memiliki karakter geologis, iklim mikro, serta potensi pariwisata yang khas—dari kaldera purba barat hingga palung laut dalam timur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => {
            const regionDestinations = destinations.filter(d => d.regionId === region.id);

            return (
              <div 
                key={region.id} 
                className="group flex flex-col bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-200/80 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Zona Kepulauan
                    </span>
                    <h3 className="text-2xl font-bold font-serif">{region.name}</h3>
                  </div>
                </div>
                
                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {region.description}
                    </p>
                    
                    <div className="space-y-3 mb-6 bg-white p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center justify-between">
                        <span>Destinasi Unggulan:</span>
                        <span className="text-emerald-600 font-semibold">{regionDestinations.length} Lokasi</span>
                      </p>
                      
                      <ul className="space-y-2">
                        {regionDestinations.map(dest => (
                          <li 
                            key={dest.id} 
                            onClick={() => onSelectDestination && onSelectDestination(dest)}
                            className="flex items-center text-xs text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 p-1.5 rounded-lg transition-colors cursor-pointer group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></span>
                            <span className="font-semibold text-gray-900 group-hover/item:text-emerald-700 truncate">{dest.name}</span>
                            <span className="ml-auto text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md flex-shrink-0">
                              {dest.type}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-2">
                    <button 
                      onClick={() => {
                        if (regionDestinations.length > 0 && onSelectDestination) {
                          onSelectDestination(regionDestinations[0]);
                        }
                      }}
                      className="flex-1 flex items-center justify-center py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1.5" /> Detail Geografi
                    </button>

                    <a
                      href="#peta"
                      onClick={() => onFocusRegion && onFocusRegion(region.id)}
                      className="flex-1 flex items-center justify-center py-2.5 bg-white border border-gray-300 hover:border-emerald-600 hover:text-emerald-700 text-gray-800 text-xs font-semibold rounded-xl transition-colors"
                    >
                      Lihat di Peta
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RegionExplorer;
