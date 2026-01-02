// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Booking from  './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNow={() => setIsBookingModalOpen(true)} />
      <Hero onBookNow={() => setIsBookingModalOpen(true)} />
      <Services onBookNow={() => setIsBookingModalOpen(true)} />
      {/* <Portfolio /> */}
      <Booking 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;