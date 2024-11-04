
import { HowItWorksSteps } from "@/components/howItWorksSteps";
import singUpImage from "../assets/ownerSignUp.webp"
import earnImage from "../assets/ownerEarn.webp"
import investImage from "../assets/ownerWithdraw.webp"
import ourTech from "../assets/ourTech2.png"
import { TokunizeAdvantages } from "@/components/tokunizeAdvantages";
import { FaChartPie } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

const sectionTitles = ["Sign Up", "Sell", "Earn"];
const sectionDescriptions = [
    {
        header: "Set Up Your Tokunize Account",
        details: [
            "Verify Your Identity: Pass KYC checks and accreditation approval.",
            "Begin Listing Assets Today.",
        ]
    },
    {
        header: "Sell full or partial equity in an asset at the price you want.",
        details: [
            "£1.5bn in accredited and institutional investors to sell to.",
            "Sell investments quickly - 2 weeks to close.",
            "Efficient & Hassle Free: No inconvenient showings and multiple inspections.",
            "We take care of the legals, accounting, and payment settlement all in one place"
        ],
    },
    {
        header: "Track Your  Performance",
        details: [
            "Monitor performance and track your sales in real-time with detailed insights.",
            "Build a real estate portfolio tailored to your long terms goals.",
            "Unique Tax Advantages.",
            "Ongoing portfolio reviews with your personal AI Agent"
        ],
    }
];

const tokunizeProcess = [
    {
        title: "Only Premium CRE",
        icon: <FaChartPie/>,
        description: "Tokunize receives property submissions from a broad network of brokers, developers, and other professionals - often off-market. Tokunize’s experienced Investments team onboards assets poised for long-term growth. We spend hundreds of hours sourcing, underwriting and structuring each investment, listing only ~0.1% of all opportunities we review from developers and asset owners. "  
    },
    {
        title: "Rigorous Due Diligence",
        icon: <IoDocumentText/>,
        description:"Our team puts each potential property through its paces, completingcomprehensive due diligence checks that includes detailed underwriting, site visits, legal structuring, and third-party valuation. Most opportunities do not make it past this stage. "
    },
    {
        title: "Multi-Step Approval Process",
        icon: <MdOutlineSecurity/>,
        description: "Our Due Diligence team reviews each proposed listing multiple times prior to listing on the Marketplace, providing a deeply experienced layer of protection for investors. Once our extensive vetting has been completed and approvals have been secured, Tokunize executes on listing the asset on the Marketplace."
    }
];


const HowItWorksCard: React.FC<{ title: string; description: string; icon: React.ReactElement; }> = ({ title, description, icon }) => {
    return (
        <div className="rounded-lg flex flex-col items-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-black p-6 text-center">
            <div className="text-5xl pb-5 text-center text-[#C8E870]">{icon}</div>
            <h5 className="text-xl text-white font-semibold mb-2">{title}</h5>
            <p className="text-gray-600 text-white">{description}</p>
        </div>
    );
};




const sectionImages = [
    singUpImage,
    investImage,
    earnImage
];

export const ForOwners = () =>{
    return(
        <section>
             <h4 className="font-bold text-4xl sm:text-5xl mt-10 mb-2 text-center mx-[20px] md:mx-[60px]">Tokunize For Assets Owners</h4>
             <p className="text-gray-500 text-center pb-5  sm:w-[65%] mx-auto mx-[20px] md:px-[60px]">Tokunize makes it beyond simple to sell equity in your asset with minimal friction and a low fee of only 0.5%. No more dealing with banks, lenders, agents, title companies, closing costs, and more. The process couldn’t be simpler and faster. We’ve launched properties on the Marketplace within the same week as having the initial call with an asset owner, and everything is facilitated for you via our white-glove service.</p>
            <HowItWorksSteps
                sectionTitles={sectionTitles}
                sectionDescriptions={sectionDescriptions}
                sectionImages={sectionImages}
            />
            <TokunizeAdvantages componentFor="owners"/>

            <div className="flex flex-col my-12 space-y-5 px-[20px] md:px-[60px]">
                <h4 className="text-4xl font-semibold">Our Technology</h4>
                <p className=" text-gray-500 md:w-[60%] mb-4">
                    Tokunize leverages cutting-edge technology to streamline real estate investments, ensuring compliance, efficiency, and optimal performance.
                </p>
                <div className="text-center">
                   <img className='h- w-[80%]  mx-auto object-cover' loading="lazy" alt='Our Technology' src={ourTech} />
                </div>
            </div>
            <div className="flex flex-col space-y-5 px-[20px] md:px-[60px]  ">           
                <h4 className="text-4xl font-semibold">Invest With Confidence</h4>
                <p className=" text-gray-500 md:w-[60%]  mb-4">
                    With Tokunize, every investment is backed by innovation, rigorous standards, and a commitment to transparency.                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {tokunizeProcess.map((card, index) => (
                        <HowItWorksCard icon={card.icon} key={index} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}