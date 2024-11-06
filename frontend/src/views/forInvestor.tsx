import { HowItWorksSteps } from "@/components/howItWorksSteps";
import singUpImage from "../assets/signUpInvestor.webp"
import earnImage from "../assets/earnImage.webp"
import investImage from "../assets/investImage.webp"
import ourTech from "../assets/ourTech2.png"
import { TokunizeAdvantages } from "@/components/tokunizeAdvantages";
import { FaChartPie } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

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


const HowItWorksCard: React.FC<{ title: string; description: string; icon: React.ReactElement; index: number }> = ({ title, description, icon, index }) => {
    return (
        <div key={index} className="rounded-lg flex flex-col items-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-black p-6 text-center">
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


export const ForInvestor = () =>{
    return(
        <section>
            <h4 className="font-bold text-4xl sm:text-5xl mt-10 mb-2 text-center">Tokunize For Investors</h4>
            <p className="text-gray-500  md:text-center pb-5 sm:w-[65%] px-[20px] mx-auto">Tokunize is a next generation commercial real estate investment platform. On our marketplace you will find investments across asset classes, risk profiles, and markets, and strive to list premium CRE assets to allow you to build portfolio optimised for risk-adjusted returns, our users include endowments, foundations, wealth managers, family offices, independent financial advisors and individual investors.</p>

            <div className="min-h-[75vh]">
                <HowItWorksSteps
                sectionTitles={sectionTitles}
                sectionDescriptions={sectionDescriptions}
                sectionImages={sectionImages}
            />
            </div>
           <TokunizeAdvantages componentFor="investors"/>
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
                        <HowItWorksCard index={index} icon={card.icon} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}