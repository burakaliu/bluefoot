"use client";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Local Business Online?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get started today with a free consultation. We&apos;ll discuss your business goals and how
            we can help you reach more local customers.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 hover:scale-105"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;