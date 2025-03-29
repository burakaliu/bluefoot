"use client";
import React from "react";

const BenefitItem = ({ children }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="text-green-500 mr-3 mt-1 flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>{children}</div>
    </div>
  );
};

const ApproachItem = ({ number, title, description }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-gray-900 font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-900">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Bluefoot?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand local businesses and create websites that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Benefits Column */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Benefits for Your Business</h3>
            
            <BenefitItem>
              <h4 className="text-gray-900 font-bold text-lg">Attract New Customers</h4>
              <p className="text-gray-600">Our websites are designed to rank well in local searches and convert visitors into paying customers.</p>
            </BenefitItem>
            
            <BenefitItem>
              <h4 className="text-gray-900 font-bold text-lg">Build Credibility</h4>
              <p className="text-gray-600">A professional website instantly boosts your business's credibility and trustworthiness.</p>
            </BenefitItem>
            
            <BenefitItem>
              <h4 className="text-gray-900 font-bold text-lg">Save Time</h4>
              <p className="text-gray-600">We handle the technical stuff so you can focus on running your business.</p>
            </BenefitItem>
            
            <BenefitItem>
              <h4 className="text-gray-900 font-bold text-lg">Affordable Solutions</h4>
              <p className="text-gray-600">Get a professional website at a price that makes sense for your local business.</p>
            </BenefitItem>
          </div>

          {/* Approach Column */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Approach</h3>
            
            <ApproachItem 
              number="1"
              title="Understand Your Business"
              description="We take the time to understand your unique business, goals, and target customers."
            />
            
            <ApproachItem 
              number="2"
              title="Custom Design"
              description="Create a website that reflects your brand and appeals to your ideal customers."
            />
            
            <ApproachItem 
              number="3"
              title="Optimize for Local Search"
              description="Implement strategies to help your business show up in local searches."
            />
            
            <ApproachItem 
              number="4"
              title="Ongoing Support"
              description="Continue to optimize and improve your website based on real performance data."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;