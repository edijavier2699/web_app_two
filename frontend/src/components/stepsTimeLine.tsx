import React from 'react';
import '../styles/StepsTimeLine.css';
import StepBar from '../assets/stepBar.svg';
import workFlow from "../assets/workFlow.svg"
import Lottie from 'react-lottie-player';
import Animation from "../assets/animation.json"
import diagram1 from "../assets/diagram_1.svg"
import diagram2 from "../assets/diagram_2.svg"
import diagram3 from "../assets/diagram_3.svg"
import diagramLogo from "../assets/diagram_logo.svg"

// Define the type for each step item
interface Step {
    id: number;
    title: string;
    description: string;
}

interface StepsCardProps {
    icon: string;
    title: string;
    description: string;
    size?: string;  // Agregamos una prop opcional para el tamaño
}

export const StepsCard: React.FC<StepsCardProps> = ({ icon, title, description }) => {
    return (
        <article className='text-center flex flex-col items-center  justify-center z-3 sm:text-left'>
            <img alt='diagram-image' src={icon} className='h-24 mb-3' />
            <h4 className='font-bold text-[#C8E870]'>{title}</h4>
            <p className='text-[#EBFABE] lg:w-[70%] '>{description}</p>
        </article>
    );
};


// Define the type for the component props if needed (not required here as there are no props)
export const StepsTimeLine: React.FC = () => {
    // STEPS DATA
    const steps: Step[] = [
        {
            id: 1,
            title: "Secure Rental Income",
            description: "We partner with property owners to guarantee rental income, backed by thorough research and due diligence."
        },
        {
            id: 2,
            title: "Convert to Tradeable Tokens",
            description: "We turn guaranteed rental income into digital tokens, representing a portion of the property's future income."
        },
        {
            id: 3,
            title: "Buy and Earn Passive Income",
            description: "Buy tokens on our marketplace in just a few clicks and earn monthly passive income, without the hassle of property management."
        },
        {
            id: 4,
            title: "Sell or Hold",
            description: "Sell your tokens anytime or hold them to continue earning passive income, all within our secure and user-friendly platform."
        }
    ];
    

    return (
        <section className="stepsTimeLineBackimg px-[20px] sm:px-[80px] py-[72px] md:py-[112px] text-white">
            <header className="flex flex-col lg:flex-row">
                <div className="w-full h-full lg:w-1/2  mb-[80px] lg:sticky lg:top-0 ">
                    <p className="font-bold text-[#A0CC28] mb-5">How It Works</p>
                    <h2 className="text-4xl md:text-7xl font-medium">
                        Invest in Rental <br />  Properties,  <br /> Without the Headache
                    </h2>
                </div>
                
                <div className="w-full lg:w-1/2">
                    {steps.map((item) => (
                        <article key={item.id} className="mb-5 flex flex-row sm:flex-row p-2">
                            <img src={StepBar} alt="Step bar" className="mb-4 sm:mb-0 sm:mr-4" />
                            <div>
                                <h3 className="text-3xl sm:text-3xl font-bold mb-3">{item.title}</h3>
                                <p className="font-light text-base sm:text-xl">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </header>
            <main className="bg-[#121212] p-[56px] border-2 border-[#375B0B] rounded-2xl relative">
                <div className="flex flex-col sm:flex-row justify-between">
                    <p className="text-[#82A621] font-semibold mb-4 sm:mb-0">How We Operate</p>
                    <p className="hidden lg:block lg:w-[40%] text-[#98A2B3]">
                    SPV* <br />
                    A special purpose vehicle (SPV) is a subsidiary created for a specific business purpose, often used in structured finance, joint ventures, property deals, or to isolate risks and assets from the parent company.
                    </p>
                </div>
                <div className='relative'>
                <div className="absolute block lg:hidden inset-0 flex justify-center z-0">
                    <div className="w-[2px] bg-[#375B0B] border-dotted h-full"></div>
                </div>
                <div className="relative">
                    <div className="grid xl:space-x-4 relative z-10">
                        <div className="col-start-1 lg:col-start-2 col-span-1 text-center w-full bg-[#121212] mt-[60px]">
                            <StepsCard 
                                icon={diagram1}
                                title="Create Partnerships"
                                description="We collaborate with property owners to secure a guaranteed income stream in exchange for instant liquidity."
                            />
                        </div>
                        <div className="col-start-1 lg:col-start-4 col-span-1 text-center w-full bg-[#121212] mt-[60px] ">
                            <StepsCard 
                                icon={diagram2}
                                title="Establish a Secure Structure"
                                description="We create a Special Purpose Vehicle (SPV) to hold the rental income paid in, ensuring a secure and transparent investment structure."
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 xl:space-x-4 relative z-10">
                        <div className="col-start-1  lg:col-start-2 col-span-1 text-center w-full bg-[#121212] mt-[60px]">
                            <StepsCard
                                icon={diagram3} 
                                title="Tokenize the SPV"
                                description="We tokenize the SPV, which means we create digital tokens that represent ownership of the guaranteed income stream."
                            />
                        </div>
                        <div className="col-start-1 lg:col-start-4 col-span-1  w-full bg-[#121212] mt-[60px] ">
                        <StepsCard
                            icon={diagramLogo}
                            title="Tokenize the SPV"
                            description="We tokenize the SPV, which means we create digital tokens that represent ownership of the guaranteed income stream."
                        />
                        </div>
                    </div>
                </div>
            </div>                
            <p className="w-full lg:hidden mt-[40px] text-[#98A2B3]">
                SPV* <br />
                A special purpose vehicle (SPV) is a subsidiary created for a specific business purpose, often used in structured finance, joint ventures, property deals, or to isolate risks and assets from the parent company.
            </p>
            </main>

            <footer className="flex flex-col items-center justify-center px-[20px] mx-auto py-10 md:py-[100px]">
                <h2 className='text-center mb-5 font-bold text-[30px]  sm:text-[40px] md:text-[60px] lg:text-[70px]'>Start Investing with Just a Small Amount</h2>
                <Lottie
                    className="animatedVideo"
                    loop
                    animationData={Animation}
                    play
                    style={{ width:"50%", height: "50%" }}
                />
                <h4 className='text-center mt-5 font-bold text-[30px]  sm:text-[40px] md:text-[60px] lg:text-[70px]'>Enjoy the Freedom to Buy and Sell Anytime</h4>
            </footer>
        </section>
    );
};
