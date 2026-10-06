import React, { useState } from 'react';
import { Menu, X, Compass, Search, BookOpen, Layers, MapPin } from 'lucide-react';

const Navbar = ({ onSearchClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 flex items-center cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center mr-2.5 shadow-md shadow-emerald-600/20 group-hover:bg-emerald-700 transition-colors">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg sm:text-xl text-gray-900 tracking-wide block leading-tight">
                Pesona<span className="text-emerald-700">Nusantara</span>
              </span>
              <span className="text-[10px] text-gray-500 tracking-wider font-semibold uppercase block">
                Geografi Pariwisata RI
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => handleNavClick('katalog')}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors flex items-center"
            >
              <Layers className="w-4 h-4 mr-1 text-emerald-600" />
              Objek Wisata (35)
            </button>
            <button 
              onClick={() => handleNavClick('peta')}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors flex items-center"
            >
              <MapPin className="w-4 h-4 mr-1 text-blue-600" />
              Peta GIS
            </button>
            <button 
              onClick={() => handleNavClick('tabel-geografi')}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-1 text-amber-600" />
              Tabel Geografi
            </button>
            <button 
              onClick={() => handleNavClick('destinasi')}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              5 DPSP
            </button>
            <button 
              onClick={() => handleNavClick('wilayah')}
              className="text-gray-700 hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              6 Zona
            </button>
            
            <button 
              onClick={() => handleNavClick('katalog')}
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-emerald-700/20 flex items-center"
            >
              <Search className="w-4 h-4 mr-1.5" />
              Cari Wilayah
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-700 focus:outline-none p-1.5 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-4 py-3 space-y-2">
          <button 
            onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Beranda
          </button>
          <button 
            onClick={() => handleNavClick('katalog')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-emerald-700 hover:bg-emerald-50"
          >
            Daftar Objek Wisata (35)
          </button>
          <button 
            onClick={() => handleNavClick('peta')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Peta Geografis & GIS
          </button>
          <button 
            onClick={() => handleNavClick('tabel-geografi')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50 text-blue-700"
          >
            Tabel Analisis Tugas Geografi
          </button>
          <button 
            onClick={() => handleNavClick('destinasi')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            5 Destinasi Super Prioritas (DPSP)
          </button>
          <button 
            onClick={() => handleNavClick('wilayah')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Eksplorasi 6 Zona Pulau
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
