import React, { useState, useEffect } from "react";
import { FaqCategoryCard } from "@/components/faqCategoryCard";
import faqCategories from "../assets/faqCategoies.json";
import { FaqCategory } from "@/types/types";
import { ContactModal } from "@/components/contactModal";
import blogImage from "../assets/blogImage.webp";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'; // Icono de búsqueda

export const FAQPage: React.FC = () => {
  const [categories, setCategories] = useState<FaqCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const navigate = useNavigate();

  useEffect(() => {
    // Convierte los id a number si prefieres mantener el tipo FaqCategory con id: number
    const formattedCategories = faqCategories.map(category => ({
      ...category,
      id: Number(category.id), // Convertir el id de string a number
    }));

    setCategories(formattedCategories);
  }, []);

  const handleCategoryClick = (id: number) => {
    navigate(`/faq-category/${id}/`);
  };

  // Filtra las categorías basándose en el término de búsqueda
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${blogImage})` }}
        className="bg-cover bg-center bg-no-repeat h-64 flex flex-col items-center justify-center mb-[80px]"
      >
        <h2 className="text-white font-bold text-4xl">How Can We Help You</h2>
        {/* Search bar */}
        <div className="flex  w-[80%] sm:w-[40%] justify-center mb-8">
          <div className="relative w-full  mt-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
              placeholder="Search categories..."
              className="p-3 border w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#C8E870] focus:ring-[#C8E870] focus:ring-2"
            />
            {/* Icono de búsqueda */}
            <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold px-[20px] md:px-[80px] text-center sm:text-left">POPULAR TOPICS</h2>

      {/* Mostrar mensaje de "No se encontraron categorías" si no hay resultados */}
      {filteredCategories.length === 0 ? (
        <div className="flex justify-center items-center text-2xl font-semibold text-gray-500 my-[80px]">
          No categories found. Please try a different search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[80px] px-[20px] md:px-[80px]">
          {filteredCategories.map((category) => (
            <FaqCategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between py-[50px] px-[20px]  md:px-[80px]">
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">Still have questions?</h3>
          <p className="text-medium md:w-[70%]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <span className="w-auto">
          <ContactModal />
        </span>
      </div>
    </section>
  );
};
