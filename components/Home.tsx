import React from 'react';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import Team from './Team';
import Reviews from './Reviews';
import Footer from './Footer';
import { NavigateFunction } from '../types';

interface HomeProps {
  onNavigate: NavigateFunction;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Group 1: Navy Flow */}
      <div className="bg-navy-900">
        <Hero onNavigate={onNavigate} />
        <ServicesSection onNavigate={onNavigate} />
      </div>

      {/* Group 2: Light Flow (Changed from pastel-blue to navy-50) */}
      <div className="bg-navy-50">
        <Team />
        <Reviews />
      </div>

      {/* Footer Group */}
      <Footer />
    </div>
  );
};

export default Home;