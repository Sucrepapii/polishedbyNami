// components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Classic Manicure',
      description: 'Basic nail care with shaping, cuticle work, and polish application.',
      price: '$25',
      duration: '45 min',
      features: ['Nail shaping', 'Cuticle care', 'Hand massage', 'Polish application'],
      color: 'bg-pink-100',
      icon: '✨'
    },
    {
      title: 'Gel Manicure',
      description: 'Long-lasting gel polish that stays chip-free for weeks.',
      price: '$45',
      duration: '60 min',
      features: ['Gel application', 'UV curing', '3-week durability', 'Shine finish'],
      color: 'bg-purple-100',
      icon: '💎'
    },
    {
      title: 'Nail Extensions',
      description: 'Custom nail extensions using acrylic or gel systems.',
      price: '$65',
      duration: '90 min',
      features: ['Custom length', 'Strength building', 'Shape customization', 'Full design'],
      color: 'bg-blue-100',
      icon: '🚀'
    },
    {
      title: 'Nail Art Design',
      description: 'Custom nail art with intricate designs and patterns.',
      price: 'From $15',
      duration: '30+ min',
      features: ['Hand-painted designs', '3D elements', 'Glitter & gems', 'Custom patterns'],
      color: 'bg-yellow-100',
      icon: '🎨'
    },
    {
      title: 'Spa Pedicure',
      description: 'Luxurious foot treatment with exfoliation and massage.',
      price: '$55',
      duration: '75 min',
      features: ['Foot soak', 'Exfoliation', 'Leg massage', 'Callus treatment'],
      color: 'bg-green-100',
      icon: '🛁'
    },
    {
      title: 'Nail Repair',
      description: 'Professional repair for broken or damaged nails.',
      price: '$20',
      duration: '30 min',
      features: ['Crack repair', 'Strength treatment', 'Seal protection', 'Quick fix'],
      color: 'bg-red-100',
      icon: '🔧'
    }
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-800">{service.price}</div>
                  <div className="text-sm text-gray-600">{service.duration}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-2 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-2 px-4 rounded-full border border-gray-300 transition-colors">
                Book This Service
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Custom Packages Available</h3>
              <p className="text-gray-600">Mix and match services to create your perfect nail care package.</p>
            </div>
            <button className="mt-4 md:mt-0 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Create Custom Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;