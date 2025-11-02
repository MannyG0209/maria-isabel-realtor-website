import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import PropertyListings from './components/PropertyListings';
import ListingsPage from './components/ListingsPage';
import RealtorDirectory from './components/RealtorDirectory';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [currentPage, setCurrentPage] = useState<'home' | 'listings'>('home');

  const handleLanguageChange = (lang: 'en' | 'es') => {
    setLanguage(lang);
  };

  const handleShowListings = () => {
    setCurrentPage('listings');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'listings') {
    return (
      <div className="min-h-screen bg-white">
        <ListingsPage language={language} onBack={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50">
        <a
          href="/download.tar.gz"
          download="my-website.tar.gz"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Site
        </a>
      </div>
      <Hero language={language} onLanguageChange={handleLanguageChange} onShowListings={handleShowListings} />
      <About language={language} />
      <PropertyListings language={language} onShowAllListings={handleShowListings} />
      <RealtorDirectory language={language} />
      <SocialMedia language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;