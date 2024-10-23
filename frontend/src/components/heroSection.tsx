import React, { useEffect, useState } from 'react';
import '../styles/heroSection.css';
import { DemoModal } from './demoModal';
import hotelCard from "../assets/hotelCard.svg";
import officeCard from "../assets/officeCard.svg";
import multifamilyCard from "../assets/multifamilyCard.svg";
import hotelCardMobile from "../assets/hotelCardMobile.svg"
import officeCardMobile from "../assets/officeCardMobile.svg"
import multifamilyCardMobile from "../assets/multifamilyCardMobile.svg"

// Arrays de imágenes normales y móviles
const imagesDesktop: string[] = [hotelCard, officeCard, multifamilyCard];
const imagesMobile: string[] = [hotelCardMobile, officeCardMobile, multifamilyCardMobile];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768); // Detectar si es móvil

  // Cambiar la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDesktop.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manejar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize); // Detectar el redimensionamiento de la ventana

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Seleccionar las imágenes dependiendo de si es móvil o no
  const images = isMobile ? imagesMobile : imagesDesktop;

  return (
    <div className="relative flex flex-col md:flex-row w-full overflow-hidden px-[20px] sm:px-[60px]" style={{ minHeight: '95vh' }}>
      <article className="flex flex-col items-center justify-center w-full md:w-2/3 ">
        <div className='space-y-4 w-full '>
          <h1 className="text-4xl mt-[35px] sm:text-4xl md:text-4xl lg:text-[53px] font-bold">
            Invest in Commercial Real Estate.
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Tomorrow's Real Estate. Today.
          </h1>
          <p className="text-[#667085] text-base lg:text-lg mb-12 sm:w-[90%]">
            Experience the future of commercial real estate investing. Tokunize connects property developers with accredited and institutional investors, providing unparalleled access to premium properties. Invest with confidence and efficiency, with fractional ownership starting from <span className="text-[#C8E870] font-bold"> £1,000 - no lock-ins or hassle. </span>
          </p>
        </div>
        <div className='w-full pt-[80px] flex items-center justify-center'>
          <DemoModal />
        </div>
      </article>
      <aside className="w-full md:w-1/3 flex p-0 m-0 items-center justify-end">
        <img
          src={images[currentImageIndex]} // Cambia la imagen según sea móvil o no
          alt="property images"
          className="object-contain w-full p-0 m-0 h-[90%] max-h-[90vh] transition-transform duration-300 ease-in-out"
        />
      </aside>
    </div>
  );
};
