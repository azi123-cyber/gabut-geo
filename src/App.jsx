import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DPSPSection from './components/DPSPSection';
import InteractiveMapSection from './components/InteractiveMapSection';
import DestinationCatalog from './components/DestinationCatalog';
import GeographyTable from './components/GeographyTable';
import RegionExplorer from './components/RegionExplorer';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('all');
  const [targetMapDestination, setTargetMapDestination] = useState(null);

  const handleOpenDetail = (dest) => {
    setSelectedDestination(dest);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleHeroSearch = (query) => {
    setSearchQuery(query);
  };

  const handleHeroSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleFocusDestinationOnMap = (dest) => {
    setTargetMapDestination(dest);
    const el = document.getElementById('peta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFocusRegion = (regionId) => {
    setSelectedRegionFilter(regionId);
    setSearchQuery('');
    const el = document.getElementById('katalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        <Hero 
          onSearch={handleHeroSearch} 
          onSelectCategory={handleHeroSelectCategory} 
        />

        <DPSPSection 
          onSelectDestination={handleOpenDetail} 
        />

        <InteractiveMapSection 
          onSelectDestination={handleOpenDetail}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          targetDestination={targetMapDestination}
        />

        {/* Katalog Lengkap 35 Objek Wisata */}
        <DestinationCatalog 
          onSelectDestination={handleOpenDetail}
          onFocusDestinationOnMap={handleFocusDestinationOnMap}
          activeSearchQuery={searchQuery}
          activeRegionFilter={selectedRegionFilter}
        />

        {/* Tabel Lengkap Kajian Khusus Tugas Geografi */}
        <GeographyTable 
          onSelectDestination={handleOpenDetail} 
          externalSearchQuery={searchQuery}
        />

        {/* 6 Zona Kepulauan */}
        <RegionExplorer 
          onSelectDestination={handleOpenDetail} 
          onFocusRegion={handleFocusRegion}
        />
      </main>

      <Footer />

      {/* Global Detail Modal */}
      <DetailModal 
        destination={selectedDestination}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
