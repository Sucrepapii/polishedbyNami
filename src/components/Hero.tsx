// components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/5 to-transparent rounded-tr-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block py-1 px-3 mb-6 border border-primary/30 rounded-full bg-primary/5 text-primary text-sm font-medium tracking-wider uppercase"
            >
              Exquisite & Professional Care
            </motion.span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-dark mb-6 leading-tight">
              Elevate Your <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                Nail Artistry
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-secondary opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
              Experience the pinnacle of nail care where precision meets passion. We create stunning, long-lasting designs tailored to your unique style.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button onClick={onBookNow} className="shadow-xl shadow-primary/20">
                Book Appointment
              </Button>
              <Button variant="outline" href="#services">
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl mr-4 md:mr-0 aspect-[4/5] max-h-[600px] ml-auto">
              <img
                src="https://images.unsplash.com/photo-1588359953494-0c215e3cedc6?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Nail Art"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-4 rounded-xl shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">Top Rated Service</p>
                  <p className="text-xs text-gray-500">5.0 Star Reviews</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;