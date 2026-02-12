import React from 'react';

export default function Hero() {
  return (
    <div className="py-20 text-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-gray-600 mb-8">
          Punya pertanyaan atau butuh bantuan? Tim kami siap membantu Anda kapan saja.
        </p>
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 inline-block"
        >
          Kirim Pesan
        </a>
      </div>
    </div>
  );
}