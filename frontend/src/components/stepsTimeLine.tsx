import React from 'react';
import '../styles/StepsTimeLine.css';
import StepBar from '../assets/stepBar.svg';
import workFlow from "../assets/workFlow.svg"
import Lottie from 'react-lottie-player';
import Animation from "../assets/animation.json"

// Define the type for each step item
interface Step {
    id: number;
    title: string;
    description: string;
}

interface StepsCardProps {
    title: string;
    description: string;
  }

export const StepsCard: React.FC<StepsCardProps> = ({ title, description }) => {
    return(
        <article className='text-center flex flex-col items-center justify-center z-3 sm:text-left'>
            <img alt='' src={workFlow} className='h-16 w-16 mb-2 border-2 border-[#375B0B]  bg-[#121212] rounded-full'/>
            <h4 className='font-bold text-[#C8E870]'>{title}</h4>
            <p className='text-[#EBFABE] lg:w-[70%] '>{description}</p>
        </article>
    )
}

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
                <div className="w-full lg:w-1/2  mb-[80px]">
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
                                <h3 className="text-base sm:text-3xl font-bold mb-3">{item.title}</h3>
                                <p className="font-medium text-base sm:text-2xl">{item.description}</p>
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
                                title="Create Partnerships"
                                description="We collaborate with property owners to secure a guaranteed income stream in exchange for instant liquidity."
                            />
                        </div>
                        <div className="col-start-1 lg:col-start-4 col-span-1 text-center w-full bg-[#121212] mt-[60px] ">
                            <StepsCard 
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
                                title="Tokenize the SPV"
                                description="We tokenize the SPV, which means we create digital tokens that represent ownership of the guaranteed income stream."
                            />
                        </div>
                        <div className="col-start-1 lg:col-start-4 col-span-1 text-center w-full bg-[#121212] mt-[60px] ">
                            <StepsCard 
                                title="List on Our Platform"
                                description="We list the digital tokens on our platform, making it easy for you to invest in and trade income streams."
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

            <footer className="flex justify-center px-[20px] mx-auto py-10 md:py-[100px]">
                <Lottie
                    className="animatedVideo"
                    loop
                    animationData={Animation}
                    play
                    style={{ width:"50%", height: "50%" }}
                />
            </footer>
        </section>
    );
};
