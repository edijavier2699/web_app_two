import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import faqData from "../assets/faqQuestions.json"; 
import { FaqAccordion } from "@/components/faqAccordion"; 
import { FaqBreadCrum } from "@/components/faqBreadCrum";

// Definición de tipos
export interface Question {
    id: string;
    title: string;
    content: string;
}

export interface FaqCategory {
    categoryId: number;
    categoryName: string;
    questions: Question[];
}

export const FaqSinglePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const categoryId = parseInt(id || "0");

    const [questions, setQuestions] = useState<Question[]>([]); // Define el tipo aquí
    const [currentCategory, setCurrentCategory] = useState<string>("Unknown Category");
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        // Busca la categoría basada en el ID de la categoría
        const categoryData = faqData.find((item: FaqCategory) => item.categoryId === categoryId);
        
        if (categoryData) {
            setQuestions(categoryData.questions);
            setCurrentCategory(categoryData.categoryName);
            if (categoryData.questions.length > 0) {
                setSelectedTitle(categoryData.questions[0].title); // Establece el título de la primera pregunta por defecto
            }
        }
    }, [categoryId]); // Depende del ID de la categoría

    const handleSelectTitle = (title: string) => {
        setSelectedTitle(title);
    };

    const filteredQuestions = questions.filter(question => 
        question.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        question.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <FaqBreadCrum
                currentCategory={currentCategory}
                selectedTitle={selectedTitle}
            />
            <h2 className="font-bold text-3xl md:text-4xl mt-8 mb-5">{currentCategory}</h2>
            <hr />
            <div className="my-5">
                <input 
                    type="text" 
                    placeholder="Search questions..." 
                    className="p-3 border w-[100%] sm:w-[50%] border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#C8E870] focus:ring-[#C8E870] focus:ring-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            {filteredQuestions.length > 0 ? (
                <FaqAccordion
                    sections={filteredQuestions}
                    onSelectTitle={handleSelectTitle}
                />
            ) : (
                <p className="text-gray-500">No results found.</p>
            )}
        </div>
    );
};
