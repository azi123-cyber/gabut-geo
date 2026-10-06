import React from 'react';
import { X, MapPin, Compass, Mountain, ShieldCheck, TrendingUp, Navigation, Calendar, Award } from 'lucide-react';

const DetailModal = ({ destination, isOpen, onClose }) => {
  if (!isOpen || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Badge */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/75 text-white p-2.5 rounded-full transition-all backdrop-blur-md z-10"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-nusantara-emerald text-white uppercase tracking-wider">
                {destination.type}
              </span>
              {destination.isDSP && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1" /> Destinasi Super Prioritas (DPSP)
                </span>
              )}
              {destination.elevation && (
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                  {destination.elevation}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">{destination.name}</h2>
            <p className="text-sm sm:text-base text-gray-200 flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1 text-nusantara-gold flex-shrink-0" />
              {destination.province} ({destination.lat.toFixed(4)}°, {destination.lng.toFixed(4)}°)
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          
          {/* Bagian Tugas Geografi: Letak & Karakteristik Wilayah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5">
              <div className="flex items-center text-nusantara-emerald font-bold mb-2 text-sm uppercase tracking-wider">
                <Compass className="w-4 h-4 mr-2" /> Letak Geografis & Batas
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {destination.locationDesc}
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-5">
              <div className="flex items-center text-amber-800 font-bold mb-2 text-sm uppercase tracking-wider">
                <Mountain className="w-4 h-4 mr-2" /> Kondisi Geologis & Bentang Alam
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {destination.geologicalContext}
              </p>
            </div>
          </div>

          {/* Nilai Strategis Wilayah (Kunci Tugas Geografi) */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-6">
            <div className="flex items-center text-blue-900 font-bold mb-3 text-base">
              <ShieldCheck className="w-5 h-5 mr-2 text-blue-700" /> 
              Nilai Strategis Geografi & Pariwisata Nasional
            </div>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              {destination.strategicPotential}
            </p>
          </div>

          {/* Dampak Ekonomi & Aksesibilitas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center text-gray-900 font-bold mb-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2 text-nusantara-emerald" /> 
                Dampak Ekonomi Lokal & Multiplier Effect
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {destination.economicImpact}
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center text-gray-900 font-bold mb-2 text-sm">
                <Navigation className="w-4 h-4 mr-2 text-nusantara-ocean" /> 
                Aksesibilitas & Konektivitas Jalur
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {destination.accessibility}
              </p>
            </div>
          </div>

          {/* Musim Terbaik */}
          <div className="flex items-center bg-gray-100/80 rounded-xl p-4 text-sm text-gray-700">
            <Calendar className="w-5 h-5 mr-3 text-nusantara-gold flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-900">Musim & Waktu Kunjungan Terbaik: </span>
              {destination.bestSeason}
            </div>
          </div>

        </div>

        {/* Footer Modal */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between flex-shrink-0">
          <span className="text-xs text-gray-500 italic">
            *Data dirancang khusus untuk analisis Tugas Geografi Pariwisata Indonesia
          </span>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
