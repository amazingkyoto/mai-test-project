import React from 'react';

export default function Header() {
  return (
    <nav className="border-b border-gray-200 p-4 sticky top-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-blue-600">MAI Project</div>
        <ul className="flex gap-6 text-gray-600">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}