"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-white p-8 relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60"></div>
      <div className="z-10 container mx-auto px-6 py-24 relative">
        <div className="flex flex-col items-center justify-center text-center">

          <h1 className="text-6xl font-bold text-gray-800 mb-4 mt-6">
            <span>Boost Your</span>
            <br />
            <span className="text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-[length:200%_100%] text-transparent bg-clip-text transition-all duration-500 ease-in-out hover:bg-[position:100%_0] bg-[position:0_0] bg-[size:200%_100%] hover:text-8xl">
              Local Business
            </span>
            <br />
            <span className="">with Professional Web Presence</span>
          </h1>

          <p className="text-xl text-gray-900 mb-8 max-w-2xl">
            We create stunning websites that attract new customers and grow your
            local business. Stand out online and watch your business thrive.
          </p>

          <div className="flex space-x-4 mb-10">
            <Link
              href="#"
              className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition duration-300 flex items-center hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 dark:focus:ring-blue-600"
            >
              Get Started <span className="ml-2">→</span>
            </Link>
            
          </div>

          <div className="flex items-center text-gray-900">
            <span className="text-green-500 mr-2">✓</span>
            <p>No technical skills required. We handle everything.</p>
          </div>

          <div className="flex flex-col items-center w-full mt-16">
            <Link
              href="#services"
              className="text-blue-500 font-semibold flex flex-col items-center"
            >
              <span>Discover Our Services</span>
              <span className="text-3xl font-semibold mt-2 animate-bounce duration-300">
                ↓
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
