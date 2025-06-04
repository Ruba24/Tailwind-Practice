import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <img 
        src="./public/Images/Hero_Section.jpg" 
        alt="Hero Section Background" 
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center space-x-16">
        
        <div className="bg-black bg-opacity-40 text-white px-8 py-8 w-1/2 rounded-r-3xl">
          <h1 className="text-4xl">Freight Strategy.</h1>
          <h1 className="text-4xl text-orange-500 font-semibold">With a Brain</h1>
          <p className='text-2xl'>
            Join the Baby Brains™ Virtual Launch and discover the AGI that’s revolutionizing dispatching, investing, and logistics intelligence.
          </p>
        </div>
        <div className="bg-orange-300 rounded-lg flex items-center justify-center space-x-4 px-4 py-2 h-16">
          <input 
            type="text" 
            placeholder="Enter your Tracking Number" 
            className="px-5 py-2 rounded-lg w-80 bg-transparent border border-white text-white placeholder-white"
          />
          <button 
            className="bg-white text-orange-500 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition w-24"
          >
            Track Shipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
