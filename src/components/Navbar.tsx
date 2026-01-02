// App.js
import { useState } from 'react';
import Header from './Header';
import Services from './Services';
import Portfolio from './Portfolio';
import Booking from './Booking';
import Contact from './Contact';
import Footer from './Footer';
import Hero from './Hero';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNow={() => setIsBookingModalOpen(true)} />
      <Hero onBookNow={() => setIsBookingModalOpen(true)} />
      <Services />
      <Portfolio />
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