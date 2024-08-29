import React, { useState } from 'react';
import heroVideo from '../assets/video/heroVideo.mp4';
import heroImage from '../assets/lowerModeImg.jpeg'; // La imagen de respaldo
import '../styles/heroSection.css';
import { NewsletterForm } from '@/forms/newsletterForm';

export const HeroSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(true);

  const handleVideoError = () => {
    setShowVideo(false); // Si hay un error, cambiamos a la imagen
  };

  const handleCanPlayThrough = () => {
    setShowVideo(true); // Si el video puede reproducirse, lo mostramos
  };

  return (
    <div className="relative my-5 mx-[20px] md:mx-[80px] rounded overflow-hidden heroVideoBackground">
      {showVideo ? (
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={handleCanPlayThrough} // Detecta si se puede reproducir automáticamente
          onError={handleVideoError} // Detecta si hay un error al intentar reproducir el video
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={heroImage}
          alt="Hero Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col bg-black bg-opacity-30 items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Wrapper for text content */}
        <div className="w-full flex md:mb-[64px] flex-col md:pl-[32px] lg:flex-row lg:items-end lg:justify-start lg:absolute lg:bottom-0 lg:left-0 ">
          <div className="flex flex-col  lg:items-start text-left lg:px-0  lg:py-8 rounded">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Unlock Real Estate Investing
            </h1>
            <p className="l font-medium text-base sm:text-lg md:text-xl lg:text-2xl mb-4">
              Earn passive income, without the hefty price tag. Invest in rental properties, securely and easily.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
};
