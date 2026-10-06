import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DPSPSection from './components/DPSPSection';
import InteractiveMapSection from './components/InteractiveMapSection';
import GeographyTable from './components/GeographyTable';
import RegionExplorer from './components/RegionExplorer';
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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
        />

        <GeographyTable 
          onSelectDestination={handleOpenDetail} 
        />

        <RegionExplorer 
          onSelectDestination={handleOpenDetail} 
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
