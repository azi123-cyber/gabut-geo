import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { destinations, regions } from '../data/tourismData';
import { MapPin, Layers, Compass, Eye, Search, Mountain, Award } from 'lucide-react';

// Custom Map Marker styling using SVG DivIcon for ultra-crisp modern look
const createCustomMarker = (type, isDSP) => {
  const color = isDSP ? '#F59E0B' : (
    type === 'Bahari' ? '#0284C7' :
    type === 'Geowisata' ? '#D97706' :
    type === 'Budaya' ? '#7C3AED' :
    type === 'Ekowisata' ? '#059669' : '#10B981'
  );

  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2.5px solid white;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30]
  });
};

// Map View Controller to smoothly fly to regions
const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 1.5 });
    }
  }, [center, zoom, map]);
  return null;
};

const tileLayers = {
  topo: {
    name: 'Topografi & Relief (Esri Topo)',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri, USGS, NOAA & GIS User Community'
  },
  osm: {
    name: 'Standar Terbuka (OpenStreetMap)',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors'
  },
  satellite: {
    name: 'Citra Satelit Bumi (Esri Satellite)',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri, Maxar, Earthstar Geographics'
  }
};

const regionBounds = {
  all: { center: [-2.5489, 118.0149], zoom: 5 },
  sumatra: { center: [0.5, 101.5], zoom: 6 },
  jawa: { center: [-7.5, 111.0], zoom: 7 },
  bali_nusra: { center: [-8.6, 118.5], zoom: 7 },
  kalimantan: { center: [0.0, 114.0], zoom: 6 },
  sulawesi: { center: [-1.5, 121.5], zoom: 6 },
  maluku_papua: { center: [-3.5, 134.0], zoom: 6 }
};

const InteractiveMapSection = ({ onSelectDestination, searchQuery, selectedCategory }) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory || 'Semua');
  const [currentLayerKey, setCurrentLayerKey] = useState('topo');
  const [currentRegion, setCurrentRegion] = useState('all');
  const [localSearch, setLocalSearch] = useState('');

  // Sync with prop changes if passed from Hero/Navbar
  useEffect(() => {
    if (selectedCategory) setActiveCategory(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (searchQuery) setLocalSearch(searchQuery);
  }, [searchQuery]);

  const categories = ['Semua', 'Bahari', 'Geowisata', 'Budaya', 'Ekowisata', 'Alam'];

  const filteredDestinations = destinations.filter(dest => {
    const matchCategory = activeCategory === 'Semua' || dest.type === activeCategory;
    const matchSearch = localSearch === '' || 
      dest.name.toLowerCase().includes(localSearch.toLowerCase()) ||
      dest.province.toLowerCase().includes(localSearch.toLowerCase()) ||
      dest.strategicPotential.toLowerCase().includes(localSearch.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="peta" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/30">
            <Compass className="w-4 h-4 mr-1.5" />
            GIS & Analisis Spasial Pariwisata Nusantara
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            Peta Geografis & Sebaran <span className="text-nusantara-gold">Nilai Strategis</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Eksplorasi posisi geografis, batas bentang alam, serta nilai strategis geologis tiap destinasi di seluruh kepulauan Indonesia. Peta interaktif bebas watermark & siap dipakai tugas geografi.
          </p>
        </div>

        {/* Toolbar: Search, Category, Region Focus, & Basemap Switcher */}
        <div className="bg-slate-800/90 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-slate-700/80 shadow-2xl mb-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari lokasi, provinsi, atau kata kunci geografi..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-nusantara-emerald transition-colors"
              />
              {localSearch && (
                <button 
                  onClick={() => setLocalSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Basemap Switcher */}
            <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              <div className="flex items-center text-xs text-gray-400 font-medium mr-1 whitespace-nowrap">
                <Layers className="w-4 h-4 mr-1 text-nusantara-gold" /> Tipe Peta:
              </div>
              {Object.entries(tileLayers).map(([key, layer]) => (
                <button
                  key={key}
                  onClick={() => setCurrentLayerKey(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    currentLayerKey === key
                      ? 'bg-nusantara-emerald text-white shadow-md'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {layer.name}
                </button>
              ))}
            </div>

          </div>

          {/* Regional Quick-Zoom Jump Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700/60">
            <span className="text-xs text-gray-400 font-medium mr-1">Fokus Wilayah:</span>
            <button
              onClick={() => setCurrentRegion('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                currentRegion === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-700/80 text-gray-300 hover:bg-slate-700'
              }`}
            >
              🇮🇩 Seluruh RI
            </button>
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => setCurrentRegion(reg.id)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  currentRegion === reg.id ? 'bg-nusantara-emerald text-white font-bold' : 'bg-slate-700/80 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {reg.name}
              </button>
            ))}
          </div>

          {/* Category Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-700/60">
            <span className="text-xs text-gray-400 font-medium mr-1">Kategori Potensi:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-gray-400">
              Menampilkan <strong className="text-white">{filteredDestinations.length}</strong> titik wilayah
            </span>
          </div>

        </div>

        {/* Map Container */}
        <div className="w-full h-[650px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700/60 relative z-10">
          <MapContainer
            center={regionBounds[currentRegion].center}
            zoom={regionBounds[currentRegion].zoom}
            scrollWheelZoom={false}
            className="w-full h-full"
            zoomControl={false}
          >
            <MapController 
              center={regionBounds[currentRegion].center} 
              zoom={regionBounds[currentRegion].zoom} 
            />

            <TileLayer
              attribution={tileLayers[currentLayerKey].attribution}
              url={tileLayers[currentLayerKey].url}
              maxZoom={18}
            />
            <ZoomControl position="bottomright" />

            {filteredDestinations.map((dest) => (
              <Marker
                key={dest.id}
                position={[dest.lat, dest.lng]}
                icon={createCustomMarker(dest.type, dest.isDSP)}
              >
                <Popup className="custom-popup rounded-2xl overflow-hidden" maxWidth={320}>
                  <div className="text-gray-900 p-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-800">
                        {dest.type}
                      </span>
                      {dest.isDSP && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 flex items-center">
                          <Award className="w-3 h-3 mr-0.5" /> DPSP
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-base text-gray-900 leading-snug">
                      {dest.name}
                    </h4>
                    
                    <p className="text-xs text-gray-500 flex items-center mt-0.5 mb-2">
                      <MapPin className="w-3 h-3 mr-1 text-emerald-600 flex-shrink-0" />
                      {dest.province} • {dest.elevation}
                    </p>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-gray-700 mb-3 space-y-1.5">
                      <div>
                        <strong className="text-gray-900 block font-semibold">📍 Letak Geografis:</strong>
                        <p className="line-clamp-2 text-gray-600">{dest.locationDesc}</p>
                      </div>
                      <div>
                        <strong className="text-blue-900 block font-semibold">⭐ Nilai Strategis:</strong>
                        <p className="line-clamp-2 text-gray-600">{dest.strategicPotential}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="w-full bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Buka Analisis Geografi Lengkap
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 border border-white"></span>
            <span>Destinasi Super Prioritas (DPSP)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-sky-600 border border-white"></span>
            <span>Wisata Bahari</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-600 border border-white"></span>
            <span>Geowisata & Vulkanik</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-purple-600 border border-white"></span>
            <span>Budaya & Sejarah</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 border border-white"></span>
            <span>Ekowisata & Alam</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveMapSection;
