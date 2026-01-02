// components/Hero.jsx
import React from 'react';

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Elevate Your <span className="text-pink-500">Nail Game</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Professional nail services with precision and artistry. From classic manicures to stunning nail art, we bring creativity to your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onBookNow}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
              >
                Book Appointment
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold text-lg transition-colors">
                View Services
              </button>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-6xl mb-4">💅</div>
                  <p className="text-xl font-semibold">Professional Nail Artistry</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;