import React, { useState, useEffect } from 'react';
import CircularProgress from './CircularProgess';


interface HowItWorksStepsProps {
    sectionTitles: string[];
    sectionImages: string[];
}

export const SignUp = () => {
    return (
        <section className="py-8">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Set Up Your Tokunize Account
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                        <span className="font-semibold">Verify Your Identity: </span>
                        Pass KYC checks and accreditation approval to ensure compliance and security.
                    </li>
                    <li>
                        <span className="font-semibold">List Assets or Invest: </span>
                        Begin listing your assets or explore curated investment opportunities tailored to your goals.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export const TrackAndEarn = () => {
    return (
        <section className="py-8">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Earn</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                        <span className="font-semibold">Benefit from the tax advantages</span> of real estate transactions, allowing you to reinvest strategically and grow your portfolio.
                    </li>
                    <li>
                        Access <span className="font-semibold">curated premium commercial real estate opportunities</span> designed to maximize returns.
                    </li>
                    <li>
                        Leverage <span className="font-semibold">rental income</span>, <span className="font-semibold">property appreciation</span>, and exclusive market insights to optimize your investments.
                    </li>
                </ul>
            </div>
        </section>
    );
};


export const InvestSell = () => {
    return (
        <section className="">
            {/* Invest Section */}
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Invest</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                        <span className="font-semibold">Explore curated real estate opportunities </span> 
                        by filtering asset type, location, or risk profile.
                    </li>
                    {/* <li>
                        Access market data, financial insights, and due diligence tools—all in one place.
                    </li> */}
                    <li>
                        Build a portfolio aligned with your long-term goals, supported by tax-efficient strategies and ongoing reviews.
                    </li>
                </ul>
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Sell Section */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sell</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                        Sell full or partial economic rights in your assets efficiently and hassle-free.
                    </li>
                    <li>
                        No need for showings or inspections—Tokunize handles the legals, accounting, and payment settlement seamlessly.
                    </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                    *Liquidity Not Guaranteed: Marketplace listings are illiquid, and there is no guarantee of exit opportunities or pricing on the Secondary Market.
                </p>
            </div>
        </section>
    );
};


export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({ sectionTitles, sectionImages}) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [fade, setFade] = useState(false);
    const [progress, setProgress] = useState(0);

    const nextSection = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentSection(prevValue => (prevValue < sectionTitles.length - 1 ? prevValue + 1 : 0));
            setFade(false);
            setProgress(0);
        }, 300);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSection();
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + (100 / 60) : 100));
        }, 100);

        return () => clearInterval(progressInterval);
    }, [currentSection]);

    return (
        <section className="flex flex-col md:flex-row items-center justify-center lg:h-[600px] mt-5 px-[20px] md:px-[60px]">
        {/* Texto que se mantendrá a la izquierda en pantallas md y superiores */}
        <div className="w-full md:w-1/2 py-4 md:p-4 h-[60%] pr-0 md:pr-[50px] flex flex-col order-2 md:order-1">
            <div className="mb-4 flex">
                {sectionTitles.map((title, index) => (
                    <div
                        key={index}
                        className="relative w-full flex flex-col items-center cursor-pointer"
                        onClick={() => setCurrentSection(index)}
                    >
                        <h2
                            className={`text-lg sm:text-sm min-w-[120px]  md:text-normal lg:text-lg w-1/2 text-center ${currentSection === index ? 'font-bold' : 'text-gray-500'} mb-1`}
                        >
                            {title}
                        </h2>
                        <CircularProgress
                            progress={currentSection === index ? progress : 0}
                            index={index}
                            isActive={currentSection === index}
                        />
                    </div>
                ))}
            </div>
    
            <div className="flex-grow flex flex-col justify-center">
            <div className="flex-grow flex flex-col justify-center">
                {currentSection === 0 && <SignUp />}
                {currentSection === 1 && <InvestSell />}
                {currentSection === 2 && <TrackAndEarn />}
            </div>

            </div>
        </div>
    
        {/* Imagen que se mostrará arriba solo en pantallas menores a md */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
            <div className={`transition-opacity h-full w-full duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <img
                    loading='lazy'
                    src={sectionImages[currentSection]}
                    alt={sectionTitles[currentSection]}
                    className="h-full w-[80%] rounded-lg bg-white mx-auto lg:float-right object-contain"
                />
            </div>
        </div>
    </section>
    
    );
};
