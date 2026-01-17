import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, BUSINESS_INFO } from '../constants';
import Button from './ui/Button';

const Header = ({ onBookNow }: { onBookNow: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary font-serif italic text-2xl pt-1">P</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-serif font-bold text-dark tracking-tight">
                {BUSINESS_INFO.name}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <Button onClick={onBookNow}>
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg absolute left-4 right-4 top-full">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-primary py-2 font-medium border-b border-gray-100 last:border-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onBookNow();
                  setIsMenuOpen(false);
                }}
                className="mt-2 w-full justify-center"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;