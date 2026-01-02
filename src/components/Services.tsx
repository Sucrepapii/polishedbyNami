// components/Services.jsx
import React from 'react';

interface ServicesProps {
  onBookNow: () => void;
}

const Services = ({ onBookNow }: ServicesProps) => {
  const services = [
    {
      title: 'Plain Nails',
      description: 'Basic nail care with shaping, cuticle work, and polish application.',
      price: 'From 5000 NGN',
      features: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Polish application'],
      color: 'bg-pink-100',
    },
    {
      title: 'Design',
      description: 'Creative nail art and custom designs to express your style.',
      price: 'From 200 NGN/Finger',
      features: ['Gel application', 'UV curing', '3-week durability', 'Shine finish'],
      color: 'bg-purple-100',
    },
    {
      title: 'Toe Nails',
      description: 'Professional pedicure services for healthy and beautiful feet.',
      price: 'From 3000 NGN',
      features: ['Custom length', 'Strength building', 'Shape customization', 'Full design'],
      color: 'bg-blue-100',
    },
    {
      title: 'Pedicure',
      description: 'Complete foot care with exfoliation, massage, and polish.',
      price: 'From 8000 NGN',
      features: ['Hand-painted designs', '3D elements', 'Glitter & gems', 'Custom patterns'],
      color: 'bg-yellow-100',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-pink-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of nail services using high-quality products and expert techniques.
          </p>
        </div>

        {/* Services Grid - All on one line */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow min-w-[280px] max-w-[320px] flex-1`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <div className="text-2xl font-bold text-gray-800 mb-2">{service.price}</div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              
              <button
                onClick={onBookNow}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Services;