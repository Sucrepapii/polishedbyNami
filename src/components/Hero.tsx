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
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative">
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                {/* Background image - now layered on top */}
                <div
                  className="absolute inset-0 bg-cover bg-center z-10"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

                {/* 3D Text in bottom left */}
                <div className="absolute bottom-4 left-4 z-30">
                  <div className="relative">
                    {/* Shadow layer for 3D effect */}
                    <div className="absolute -bottom-1 -right-1 w-full">
                      <p className="text-3xl font-black text-black/40 tracking-tight">
                        LUXURY NAILS
                      </p>
                      <p className="text-lg font-bold text-black/30 tracking-wide">
                        ARTISTRY & DESIGN
                      </p>
                    </div>

                    {/* Main 3D text */}
                    <div className="relative">
                      <p className="text-3xl font-black text-white tracking-tight drop-shadow-lg">
                        LUXURY NAILS
                      </p>
                      <p className="text-lg font-bold text-pink-200 tracking-wide drop-shadow-md">
                        ARTISTRY & DESIGN
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full opacity-20 z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-300 rounded-full opacity-20 z-0"></div>
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