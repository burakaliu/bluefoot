"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-all duration-300 hover:shadow-lg">
      <div className="bg-blue-100 rounded-lg p-4 inline-block mb-4">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-gray-900 text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-900 mb-4">{description}</p>
      <Link href="#" className="text-blue-500 flex items-center hover:underline">
        Learn more <span className="ml-1">→</span>
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: "/globe.svg",
      title: "Website Design & Development",
      description: "Custom-designed websites that look great on all devices and focus on converting visitors into customers.",
    },
    {
      icon: "/window.svg",
      title: "Local SEO Optimization",
      description: "Get found by local customers searching for your services with our specialized local SEO strategies.",
    },
    {
      icon: "/file.svg",
      title: "E-commerce Solutions",
      description: "Sell products or services online with easy-to-manage e-commerce websites built for local businesses.",
    },
    {
      icon: "/window.svg",
      title: "Social Media Integration",
      description: "Connect with your community through integrated social media strategies that build your online presence.",
    },
    {
      icon: "/globe.svg",
      title: "Content Management",
      description: "Easy-to-update website content that you can manage yourself, with training and support included.",
    },
    {
      icon: "/file.svg",
      title: "Website Maintenance",
      description: "Keep your website secure, up-to-date, and performing at its best with our maintenance services.",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Website Services</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Everything you need to establish a powerful online presence and attract new customers to your local business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;