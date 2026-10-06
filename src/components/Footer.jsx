import React from 'react';
import { Compass, Leaf, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-nusantara-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-nusantara-emerald mr-2" />
              <span className="font-serif font-bold text-2xl tracking-wide">
                Pesona<span className="text-nusantara-emerald">Nusantara</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mengenalkan potensi wisata nusantara dari Sabang hingga Merauke. Mendukung pelestarian alam dan pemberdayaan ekonomi kreatif lokal.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-nusantara-emerald transition-colors">
                <span className="font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-nusantara-emerald transition-colors">
                <span className="font-bold">X</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-nusantara-emerald transition-colors">
                <span className="font-bold">YT</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-serif mb-4 text-gray-100">Kategori Wisata</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Wisata Bahari</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Ekowisata & Alam</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Geowisata (Geopark)</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Budaya & Sejarah</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Kuliner & Ekonomi Kreatif</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-serif mb-4 text-gray-100">Tautan Penting</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Beranda</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Peta Potensi</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">5 Destinasi Super Prioritas</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Kuis Rekomendasi</a></li>
              <li><a href="#" className="hover:text-nusantara-emerald transition-colors">Sustainable Tourism</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-serif mb-4 text-gray-100">Green Tourism</h4>
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <Leaf className="w-6 h-6 text-nusantara-emerald mb-2" />
              <p className="text-xs text-gray-300 mb-3 leading-relaxed">
                Jadilah wisatawan yang bertanggung jawab. Jaga kebersihan alam, hormati budaya lokal, dan dukung UMKM setempat.
              </p>
              <button className="text-xs font-bold text-nusantara-emerald hover:text-white transition-colors">
                Pelajari Etika Wisata &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pesona Nusantara. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Dibuat dengan <Heart className="w-3 h-3 text-red-500 mx-1" /> untuk Pariwisata Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
