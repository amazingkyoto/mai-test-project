import React from 'react';
import { MessageCircle } from 'lucide-react';

// Custom SVG Icons to replace deprecated Lucide brand icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>
  </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Column 1: Description */}
            <div className="text-gray-500 text-sm leading-relaxed">
                <p>
                    Vestibulum nec justo a diam efficitur eleifend. Sed nisi purus, bibendum sit amet vulputate quis, molestie in nisl. Donec id pellentesque libero.
                </p>
            </div>
            
            {/* Column 2: Address */}
            <div>
                <h4 className="font-bold text-gray-900 mb-6">Address</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Praesent Consectetur Nulla Vitae<br />
                    Nunc Aliquam, Eu Suscipit Lorem<br />
                    Tempor
                </p>
            </div>
            
            {/* Column 3: Contact Details */}
            <div>
                <h4 className="font-bold text-gray-900 mb-6">Phone</h4>
                <p className="text-gray-500 text-sm mb-6">021-23099131</p>

                <h4 className="font-bold text-gray-900 mb-6">Fax</h4>
                <p className="text-gray-500 text-sm mb-6">021-5856948</p>

                <h4 className="font-bold text-gray-900 mb-6">Offers / Marketing</h4>
                <p className="text-gray-500 text-sm">0811-8586-030</p>
            </div>

            {/* Column 4: Email & Operation */}
            <div>
                <h4 className="font-bold text-gray-900 mb-6">Email</h4>
                <p className="text-gray-500 text-sm mb-6">ask@loremtempor.com</p>

                <h4 className="font-bold text-gray-900 mb-6">Operation</h4>
                <p className="text-gray-500 text-sm">Mon - Fri : 9AM - 5PM</p>
            </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
            {/* Social Icons */}
            <div className="flex gap-4 mb-4 md:mb-0">
                <a href="#" className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                    <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                    {/* X Icon (Twitter placeholder) */}
                    <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors">
                    {/* TikTok placeholder */}
                    <TiktokIcon className="w-5 h-5" />
                </a>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-gray-900">
                <a href="#" className="hover:text-blue-600">Privacy policy</a>
                <span className="hidden md:inline text-gray-300">|</span>
                <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
                <span className="hidden md:inline text-gray-300">|</span>
                <span>©2026. All Rights Reserved.</span>
            </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a href="#" className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
            <MessageCircle className="w-8 h-8" />
        </a>

      </div>
    </footer>
  );
}