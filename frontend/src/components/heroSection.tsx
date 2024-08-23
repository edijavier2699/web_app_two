import React from 'react';
import heroVideo from '../assets/video/hero-video-origial.mp4';
import '../styles/heroSection.css';
import { NewsletterForm } from '@/forms/newsletterForm';

export const HeroSection: React.FC = () => {

  return (
    <div className="relative my-5 mx-[20px] md:mx-[80px] rounded overflow-hidden heroVideoBackground">
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
        <div className="w-full flex md:mb-[64px] flex-col md:pl-[32px] lg:flex-row lg:items-end lg:justify-start lg:absolute lg:bottom-0 lg:left-0 ">
          <div className="flex flex-col  lg:items-start text-left lg:px-0  lg:py-8 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Unlock Real Estate Investing
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4">
              Earn passive income, without the hefty price tag. Invest in rental properties, securely and easily.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
};
