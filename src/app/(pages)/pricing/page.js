import React from 'react';

export default function PricingPage() {
  const commissionTiers = [
    {
      name: "Website Commission",
      price: "5%",
      description: "Commission on all sales generated through your website",
      features: [
        "Website Lead Tracking",
        "Customer Analytics Dashboard",
        "Sales Performance Reports",
        "Conversion Tracking",
        "Customer Journey Analysis",
        "ROI Reporting"
      ]
    }
  ];

  const subscriptionTiers = [
    {
      name: "Basic",
      price: "$99/mo",
      description: "Ongoing website maintenance and support",
      features: [
        "Yearly Updates",
        "Security Monitoring",
        "Basic SEO Management",
        "Performance Reports",
        "Content Updates",
        "Custom Content"
      ]
    },
    {
      name: "Professional",
      price: "$199/mo",
      description: "Advanced website management and growth",
      features: [
        "Everything in Basic, plus:",
        "Monthly Updates",
        "24/7 Support",
        "Advanced SEO",
        "Analytics Reports",
        "Priority Support"
      ]
    },
  ];

  const PricingSection = ({ title, description, tiers }) => (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl font-medium text-gray-800">
            {description}
          </p>
      </div>

        <div className={`mt-12 grid gap-8 ${
          tiers.length === 1 
            ? 'lg:grid-cols-1 max-w-2xl mx-auto' 
            : tiers.length === 2
              ? 'lg:grid-cols-2 max-w-4xl mx-auto'
              : 'lg:grid-cols-3'
          } lg:gap-x-8`}>
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {tier.price}
                  </span>
                </p>
                <p className="mt-6 text-gray-900">{tier.description}</p>

                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
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
                      <span className="ml-3 text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="mt-8 block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-md py-3 px-4 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:from-blue-700 hover:to-purple-700 active:scale-95 "
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-60"></div>
      <div className="relative">
        <div className="text-center py-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6 leading-relaxed">
            Flexible Pricing Solutions
          </h1>
          <p className="text-xl font-medium text-gray-900 max-w-3xl mx-auto leading-relaxed">
            Tailored financial options to support businesses of all sizes, from emerging startups to established enterprises
          </p>
        </div>
      
        <PricingSection
          //title="Subscription Services"
          //description="Ongoing website maintenance and support"
          tiers={subscriptionTiers}
        />
      </div>
    </div>
  );
}