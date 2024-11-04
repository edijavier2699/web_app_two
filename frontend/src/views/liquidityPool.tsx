import { MyButton } from "@/components/signUpBtn";
import { useNavigate } from "react-router-dom";
import liquidityPool from "../assets/liquidityPool.png"
import { FaEthereum } from "react-icons/fa";
import tokunize from "../assets/logo_only_black.png"
import { AccordionItem } from "@/components/myAccordion";
import { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaArrowTrendDown } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { ContactModal } from "@/components/contactModal";
import liquidityPoolBack from "../assets/liquidityPoolBack.png"


// Datos de las tarjetas
const liquidityPoolCards = [
    {
        title: "Secure Asset Class with Steady Returns",
        description: "Leverage your crypto holdings to enter the world’s largest wealth-building asset—real estate—with consistent, stable returns.",
        icon: <GiPadlock className="text-[#C8E870] "/>,
    },
    {
        title: "Profits from Marketplace Activity",
        description: "As trading activity increases on the Tokunize marketplace, so do your returns, allowing you to benefit from every transaction.",
        icon: <AiOutlineStock className="text-[#C8E870] "/>,
    },
    {
        title: "Full Transparency",
        description: "Enjoy a decentralized, transparent platform with access to all data points for each asset, fostering a trustworthy environment for investors.",
        icon: <VscWorkspaceTrusted  className="text-[#C8E870] "/>,
    },
    {
        title: "Reduced Impermanent Loss",
        description: "Unlike crypto volatility, real estate operates within a stable, real-world value range—anchored in the $100-120 trillion global real estate market.",
        icon: <FaArrowTrendDown className="text-[#C8E870] " />,
    },
];

const LiquidityPoolBlock: React.FC<{ title: string; description: string; icon: React.ReactElement; index: number }> = ({ title, description, icon, index }) => {
    return (
        <div key={index} className="rounded-lg flex flex-col items-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 bg-black p-6 text-center">
            <div className="text-5xl pb-5 text-center">{icon}</div>
            <h5 className="text-xl text-white font-semibold mb-2">{title}</h5>
            <p className="text-gray-600 text-white">{description}</p>
        </div>
    );
};



