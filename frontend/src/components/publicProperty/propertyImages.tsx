import React from "react";

interface PropertyImagesProps {
  images: string[];
}

export const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
  return (
    <div className="flex flex-row h-[580px] gap-4">
      {/* Primera imagen */}
      <div className="w-1/2 flex justify-center items-center h-full">
        {images[0] && (
          <img
            src={images[0]}
            alt="First Property Image"
            className="object-cover w-full h-full rounded-tl-xl rounded-bl-xl"
          />
        )}
      </div>

      {/* Galería de imágenes en la segunda columna */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-full">
        {images.length > 1 && (
          <>
            <div className="h-full cover rounded-tr-xl">
              <img
                src={images[1]}
                alt="Property Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full cover">
              <img
                src={images[2]}
                alt="Property Image 3"
                className="w-full h-full object-cover rounded-tr-xl"
              />
            </div>
            <div className="h-full cover">
              <img
                src={images[3]}
                alt="Property Image 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-full cover rounded-br-xl">
              <img
                src={images[4]}
                alt="Property Image 5"
                className="w-full h-full object-cover rounded-br-xl"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

