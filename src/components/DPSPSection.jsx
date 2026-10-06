import React from 'react';
import { ArrowRight, Star, Award, Compass, Eye } from 'lucide-react';
import { destinations } from '../data/tourismData';

const DPSPSection = ({ onSelectDestination }) => {
  const dspDestinations = destinations.filter(d => d.isDSP);

  return (
    <section id="destinasi" className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-xs sm:text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 mr-2 fill-emerald-600 text-emerald-600" />
              Proyek Strategis Nasional (PSN) Pariwisata
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
              5 Destinasi Pariwisata <span className="text-emerald-700">Super Prioritas</span> (DPSP)
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Program unggulan Kemenparekraf RI untuk membangun 5 pusat pertumbuhan pariwisata baru kelas dunia berdaya saing global di luar Pulau Bali.
            </p>
          </div>

          <a 
            href="#tabel-geografi" 
            className="mt-4 md:mt-0 inline-flex items-center text-emerald-700 font-bold text-sm hover:text-emerald-800 transition-colors group"
          >
            Lihat Matriks Geografi Lengkap 
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {dspDestinations.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onSelectDestination && onSelectDestination(item)}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 aspect-[3/4] cursor-pointer flex flex-col justify-end p-5 border border-gray-200 hover:-translate-y-1.5"
            >
              {/* Image & Gradient */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <span className="inline-flex items-center px-2.5 py-1 bg-amber-500 text-slate-950 text-[10px] font-extrabold rounded-full mb-2.5 shadow-md">
                  <Award className="w-3 h-3 mr-1" /> DPSP Kemenparekraf
                </span>
                
                <h3 className="text-xl font-bold font-serif text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-gray-300 text-xs flex items-center mb-3">
                  <Compass className="w-3.5 h-3.5 mr-1 text-emerald-400 flex-shrink-0" />
                  {item.province}
                </p>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white/90 hover:bg-white text-slate-950 text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Analisis Geografi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DPSPSection;
