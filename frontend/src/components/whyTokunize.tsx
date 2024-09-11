import React from "react";
import why1 from "../assets/why_1.png";
import why2 from "../assets/why_2.png";
import why3 from "../assets/why_3.png";
import why4 from "../assets/why_4.png";
import why5 from "../assets/why_5.png";

// Definimos el tipo de props que espera el componente WhyUs
interface WhyUsProps {
    number: number;
    title: string;
    description: string;
    imageTitle: string;
}

export const WhyUs: React.FC<WhyUsProps> = ({ number, title, description, imageTitle }) => {
    // Condicional para cambiar el fondo según el número
    const imageBackgroundClass = number === 3 ? "bg-[#F2F4F7]" : "bg-[#F5FFDC]";

    return (
        <article
            className={`flex flex-col sm:flex-row items-start justify-between gap-3 py-6 my-[40px]  sm:my-[100px] ${
                number % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
        >
            <div className="sm:w-[45%]">
                <span className="flex mb-3 items-center justify-center w-6 h-6 rounded-full bg-[#EAFBBE] text-sm text-gray-800">
                    {number}
                </span>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-5">{description}</p>
            </div>

            {/* Imagen */}
            <div className={`w-full sm:w-[45%] ${imageBackgroundClass} rounded-lg flex pt-3 pl-3 pr-3 items-center justify-center`}>
                <img
                    src={imageTitle}
                    alt="why-us-image"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>

        </article>
    );
};

// Componente principal WhyTokunize
export const WhyTokunize: React.FC = () => {
    return (
        <section className="px-8 md:px-[80px] pt-[120px] py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-6xl font-bold  mb-4">Why Tokunize</h1>
                <p className="text-lg text-gray-600">
                    The smart way to build a commercial real estate portfolio.
                </p>
            </div>

            {/* Lista de componentes WhyUs con imágenes intercaladas */}
            <WhyUs
                number={1}
                imageTitle={why1}
                title="Liquidity through a secondary marketplace to execute buy and sell offers."
                description="List tokens on the secondary marketplace and field offers from a wide network of investors. Reselling to Tokunize and outright asset sale offer further liquidity opportunities."
            />
            <WhyUs
                number={2}
                imageTitle={why2}
                title="End-to-end account management."
                description="Create a secure account that is protected by powerful KYC/AML screening tools and allows you to customise notification preferences to manage alerts for offers and your priority listings. Your account always maintains a full history of transactions for complete traceability."
            />
            <WhyUs
                number={3}
                imageTitle={why3}
                title="Secure and seamless cash in and out wallet (USDC to GBP or USD)."
                description="An integrated digital wallet lets you send incoming wire transfers to fund your account, transact with confidence using USDC which is pegged 1:1 with the US dollar, and send outgoing wire transfers to convert your on-platform funds to cash."
            />
            <WhyUs
                number={4}
                imageTitle={why4}
                title="Complete portfolio management of assets."
                description="A portfolio provides a comprehensive view of your investments. Track your portfolio’s growth alongside market comparables as Tokunize refreshes market data, and deep dive into your investments to zone in on property-level activity and transaction options."
            />
            <WhyUs
                number={5}
                imageTitle={why5}
                title="Dashboard and market analytics."
                description="Access all the features you need to manage your commercial real estate investments and potential acquisitions with a single click. Updated market data on commercial real estate values fuel every view, providing insights that let you take action."
            />
        </section>
    );
};
