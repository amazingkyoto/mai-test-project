"use client";

import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm font-medium">
        
        {/* Mobile Logo / Brand (Visible on Mobile) */}
        <div className="lg:hidden font-bold text-xl text-blue-900">
            MAI Project
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 text-gray-600">
          <li><a href="#" className="hover:text-blue-900 transition-colors">Homepage</a></li>
          <li><a href="#about" className="hover:text-blue-900 transition-colors">About</a></li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-900 transition-colors">
            Product <ChevronDown className="w-4 h-4" />
          </li>
          <li><a href="#dealer" className="hover:text-blue-900 transition-colors">Find Dealer</a></li>
          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-900 transition-colors">
            Media & Information <ChevronDown className="w-4 h-4" />
          </li>
          <li><a href="#warranty" className="hover:text-blue-900 transition-colors">Warranty Claim</a></li>
        </ul>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <span className="text-lg">🇺🇸</span>
            <span>EN</span>
            <ChevronDown className="w-4 h-4" />
          </div>

          {/* Contact Us Button */}
          <a 
            href="#contact" 
            className="group flex items-center gap-3 border border-blue-900 text-blue-900 px-2 py-2 rounded-full hover:bg-blue-50 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
                Contact Us
                <div className="bg-blue-900 text-white rounded-full p-1 group-hover:scale-125 transition-transform">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-4 text-gray-600 text-base">
                <li><a href="#" className="block py-2 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Homepage</a></li>
                <li><a href="#about" className="block py-2 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                <li className="flex justify-between items-center py-2 hover:text-blue-900">
                    Product <ChevronDown className="w-4 h-4" />
                </li>
                <li><a href="#dealer" className="block py-2 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Find Dealer</a></li>
                <li className="flex justify-between items-center py-2 hover:text-blue-900">
                    Media & Information <ChevronDown className="w-4 h-4" />
                </li>
                <li><a href="#warranty" className="block py-2 hover:text-blue-900" onClick={() => setIsMobileMenuOpen(false)}>Warranty Claim</a></li>
            </ul>

            <div className="border-t border-gray-100 pt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-lg">🇺🇸</span>
                    <span>EN</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
                
                <a 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-center items-center gap-2 border border-blue-900 text-blue-900 px-5 py-3 rounded-full hover:bg-blue-50 transition-colors font-semibold w-full"
                >
                    Contact Us
                    <div className="bg-blue-900 text-white rounded-full p-0.5">
                        <ArrowUpRight className="w-3 h-3" />
                    </div>
                </a>
            </div>
        </div>
      )}
    </nav>
  );
}