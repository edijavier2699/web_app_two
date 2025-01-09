import { HowItWorksSteps } from "@/components/howItWorksSteps";
import singUpImage from "../assets/signUpInvestor.webp"
import earnImage from "../assets/earnImage.webp"
import investImage from "../assets/investImage.webp"
import ourTech from "../assets/ourTech.png"
import { TokunizeAdvantages } from "@/components/tokunizeAdvantages";
import { FaChartPie } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import tokunizeIlustration from "../assets/TokunizeVideo.mp4"
import LazyVideo from "@/components/LazyLoading";

const sectionTitles = ["Sign Up", "Invest & Sell", "Earn"];

const tokunizeProcess = [
    {
        title: "Only Premium CRE",
        icon: <FaChartPie />,
        description: "Our marketplace features assets sourced from a network of family offices, HNWIs, institutional owners, and developers who own premium commercial real estate. Tokunize’s team rigorously evaluates each asset’s potential for long-term growth. Out of countless submissions, only a select few meet our strict standards for listing, ensuring access to exceptional opportunities."
    },
    {
        title: "Rigorous Due Diligence",
        icon: <IoDocumentText />,
        description: "Every asset on our platform undergoes a thorough due diligence process, including in-depth analysis, legal structuring, and third-party validations. This ensures that only high-quality assets make it to the marketplace, giving you the confidence to invest with peace of mind."
    },
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

export const ForInvestor = () => {
    return (
        <section>
            <h4 className="font-bold text-4xl sm:text-5xl mt-10 mb-4 text-center">How It Works</h4>
            <p className="text-gray-500 md:text-center pb-5  md:w-[75%] px-[20px] mx-auto">Tokunize is a platform for tokenizing premium commercial real estate, enabling investors to own fractional economic rights in high-value properties. By facilitating asset-to-asset transactions and strategic reinvestment, Tokunize empowers investors to diversify their portfolios, optimize returns, and maintain tax efficiency—all within a seamless and innovative ecosystem.</p>

            <div className="min-h-[75vh]">
                <HowItWorksSteps
                    sectionTitles={sectionTitles}
                    sectionImages={sectionImages}
                />
            </div>

            {/* Video Section */}
                <div className="flex flex-col items-center my-12  space-y-5 px-[20px] md:px-[60px]">
                    <h4 className="text-4xl text-center font-semibold">Watch Tokunize in Action</h4>
                    <p className="text-gray-500 md:w-[60%] mb-4 text-center">
                        Discover how Tokunize simplifies premium commercial real estate investments with cutting-edge technology and seamless processes.
                    </p>
                    <LazyVideo src={tokunizeIlustration} />
                </div>


            <TokunizeAdvantages />

            <div className="flex flex-col my-12 space-y-5 px-[20px] md:px-[60px]">
                <h4 className="text-4xl font-semibold">Our Technology</h4>
                <p className="text-gray-500 md:w-[60%] mb-4">
                    Tokunize leverages cutting-edge technology to streamline real estate investments, ensuring compliance, efficiency, and optimal performance.
                </p>
                <div className="text-center">
                    <img className='h- w-[80%] mx-auto object-cover' loading="lazy" alt='Our Technology' src={ourTech} />
                </div>
            </div>
            <div className="flex flex-col space-y-5 px-[20px] md:px-[60px]">
                <h4 className="text-4xl font-semibold">Invest With Confidence</h4>
                <p className="text-gray-500 md:w-[60%] mb-4">
                    With Tokunize, every investment is backed by innovation, rigorous standards, and a commitment to transparency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tokunizeProcess.map((card, index) => (
                        <HowItWorksCard index={index} key={index} icon={card.icon} title={card.title} description={card.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}
