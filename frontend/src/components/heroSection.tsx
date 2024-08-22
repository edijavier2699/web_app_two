import React from 'react';
import heroVideo from '../assets/video/hero-video-origial.mp4';
import '../styles/heroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative my-5 rounded overflow-hidden heroVideoBackground">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        muted
        loop
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col bg-black bg-opacity-30 items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Wrapper for text content */}
        <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-start lg:absolute lg:bottom-0 lg:left-0 lg:px-8 lg:py-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 sm:px-6 lg:px-0 py-4 lg:py-8 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Unlock Real Estate Investing
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4">
              Earn passive income, without the hefty price tag. Invest in rental properties, securely and easily.
            </p>
            <a href="#" className="bg-[#F2F4F7] text-black rounded p-4 font-bold hover:bg-[#C8E870]">
              Join The Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
