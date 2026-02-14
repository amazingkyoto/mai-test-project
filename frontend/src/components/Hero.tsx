import React from 'react';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 mt-0">
      <div className="bg-[#1a3688] rounded-2xl p-12 md:p-12 text-white flex flex-col justify-end min-h-[400px] md:min-h-[500px]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-normal mb-6 tracking-tight">
            We Are Ready to Help You
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-light leading-relaxed opacity-90">
            Aenean et augue leo. Sed pretium, odio a efficitur convallis, elit massa ullamcorper mi, sed dictum magna tellus eget magna
          </p>
        </div>
      </div>
    </div>
  );
}