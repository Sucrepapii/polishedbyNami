import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/services';
import Button from './ui/Button';

interface ServicesProps {
  onBookNow: () => void;
}

const Services = ({ onBookNow }: ServicesProps) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4"
          >
            Our Exclusive <span className="text-primary italic">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Experience luxury nail care with our comprehensive range of services using premium products and expert techniques.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <Button
                  onClick={onBookNow}
                  variant="outline"
                  className="w-full justify-center hover:bg-dark hover:text-white border-gray-200"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;