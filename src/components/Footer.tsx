import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-dark font-serif font-bold">P</span>
              </div>
              <span className="font-serif font-bold text-xl">{BUSINESS_INFO.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating nail care to an art form. We provide a sanctuary where beauty meets precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Book Now</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Manicure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Pedicure</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Nail Art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Gel Extensions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-primary">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>123 Luxury Lane, Beauty City</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>{BUSINESS_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;