import React, { useState, useEffect } from 'react';

interface SectionDescription {
    header: string;
    details: string[];
    detailClarification?: string;
}

interface HowItWorksStepsProps {
    sectionTitles: string[];
    sectionImages: string[];
    sectionDescriptions: SectionDescription[];
}

interface CircularProgressProps {
    progress: number;
    index: number;
    isActive: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress, index, isActive }) => {
    const radius = 13;
    const strokeWidth = 4;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <svg width="40" height="40" className="relative">
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="#577B14"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    cx="20"
                    cy="20"
                    r={radius}
                    stroke="#C8E870"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={isActive ? offset : circumference}
                    style={{ transition: "stroke-dashoffset 0.3s ease" }}
                />
                <text
                    x="20"
                    y="26"
                    textAnchor="middle"
                    fontSize="17px"
                    fontWeight="bold"
                    fill={isActive ? "#000" : "#777"}
                >
                    {index + 1}
                </text>
            </svg>
        </div>
    );
};

export const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({ sectionTitles, sectionDescriptions, sectionImages, }) => {
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
                        className="relative w-full flex items-center cursor-pointer"
                        onClick={() => setCurrentSection(index)}
                    >
                        <h2
                            className={`text-lg sm:text-sm md:text-normal lg:text-lg w-1/2 text-center ${currentSection === index ? 'font-bold' : 'text-gray-500'} mb-1`}
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
                <ul className="list-disc list-inside space-y-3">
                    <h3 className="font-semibold text-md mb-2">{sectionDescriptions[currentSection].header}</h3>
                    {sectionDescriptions[currentSection].details.map((desc, index) => (
                        <li key={index} className="text-gray-600 text-md pl-5">{desc}</li>
                    ))}
                    <p className="text-[9px] mt-5">{sectionDescriptions[currentSection].detailClarification}</p>
                </ul>
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
