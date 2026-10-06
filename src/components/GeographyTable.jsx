import React, { useState, useEffect } from 'react';
import { destinations, regions, matchesSearch } from '../data/tourismData';
import { BookOpen, Search, Copy, Check, ExternalLink, MapPin, Award, RotateCcw } from 'lucide-react';

const GeographyTable = ({ onSelectDestination, externalSearchQuery }) => {
  const [filterRegion, setFilterRegion] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState(externalSearchQuery || '');
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setSearchTerm(externalSearchQuery);
    }
  }, [externalSearchQuery]);

  const filteredData = destinations.filter((item) => {
    const matchRegion = filterRegion === 'all' || item.regionId === filterRegion;
    const matchType = filterType === 'all' || item.type === filterType;
    const matchSearch = matchesSearch(item, searchTerm);
    return matchRegion && matchType && matchSearch;
  });

  const handleCopyText = (item) => {
    const text = `
Nama Pariwisata: ${item.name}
Wilayah: ${item.regionName} (${item.province})
Koordinat & Elevasi: ${item.lat.toFixed(4)}°, ${item.lng.toFixed(4)}° (${item.elevation})
Kategori: ${item.type}
Letak Geografis: ${item.locationDesc}
Kondisi Geologis & Bentang Alam: ${item.geologicalContext}
Nilai Strategis Kewilayahan: ${item.strategicPotential}
Dampak Ekonomi Lokal: ${item.economicImpact}
Aksesibilitas: ${item.accessibility}
Waktu/Musim Terbaik: ${item.bestSeason}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="tabel-geografi" className="py-20 bg-slate-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3">
            <BookOpen className="w-4 h-4 mr-1.5 text-blue-600" />
            Matriks Kajian Lengkap Tugas Geografi ({destinations.length} Objek)
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Tabel Analisis Letak & <span className="text-emerald-700">Nilai Strategis Wilayah</span>
          </h2>
          <p className="text-gray-600 text-base">
            Daftar lengkap objek pariwisata Indonesia, letak astronomis & geografis, kondisi bentang alam geologis, serta nilai strategis kewilayahan untuk bahan referensi tugas sekolah/kuliah.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari destinasi atau letak wilayah (cth: Sumatra)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Filter Wilayah */}
            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Semua Pulau / Zona ({destinations.length})</option>
              {regions.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>

            {/* Filter Kategori */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-gray-50 border border-gray-300 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">Semua Kategori</option>
              <option value="Geowisata">Geowisata & Vulkanik</option>
              <option value="Bahari">Wisata Bahari</option>
              <option value="Budaya">Budaya & Sejarah</option>
              <option value="Ekowisata">Ekowisata & Konservasi</option>
              <option value="Alam">Bentang Alam</option>
            </select>

            {(searchTerm || filterRegion !== 'all' || filterType !== 'all') && (
              <button
                onClick={() => { setSearchTerm(''); setFilterRegion('all'); setFilterType('all'); }}
                className="p-2.5 text-gray-500 hover:text-emerald-700 text-xs font-semibold flex items-center"
                title="Reset Filter"
              >
                <RotateCcw className="w-4 h-4 mr-1" /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Responsive Table */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-4 w-12 text-center">No</th>
                  <th className="py-4 px-4 min-w-[200px]">Destinasi & Wilayah</th>
                  <th className="py-4 px-4 min-w-[250px]">Letak Geografis & Batas</th>
                  <th className="py-4 px-4 min-w-[240px]">Kondisi Geologis & Morfologi</th>
                  <th className="py-4 px-4 min-w-[300px]">Nilai Strategis Geografi & Pariwisata</th>
                  <th className="py-4 px-4 w-32 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-gray-500">
                      <p className="font-semibold text-gray-700 mb-1">Tidak ada objek wisata ditemukan untuk filter ini.</p>
                      <button
                        onClick={() => { setSearchTerm(''); setFilterRegion('all'); setFilterType('all'); }}
                        className="text-xs text-emerald-600 font-bold underline mt-2"
                      >
                        Reset pencarian & tampilkan semua data
                      </button>
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, index) => (
                    <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors">
                      <td className="py-4 px-4 text-center font-bold text-gray-400">
                        {index + 1}
                      </td>
                      
                      <td className="py-4 px-4">
                        <div className="font-serif font-bold text-gray-900 text-base flex items-center gap-1.5">
                          {item.name}
                          {item.isDSP && (
                            <span title="Destinasi Super Prioritas" className="inline-flex">
                              <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <MapPin className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                          {item.regionName} • {item.province}
                        </div>
                        <span className="inline-block mt-1.5 px-2 py-0.5 rounded text-[11px] font-semibold bg-gray-100 text-gray-700">
                          {item.type} • {item.elevation}
                        </span>
                      </td>

                      <td className="py-4 px-4 text-gray-700 text-xs leading-relaxed">
                        <div className="font-semibold text-gray-900 mb-0.5">
                          Koordinat: {item.lat.toFixed(4)}°, {item.lng.toFixed(4)}°
                        </div>
                        <p>{item.locationDesc}</p>
                      </td>

                      <td className="py-4 px-4 text-gray-700 text-xs leading-relaxed">
                        <p className="line-clamp-4 hover:line-clamp-none transition-all">
                          {item.geologicalContext}
                        </p>
                      </td>

                      <td className="py-4 px-4 text-gray-800 text-xs leading-relaxed">
                        <div className="bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/60">
                          <p>{item.strategicPotential}</p>
                        </div>
                      </td>

                      <td className="py-4 px-4 text-center space-y-2">
                        <button
                          onClick={() => onSelectDestination(item)}
                          className="w-full inline-flex items-center justify-center px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1" /> Detail
                        </button>

                        <button
                          onClick={() => handleCopyText(item)}
                          className={`w-full inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                            copiedId === item.id
                              ? 'bg-green-100 text-green-800 border-green-300'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                          }`}
                          title="Salin data untuk tugas"
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 mr-1 text-green-600" /> Disalin!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 mr-1" /> Salin Data
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Education Notes for Geography Class */}
        <div className="mt-8 bg-blue-50/80 border border-blue-200 rounded-2xl p-6 text-sm text-blue-900">
          <h4 className="font-bold flex items-center mb-2 text-blue-950">
            <BookOpen className="w-5 h-5 mr-2 text-blue-700" />
            Catatan Konseptual Geografi Pariwisata Indonesia:
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-blue-900 text-xs sm:text-sm">
            <li><strong>Letak Astronomis:</strong> 6° LU – 11° LS dan 95° BT – 141° BT menyebabkan seluruh wilayah beriklim tropis dengan sinar matahari sepanjang tahun, sangat ideal untuk pariwisata bahari dan alam.</li>
            <li><strong>Letak Geologis:</strong> Pertemuan 3 lempeng aktif (Eurasia, Indo-Australia, Pasifik) menciptakan deretan gunung api (Ring of Fire) yang kaya akan geowisata kaldera, sumber air panas, dan tanah subur.</li>
            <li><strong>Letak Geomorfologis & Maritim:</strong> Indonesia memiliki perairan laut 2/3 wilayahnya dengan terumbu karang tropis terlengkap di dunia (Coral Triangle), menjadikannya magnet wisata selam dunia.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default GeographyTable;
