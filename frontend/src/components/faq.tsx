import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

// AccordionItem types
interface AccordionItemProps {
    title: string;
    content: ReactNode; //We use react node to allow text or jsx
    isOpen: boolean;
    onClick: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [maxHeight, setMaxHeight] = useState<string>('0px');

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className="relative mb-3">
            <h6 className="mb-0">
                <button
                    onClick={onClick}
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-lg group"
                >
                    <span className="text-lg sm:text-xl md:text-2xl">{title}</span>
                    <span className="absolute right-0 pt-1 text-xs">
                        {isOpen ? (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                        )}
                    </span>
                </button>
            </h6>
            <div
                style={{ maxHeight }}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
            >
                <div ref={contentRef} className="p-4 text-base md:text-lg leading-normal font-medium text-[#667085]">
                    {content}
                </div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex faqSection flex-col md:flex-row h-auto md:h-[700px] items-center py-8 md:py-16 space-y-6 md:space-y-0">
            <div className="w-full md:w-[35%]">
                <h2 className="text-3xl md:text-6xl font-extrabold text-center md:text-left">
                    Your questions <br /> answered
                </h2>
                <button className="bg-[#C8E870] text-black mt-6 md:mt-8 px-4 py-3 font-bold rounded hover:bg-[#A0CC28] w-full md:w-auto">
                    Contact Us
                </button>
            </div>
            <div className="w-full md:w-[65%] space-y-4">
                <AccordionItem
                    title="What is real estate investing?"
                    content="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
                    isOpen={openIndex === 1}
                    onClick={() => toggleOpen(1)}
                />
                <AccordionItem
                    title="What is blockchain and how does it relate to my investment?"
                    content="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
                    isOpen={openIndex === 2}
                    onClick={() => toggleOpen(2)}
                />
                <AccordionItem
                    title="What is the minimum investment amount?"
                    content="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
                    isOpen={openIndex === 3}
                    onClick={() => toggleOpen(3)}
                />
                <AccordionItem
                    title="How do I earn rental income?"
                    content="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
                    isOpen={openIndex === 4}
                    onClick={() => toggleOpen(4)}
                />
            </div>
        </section>
    );
};