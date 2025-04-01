'use client';

import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions tailored to your business needs',
      icon: '🌐',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: '📱',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: '☁️',
    },
    {
      title: 'AI Integration',
      description: 'Intelligent solutions powered by artificial intelligence',
      icon: '🤖',
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Innovative solutions for modern challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-xl flex flex-col items-center"
            >
              <div className="text-[40px] mb-4">{service.icon}</div>
              <h3 className="text-gray-900 text-xl font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-gray-900 text-center mb-4">
                {service.description}
              </p>
              <Link href="#" className="text-blue-500 flex items-center hover:underline mt-auto">
                Learn more <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
