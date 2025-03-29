"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-blue-600 mb-4 block">
              bluefoot
            </Link>
            <p className="text-gray-900 mb-4">
              Helping local businesses establish a powerful online presence and attract new
              customers.
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-900 hover:text-blue-500">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 hover:text-blue-500">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 hover:text-blue-500">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 hover:text-blue-500">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-900 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-blue-500">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-900">
              <p>123 Web Avenue</p>
              <p>Digital City, DC 12345</p>
              <p className="mt-2">(555) 123-4567</p>
              <p className="mt-2">
                <a href="mailto:bluefootinc@gmail.com" className="hover:text-blue-500">
                  bluefootinc@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-900">
          <p>© 2025 Bluefoot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;