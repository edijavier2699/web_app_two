import React, { useEffect, useState } from 'react';
import '../styles/heroSection.css';
import { DemoModal } from './demoModal';
import hotelCard from "../assets/hotelCard.png";
import officeCard from "../assets/officeCard.png";
import multifamilyCard from "../assets/multifamilyCard.png";
import hotelCardMobile from "../assets/hotelCardMobile.png"
import officeCardMobile from "../assets/officeCardMobile.png"
import multifamilyCardMobile from "../assets/multifamilyCardMobile.png"

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
    <div className="relative flex flex-col md:flex-row w-full bg-[#EBF9BE] overflow-hidden px-[20px] md:px-[60px]" style={{ minHeight: '92vh' }}>
      <article className="flex flex-col items-center justify-center w-full md:w-2/3 ">
        <div className='space-y-4 w-full '>
          <h1 className="text-5xl mt-[35px] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Invest in Premium Commercial Real Estate Globally.
          </h1>
          <h4 className="font-bold text-4xl">
            In Minutes, Not Months.
          </h4>
      
          <p className="text-black tracking-wider text-base lg:text-xl mb-12 sm:w-[90%]">Diversify across premium CRE assets starting at just  <span className="font-bold"> £1,000</span> and <span className="font-bold">access liquidity instantly.</span></p>

        </div>
        <div className='w-full pt-[80px] flex items-center justify-center'>
          <DemoModal />
        </div>
      </article>
      <aside className=" w-full md:w-1/3 flex p-0 m-0 items-center justify-end">
        <img
          src={images[currentImageIndex]} // Cambia la imagen según sea móvil o no
          alt="property images"
          className="object-contain w-full p-0 m-0 h-[90%] max-h-[90vh] transition-transform duration-300 ease-in-out"
        />
      </aside>
    </div>
  );
};
