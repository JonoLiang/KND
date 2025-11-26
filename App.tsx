import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <main>
        <Hero />
        {/* Placeholder for content below the fold to allow scrolling if needed */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-serif text-gray-800 mb-4">Our Premium Dental Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience world-class dental care with our dedicated team of professionals.
            We treat you like family because you represent our family.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;