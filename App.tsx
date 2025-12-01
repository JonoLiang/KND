import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Shop from './components/pages/Shop';
import Patients from './components/pages/Patients';
import Services from './components/Services';
import TeamPage from './components/pages/TeamPage';
import { NavigateFunction } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentServiceTab, setCurrentServiceTab] = useState<string | undefined>(undefined);

  const handleNavigate: NavigateFunction = (page, params) => {
    setCurrentPage(page);
    if (params) {
      setCurrentServiceTab(params);
    } else {
      setCurrentServiceTab(undefined);
    }
    // Reset scroll position
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services initialTab={currentServiceTab} />;
      case 'about':
        return <About />;
      case 'team':
        return <TeamPage />;
      case 'patients':
        return <Patients />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />;
      case 'shop':
        return <Shop />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-navy-900 min-h-screen relative selection:bg-pastel-blue selection:text-navy-900 font-sans">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      {/* Footer is strictly Navy, so we ensure it sits nicely */}
      {currentPage !== 'home' && <Footer />}
    </div>
  );
};

export default App;