import React from 'react';
import '../styles/StepsTimeLine.css';
import StepBar from '../assets/stepBar.svg';
import heroVideo from '../assets/video/showCaseVideo.mp4';

// Define the type for each step item
interface Step {
    id: number;
    title: string;
    description: string;
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
        <section className="stepsTimeLineBackimg text-white">
            <div className="flex flex-col lg:flex-row">
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
            </div>
            <div className="flex justify-center px-[20px] mx-auto py-10 md:py-[100px]">
                <video
                    className="object-cover rounded-3xl border-4 md:border-8 border-[#D0D5DD] w-full md:w-[70%] h-full"
                    autoPlay
                    muted
                    loop
                    preload="metadata"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};