// Componente principal
export const LiquidityPool = () => {

    const getStartedLink = () => {
        navigate("/request-invitation/");
    };

    const [openIndex, setOpenIndex] = useState<number | null>(1);
    const navigate = useNavigate();

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-[20px] md:mx-[60px] py-10">
           <header className="relative mx-[-20px] md:mx-[-60px]  flex flex-col items-center justify-start h-[87vh] bg-cover bg-center text-center mb-10">
                <h4 className="text-5xl md:text-[75px] font-bold mb-4 mt-[70px] text-animated-gradient max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
                    Instant liquidity in real estate is here
                </h4>
                <span className="font-semibold text-xl sm:text-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]">
                    Merging DeFi with Real Estate Stability
                </span>
                <p className="text-gray-500 mb-6 max-w-[90%] text-md sm:text-normal mt-3 sm:max-w-[80%] lg:max-w-[50%] mx-auto">
                    Experience real estate liquidity pools, powered by Ethereum, combining the resilience of real estate with the dynamic upside of DeFi.
                </p>
                <MyButton label="Get Started" parentMethod={getStartedLink} />
                
                <img src={liquidityPoolBack} className="absolute bottom-0 left-0 w-full h-[400px] object-cover sm:h-[300px] md:h-[350px] lg:h-[400px]" />
            </header>


            <main >
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h4 className="text-5xl font-semibold text-gray-800 mb-6">Reimagining Real Estate Investing</h4>
                <p className="text-gray-600 text-lg mt-2 mb-6">
                    Explore new possibilities in real estate investments with secure and transparent solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full ">
                    {liquidityPoolCards.map((card, index) => (
                        <LiquidityPoolBlock 
                            key={index} 
                            title={card.title} 
                            description={card.description} 
                            icon={card.icon} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
            {/* Sección de beneficios adicionales */}
            <div className="mt-16 flex flex-col md:flex-row h-[400px] items-center text-center md:text-left">
                <div className="md:w-1/2 md:pl-8">
                    <h4 className="text-3xl font-semibold text-gray-800 mb-6">
                        Combining DeFi & Real Estate to Deliver <span className="text-animated-gradient">Instant Liquidity </span>  & <span className="text-animated-gradient"> Enhanced Returns</span>
                    </h4>
                    <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                        Tokunize’s secondary market is evolving from a traditional order book model to a liquidity pool structure, enabling faster transactions and scalability as each new pool opens.
                    </p>
                </div>
                <div className="md:w-1/2 h-full flex items-center rounded-lg p-7 bg-black">
                <h4 className="text-4xl font-bold text-animated-gradient  text-center ">Enabling the world’s most liquid <br/> commercial real estate trading ever.</h4>
                </div>
            </div>

            <div className="flex flex-col my-12 md:flex-row items-center text-center md:text-left"> 
                <div className="md:w-1/2 bg-black rounded-lg">
                <img src={liquidityPool} alt="Descripción de la imagen" className="w-full object-cover  h-[400px] rounded-lg" />
                </div>     
                <div className="md:w-1/2 md:pl-8">
                    <h4 className="text-3xl font-semibold text-gray-800 mb-6">
                       Tokunize Trade: <span className="text-animated-gradient"> Unprecedented Liquidity </span> in Real Estate
                    </h4>
                    <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                        Transforming a traditionally illiquid market. Real estate investing used to mean limited options with significant downsides. Tokunize is redefining what's possible.
                    </p>
                    <p className="text-gray-600 font-bold mb-6 max-w-3xl mx-auto">
                        Grow your wealth with fractional real estate and effortless trading.
                    </p>
                </div>
                
            </div>
            <div className="flex flex-col items-center text-center py-10 mb-12 bg-gray-50 rounded-lg">
                <h4 className="text-6xl font-bold mb-4">Let Your Crypto Work for You</h4> {/* Aumentar tamaño y margen inferior */}
                <div className="flex flex-row items-end  space-x-[100px] mb-6"> {/* Espacio entre imágenes */}
                    <div className="flex flex-col items-center">
                        <img alt="Tokunize" src={tokunize} className="my-2 h-16" />
                        <span className="font-semibold text-lg">Tokunize</span> {/* Tamaño de fuente para el título */}
                    </div>
                    <MyButton
                    label="Get Started"
                    parentMethod={getStartedLink}
                    />
                    <div className="flex flex-col items-center">
                        <FaEthereum className="text-3xl my-2 h-16" />
                        <span className="font-semibold text-lg">Ethereum</span> {/* Tamaño de fuente para el título */}
                    </div>
                </div>
            </div>
        </main>
        <footer className="flex flex-col md:flex-row ">
            <div className="sticky top-0 h-[fit-content] z-10 bg-white p-4"> {/* Asegúrate de tener un fondo y suficiente espacio */}
                <h4 className="text-3xl font-bold">Still have questions?</h4>
                <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <ContactModal />
            </div>
            <div className="md:w-2/3">
            <AccordionItem
                    title="What is Tokunize Trade"
                    content="Tokunize Trade serves as a decentralized liquidity pool, aggregating contributions from anonymous sources to support seamless property trading within the Tokunize Marketplace. Powered by an automated market maker (AMM), Tokunize Trade allows property prices to be set dynamically through algorithmic adjustments, bypassing traditional order books. This setup maintains fluid market transactions, with prices automatically fine-tuned in response to shifts in supply and demand."
                    isOpen={openIndex === 1}
                    onClick={() => toggleOpen(1)}
                />
            <AccordionItem
                    title="Why Contribute Liquidity?"
                    content="When you add funds to the liquidity pool (LP), you are issued LP tokens, which entitle you to a share of the fees generated by the AMM on the Tokunize Marketplace. Holding LP tokens allows you to earn passive income, with potential returns averaging 5%+ APY, varying by property pool. You can access and withdraw both your initial contribution and accumulated yield from the pool at any point."
                    isOpen={openIndex === 2}
                    onClick={() => toggleOpen(2)}
                />
            <AccordionItem
                    title="Getting Started"
                    content="To begin, click the Get Started button on this site, which will direct you to the liquidity pool dashboard, where you can connect your wallet. For those interested in investing in specific properties, head over to the Tokunize Marketplace for further options."
                    isOpen={openIndex === 3}
                    onClick={() => toggleOpen(3)}
                />
            <AccordionItem
                    title="Which Networks Will Tokunize Trade Support?"
                    content="Tokunize Trade will initially launch on the Ethereum network, with plans to expand to additional networks in 2025."
                    isOpen={openIndex === 4}
                    onClick={() => toggleOpen(4)}
                />
             <AccordionItem
                    title="How Does the Automated Market Maker (AMM) Operate?"
                    content="Tokunize utilizes a Proactive Market Maker (PMM) [Proactive Market Maker (PMM)] model for its AMM, an advanced approach originally developed by the decentralized trading protocol DODOEX (DODOEX), which has handled over $113 billion in trading volume. We chose this innovative PMM framework to address the limitations of traditional AMM models (limitations of legacy AMM methodologies), ensuring efficient trading while minimizing potential impairment loss for liquidity providers. The Tokunize Trade pool’s PMM is tailored specifically for real-world asset constraints. Only KYC-verified users can stake real estate ownership, while non-KYC users may only access the USDC side of the pools. Rewards are exclusively paid out in USDC, with real estate ownership restricted to full property tokens only, although fractional USDC amounts are allowed."
                    isOpen={openIndex === 5}
                    onClick={() => toggleOpen(5)}
                />
             <AccordionItem
                    title="What is Tokunize Trade?"
                    content="Tokunize Trade serves as a decentralized liquidity pool, aggregating contributions from anonymous sources to support seamless property trading within the Tokunize Marketplace. Powered by an automated market maker (AMM), Tokunize Trade allows property prices to be set dynamically through algorithmic adjustments, bypassing traditional order books. This setup maintains fluid market transactions, with prices automatically fine-tuned in response to shifts in supply and demand."
                    isOpen={openIndex === 6}
                    onClick={() => toggleOpen(6)}
                />
                <AccordionItem
                    title="Is There a Liquidity Pool for Each Property on Tokunize?"
                    content="Yes, every property listed in the Tokunize Marketplace will have its own dedicated liquidity pool, each featuring its unique LP tokens. These pools will always contain two assets and generate two distinct sets of LP tokens. Tokunize does not provide a staking-as-a-service model; instead, users are free to choose their preferred liquidity pools based on each pool's unique economics, asset performance, and risk profile. Detailed property information, including performance metrics and financials, is accessible under the  Details, Financials, and Documents tabs on each property page in the marketplace."
                    isOpen={openIndex === 7}
                    onClick={() => toggleOpen(7)}
                />
                <AccordionItem
                    title="Does Joining a Liquidity Pool Make Me a Property Owner?"
                    content="No, participating in a liquidity pool does not grant property ownership. You may choose to directly invest in a specific property to gain ownership through the Tokunize Marketplace. If you already hold property tokens, you also have the option to stake them in the liquidity pool to earn additional returns."
                    isOpen={openIndex === 8}
                    onClick={() => toggleOpen(8)}
                />
                <AccordionItem
                    title="Who Owns the Properties Traded on Tokunize?"
                    content="All properties listed on the Tokunize Marketplace are owned by a DAO LLC, comprising numerous anonymous investors, with no individual investor holding more than 20% of any property. Properties are managed by professional property managers, appointed by the owners, and all decisions are governed collectively by token holders through a decentralized voting system."
                    isOpen={openIndex === 9}
                    onClick={() => toggleOpen(9)}
                />
            </div>
        </footer>
    </section>
    );
};
