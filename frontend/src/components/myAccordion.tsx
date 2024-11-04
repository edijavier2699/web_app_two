import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

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
            <h3 className=" font-bold mb-0">
                <button
                    onClick={onClick}
                    className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-lg group"
                >
                    <p className='l'><span className="text-[#121212] text-lg sm:text-xl md:text-2xl">{title}</span></p>
                    <p className='s'><span className="absolute right-0 pt-1 font-medium text-xs">
                        {isOpen ? (
                            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                        )}
                    </span>
                    </p>
                </button>
            </h3>
            <div
                style={{ maxHeight }}
                className="overflow-hidden mt-3 transition-max-height duration-500 ease-in-out"
            >
                <div ref={contentRef} className="p-4 bg-gray-50 rounded-lg text-base md:text-lg leading-normal font-medium text-[#667085]">
                    {content}
                </div>
            </div>
        </div>
    );
};