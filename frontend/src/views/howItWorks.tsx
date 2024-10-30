import { useState, useEffect } from 'react';
import singUpImage from "../assets/singUpImage.png"
import earnImage from "../assets/earnImage.png"
import investImage from "../assets/investImage.png"
import ourTech from "../assets/ourTech2.png"


const cardsData = [
    {   
        title: "Fully Compliant Legal Structure",
        description: "Invest in premium commercial real estate across multiple locations and asset classes from £1000 with fractional ownership."
    },
    {
        title: "Innovative Secondary Market",
        description: "Sell your investments on the secondary market at any time, adding unparalleled flexibility to commercial real estate investing."
    },
    {
        title: "Invest,  Diversify, and Earn",
        description: "Get weekly rent payouts (not monthly or quarterly) and collect property appreciation when you cash out."
    },
    {
        title: "Secure, Efficient and Transparent",
        description: "No lock-in periods, hidden fees, excess paperwork, 6 month closing periods, or down payments. Receive consistent, transparent reporting  per property."
    },
    {
        title: "Own Properties Without  Headaches",
        description: "Diversify your portfolio without multiplying your workload. Vote on key property decisions, and professional property managers handle the rest."
    },
    {
        title: "Maintain Full Control of your Investments",
        description: "A streamlined investment process, from sign-up to purchase, ensuring that managing your portfolio is straightforward."
    }
];

interface HowItWorksCardProps {
    title: string;
    description: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ title, description }) => {
    return (
        <div className="shadow-md  bg-[#375B0A]  hover:shadow-lg transition-shadow duration-300 rounded-lg p-6 flex flex-col items-start ">
            <h3 className="text-[35px]  text-white font-semibold mb-2 ">{title}</h3>
            <p className="text-white leading-relaxed">{description}</p>
        </div>
    );
};


const sectionTitles = ["Sign Up", "Invest", "Earn"];
const sectionDescriptions = [
    {
        header: "Set Up Your Tokunize Account",
        details: [
            "Verify Your Identity: Pass KYC checks and accreditation approval.",
            "Access Curated Investment Recommendations.",
            "Thought Leadership and Educational Content.",
        ]
    },
    {
        header: "Explore  Commercial Real Estate Investment Opportunities",
        details: [
            "Filter by type of asset, location, or risk profile.",
            "Access market data, financial data, and due diligence all in one",
            "Build a real estate portfolio tailored to your long terms goals.",
            "Unique Tax Advantages (Ongoing portfolio reviews with your Investment AI Agent)",
        ],
        detailClarification: "*Liquidity Not Guaranteed. Listing offered on the Marketplace are illiquid and there is never any guarantee that you will be able to exit your investments on the Secondary Market or at what price an exit (if any) will be achieved "
    },
    {
        header: "Track Your Investment Performance",
        details: [
            "Monitor performance and track your investments in real-time and see your investments grow with detailed insights.",
            "Sell investments instantly.",
            "Up-to-date investment performance: Instant transactions and withdrawals.",
        ],
        detailClarification: "*Liquidity Not Guaranteed. Listing offered on the Marketplace are illiquid and there is never any guarantee that you will be able to exit your investments on the Secondary Market or at what price an exit (if any) will be achieved "

    }
];

const tokunizeProcess = [
    {
        title: "Only Premium CRE",
        description: "Tokunize receives property submissions from a broad network of brokers, developers, and other professionals - often off-market. Tokunize’s experienced Investments team onboards assets poised for long-term growth. We spend hundreds of hours sourcing, underwriting and structuring each investment, listing only ~0.1% of all opportunities we review from developers and asset owners. "  
    },
    {
        title: "Rigorous Due Diligence",
        description:"Our team puts each potential property through its paces, completingcomprehensive due diligence checks that includes detailed underwriting, site visits, legal structuring, and third-party valuation. Most opportunities do not make it past this stage. "
    },
    {
        title: "Multi-Step Approval Process",
        description: "Our Due Diligence team reviews each proposed listing multiple times prior to listing on the Marketplace, providing a deeply experienced layer of protection for investors. Once our extensive vetting has been completed and approvals have been secured, Tokunize executes on listing the asset on the Marketplace."
    }
];

const sectionImages = [
    singUpImage,
    investImage,
    earnImage
];


export const HowItWorks = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [fade, setFade] = useState(false);
    const [progress, setProgress] = useState(0);

    const nextSection = () => {
        setFade(true); // Start fade effect
        setTimeout(() => {
            setCurrentSection(prevValue => (prevValue < sectionTitles.length - 1 ? prevValue + 1 : 0)); // Loop back to first section
            setFade(false); // End fade effect
            setProgress(0); // Reset progress
        }, 300); // Match this duration with CSS transition duration
    };

    // Autoplay effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSection(); // Change section every 6 seconds
        }, 6000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    // Progress effect
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(prev => (prev < 100 ? prev + (100 / 30) : 100)); // Update progress every 100 ms
        }, 100);

        return () => clearInterval(progressInterval); // Cleanup interval on component unmount
    }, [currentSection]);

    return (
        <div className="px-[20px] md:px-[60px] space-y-[80px]">
            <section className="flex flex-col lg:flex-row items-center justify-center lg:h-[600px] mt-5">
                <div className="lg:w-1/2 py-4 md:p-4  h-[70%] pr-[50px] flex flex-col">
                    <div className="mb-4 flex w-[50%] justify-between items-center">
                        {sectionTitles.map((title, index) => (
                            <div key={index} className="relative cursor-pointer" onClick={() => setCurrentSection(index)}>
                                <h2 
                                    className={`text-lg ${currentSection === index ? 'font-bold' : 'text-gray-500'} mb-1`}
                                >
                                    {title}
                                </h2>
                                <div className="w-full h-1 rounded bg-[#577B14]">
                                    <div 
                                        className={`h-full rounded bg-[#C8E870] transition-all duration-300`} 
                                        style={{ width: currentSection === index ? `${progress}%` : '0%' }} 
                                    />
                                </div>
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
                <div className="lg:w-1/2 h-full flex justify-center items-center">
                    <div className={`transition-opacity h-full w-full duration-300 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'}`}>
                        <img 
                            src={sectionImages[currentSection]} 
                            alt={sectionTitles[currentSection]} 
                            className="h-full w-[80%] rounded-lg bg-white mx-auto object-contain" 
                        />
                    </div>
                </div>
            </section>

            {/* Resto del contenido */}
            <div className='space-y-[30px]  rounded-lg'>
                <h4 className="text-4xl font-semibold">The Tokunize Difference</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {cardsData.map((card, index) => (
                        <HowItWorksCard key={index} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
           
            <div className="flex flex-col space-y-5 ">
                <h4 className="text-4xl font-semibold">Our Technology</h4>
                <p className=" text-gray-500 md:w-[60%] mb-4">
                    Tokunize leverages cutting-edge technology to streamline real estate investments, ensuring compliance, efficiency, and optimal performance.
                </p>
                <div className="text-center">
                   <img className='h- w-[80%]  mx-auto object-cover' alt='Our Technology' src={ourTech} />
                </div>
            </div>

            <div className="flex flex-col space-y-5">           
                <h4 className="text-4xl font-semibold">Invest With Confidence</h4>
                <p className=" text-gray-500 md:w-[60%]  mb-4">
                    With Tokunize, every investment is backed by innovation, rigorous standards, and a commitment to transparency.                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {tokunizeProcess.map((card, index) => (
                        <HowItWorksCard key={index} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};
