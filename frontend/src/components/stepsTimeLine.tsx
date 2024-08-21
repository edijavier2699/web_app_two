import React from 'react';
import '../styles/StepsTimeLine.css';
import StepBar from '../assets/stepBar.svg';
import workFlow from "../assets/workFlow.svg"

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
        <article className='text-left'>
            <img alt='' src={workFlow} className='h-16 w-16 border-2 border-[#375B0B]  bg-[#121212] rounded-full'/>
            <h4 className='font-bold text-[#C8E870]'>{title}</h4>
            <p className='text-[#EBFABE]'>{description}</p>
        </article>
    )
}

// Define the type for the component props if needed (not required here as there are no props)
export const StepsTimeLine: React.FC = () => {
    // STEPS DATA
    const steps: Step[] = [
        {
            id: 1,
            title: "Find the right properties",
            description: "Our collaboration with developers allows us to meticulously handpick new residential developer properties. Our research team performs thorough due diligence, evaluating each property by focusing on strategic value, potential returns, and comprehensive market analysis."
        },
        {
            id: 2,
            title: "Break it Down",
            description: "We then make these properties accessible by dividing them into smaller, affordable shares. This way, you don't need a lot of money to start."
        },
        {
            id: 3,
            title: "You Buy, Sell and Earn Rent",
            description: "Our collaboration with developers allows us to meticulously handpick new residential developer properties. Our research team performs thorough due diligence, evaluating each property by focusing on strategic value, potential returns, and comprehensive market analysis."
        },
        {
            id: 4,
            title: "Sell when the time is right",
            description: "We then make these properties accessible by dividing them into smaller, affordable shares. This way, you don't need a lot of money to start."
        }
    ];

    return (
        <section className="stepsTimeLineBackimg md:px-[80px] text-white">
            <header className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-8">
                    <p className="font-bold text-[#A0CC28]">How It Works</p>
                    <h2 className="text-4xl md:text-7xl font-medium">
                        Own Property <br /> Shares: Secure, <br /> Profitable and <br /> Hassle-Free
                    </h2>
                </div>
                <div className="w-full lg:w-1/2 p-8">
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
                <div className='flex flex-row justify-between'>
                    <p className='text-[#82A621] font-semibold'>How We Operate</p>
                    <p className='w-[20%] text-[#98A2B3]'>
                        SPV* <br />
                        A special purpose vehicle (SPV) is a subsidiary created for a specific business purpose, often used in structured finance, joint ventures, property deals, or to isolate risks and assets from the parent company.
                    </p>
                </div>

                <div className="relative">
                    <div className='absolute top-1/4 left-0 right-0'>
                        <hr className='border-t-2 border-dotted border-[#375B0B] mx-auto w-full' />
                    </div>

                    <div className="grid grid-cols-4 gap-4 my-[64px] relative z-10 ">
                        <div className="col-start-1 col-span-1 text-center">
                            <StepsCard 
                                title="Create Partnerships"
                                description="How we create partnerships with developers, how we find valuable property and so on."
                            />
                        </div>
                        <div className="col-start-3 col-span-1 text-center">
                            <StepsCard 
                                title="Create Partnerships"
                                description="How we create partnerships with developers, how we find valuable property and so on."
                            />
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className='absolute top-1/4 left-0 right-0 z-0'>
                        <hr className='border-t-2 border-dotted border-[#375B0B] mx-auto w-[77%] float-left' />
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4 mb-[80px] relative z-10">
                        <div className="col-start-2 col-span-1 text-center">
                            <StepsCard 
                                title="Create Partnerships"
                                description="How we create partnerships with developers, how we find valuable property and so on."
                            />
                        </div>
                        <div className="col-start-4 col-span-1 text-center">
                            <StepsCard 
                                title="Create Partnerships"
                                description="How we create partnerships with developers, how we find valuable property and so on."
                            />
                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex justify-center px-[20px] mx-auto py-10 md:py-[100px]">
                <img className='workflowImage'  alt='workflow-representation' src={workFlow} />
            </footer>
        </section>
    );
};
