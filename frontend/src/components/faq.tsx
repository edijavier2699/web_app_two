import React, { useState} from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

import { AccordionItem } from './myAccordion';

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
                    content="Tokunize is a platform for tokenizing premium commercial real estate, enabling investors to own fractional economic rights in high-value properties. By facilitating asset-to-asset transactions and strategic reinvestment, Tokunize empowers investors to diversify their portfolios, optimize returns, and maintain tax efficiency—all within a seamless and innovative ecosystem."
                    isOpen={openIndex === 1}
                    onClick={() => toggleOpen(1)}
                />
                <AccordionItem
                    title="What am I investing in?"
                    content="You are investing in fractional economic rights to premium commercial real estate assets. Tokunize allows you to seamlessly access curated opportunities, enabling portfolio diversification and income generation without the complexities of direct ownership."
                    isOpen={openIndex === 2}
                    onClick={() => toggleOpen(2)}
                />
                <AccordionItem
                    title="How does investing work on the platform?"
                    content={
                        <>
                            <strong>Sign up</strong> - Easily create an account with Tokunize for access to institutional-quality offerings.<br />
                            <strong>Invest</strong> - Select investments that meet your long-term goals to benefit from steady income streams and long-term price appreciation, diversification with assets uncoupled from market movements, unique tax advantages.<br />
                            <strong>Earn</strong> - Enjoy the ease of our high-tech platform, automatic deposits of investment earnings, real-time investment performance, and access instant liquidity.<br />
                            The platform enables you to invest directly in premium commercial real estate without intermediaries, simplifying the investment process.<br />
                            <strong>What’s the legal standing of Property Shareholders in relation to asset ownership?</strong><br />
                            Tokens represent a fractional ownership in a DAO LLC legal entity owning the underlying asset. Your investment represents a proportional ownership in the asset, e.g. a 1% investment in the total value of an asset would represent 1% ownership of the asset.
                        </>
                    }
                    isOpen={openIndex === 3}
                    onClick={() => toggleOpen(3)}
                />

                <AccordionItem
                    title="What’s the legal standing of Property Shareholders in relation to asset ownership? "
                    content="Tokunize provides there exit strategies:
                       When you invest through Tokunize, you are purchasing fractional economic rights to the underlying asset, rather than direct property ownership. These rights entitle you to a proportional share of the asset’s income and potential value appreciation, secured via blockchain tokens. The property itself is held within a legal entity, and your investment reflects your economic interest in the asset’s performance, offering a streamlined and tax-efficient way to participate in premium real estate opportunities. "
                    isOpen={openIndex === 4}
                    onClick={() => toggleOpen(4)}
                />
                <AccordionItem
                    title="How do I sell my investments?"
                    content={
                        <>
                            <strong>Asset-to-Asset Trading</strong>: Exchange your tokens for economic rights in other assets, seamlessly diversifying or reallocating your portfolio.<br />
                            <strong>Secondary Market</strong>: List your tokens for other investors to buy, providing an efficient and cost-effective way to exit.<br />
                            <strong>Asset Sale</strong>: When the underlying property is sold, returns are distributed proportionally to token holders.
                        </>
                    }
                    isOpen={openIndex === 5}
                    onClick={() => toggleOpen(5)}
                />

                <AccordionItem
                    title="How are the properties managed? "
                    content="Properties are overseen by professional management firms vetted and approved by Tokunize. These experts ensure the operational and financial performance of each asset aligns with the platform’s high standards, maximizing value for token holders."
                    isOpen={openIndex === 6}
                    onClick={() => toggleOpen(6)}
                />
            </div>
        </section>
    );
};