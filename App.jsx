import React from 'react';
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import StoreLayout from './StoreLayout';
import Footer from './Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-neutral-900 selection:text-white">
      
      {/* Section 1: Top Navigation Bar */}
      <Navbar cartCount={2} />

      {/* Section 2: Hero Banner */}
      <HeroBanner />

      {/* Section 3 & 4: Store Layout (Left Sidebar Categories + Right Product Grid) */}
      <StoreLayout />

      {/* Section 5: Footer & Newsletter */}
      <Footer />

    </div>
  );
}

export default App;