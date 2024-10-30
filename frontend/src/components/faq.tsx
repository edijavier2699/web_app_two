import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="flex flex-col lg:flex-row  py-8 md:py-16 space-y-6 md:space-y-0  mx-[20px] md:mx-[80px]">
            <div className="w-full lg:w-[35%]">
                <h2 className="text-3xl md:text-6xl font-bold text-left">
                    Your Questions, <br /> Answered
                </h2>
                <div className="w-[40%]">
                    <Button onClick={()=> navigate("/faq/")} className="bg-[#C8E870] mt-5 text-black font-bold  hover:bg-[#A0CC28]">View More</Button>
                </div>
            </div>
            <div className="w-full lg:w-[65%] space-y-4">
                <AccordionItem
                    title="What is Tokunize?"
                    content="Tokunize is an innovative platform that democratizes access to premium real estate investment opportunities. A fully managed process where we handle all aspects of the acquisitions and management process, providing investors with a hassle-free experience."
                    isOpen={openIndex === 1}
                    onClick={() => toggleOpen(1)}
                />
                <AccordionItem
                    title="What am I investing in?"
                    content="You are purchasing fractional ownership in carefully vetted premium commercial real estate. Benefit from a streamlined investment process, ensuring that managing your portfolio is straightforward."
                    isOpen={openIndex === 2}
                    onClick={() => toggleOpen(2)}
                />
                <AccordionItem
                    title="How does investing work on the platform?"
                    content="Sign up - Easily create an account with Tokunize for access to institutional-quality offerings
                        Invest - Select investments that meet your long-term goals to benefit from steady income streams and long-term price appreciation, diversification with assets uncoupled from market movements, unique tax advantages
                        Earn - Enjoy the ease of our high-tech platform, automatic deposits of investment earnings, real time investment performance, and access instant liquidity.
                        The platform enables you to invest directly in premium commercial real estate without intermediaries, simplifying the investment process.
                        What’s the legal standing of Property Shareholders in relation to asset ownership?
                        Tokens represent a fractional ownership in a DAO LLC legal entity owning the underlying asset. Your investment represents a proportional ownership in the asset, e.g. a 1% investment in the total value of an asset would represent 1% ownership of the asset."
                    isOpen={openIndex === 3}
                    onClick={() => toggleOpen(3)}
                />
                
                <AccordionItem
                    title="How do I sell my investments?"
                    content="Tokunize provides there exit strategies:
                        Sell instantly on the secondary market (2% fee).
                        List on the secondary market for other investors to bid and buy your tokens (0% fee).
                        Asset is sold and returns distributed."
                    isOpen={openIndex === 4}
                    onClick={() => toggleOpen(4)}
                />
                <AccordionItem
                    title="How are the properties managed?"
                    content="Properties are managed by professional management service providers verified and approved by Tokunize."
                    isOpen={openIndex === 5}
                    onClick={() => toggleOpen(5)}
                />
            </div>
        </section>
    );
};