import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { ContactModal } from './contactModal';
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
        <section className="flex faqSection flex-col lg:flex-row h-auto md:h-[700px] items-center py-8 md:py-16 space-y-6 md:space-y-0  mx-[20px] md:mx-[80px]">
            <div className="w-full lg:w-[35%]">
                <h2 className="text-3xl md:text-6xl font-extrabold text-left">
                    Your questions answered
                </h2>
                <div className="w-[40%]">
                    <ContactModal/>
                </div>
            </div>
            <div className="w-full lg:w-[65%] space-y-4">
                <AccordionItem
                    title=" How do I get started?"
                    content=" We're excited to have you on board! Our marketplace is currently in development, but you can sign up for our waitlist to be the first to know when it goes live."
                    isOpen={openIndex === 1}
                    onClick={() => toggleOpen(1)}
                />
                <AccordionItem
                    title="How do I earn rental income?"
                    content="When you invest with us, you'll earn a share of the rental income from the property. We'll deposit the money directly into your account."
                    isOpen={openIndex === 2}
                    onClick={() => toggleOpen(2)}
                />
                <AccordionItem
                    title="Is my investment secure?"
                    content="We are seeking authorisation from the Financial Conduct Authority (FCA) to ensure our platform meets the highest regulatory standards. This provides the most certainty for our investors."
                    isOpen={openIndex === 3}
                    onClick={() => toggleOpen(3)}
                />
                
                <AccordionItem
                    title="What are digital tokens?"
                    content="Digital tokens are digital assets that represent a portion of a property's rental income stream. They're created using blockchain technology and guarantee your share of the rental income."
                    isOpen={openIndex === 4}
                    onClick={() => toggleOpen(4)}
                />
                <AccordionItem
                    title="How do I sell my tokens?"
                    content="We are acquiring the necessary authorisation to allow for a secondary marketplace, where you can buy and sell tokens with other investors. This will be available when our platform goes live."
                    isOpen={openIndex === 5}
                    onClick={() => toggleOpen(5)}
                />
            </div>
        </section>
    );
};