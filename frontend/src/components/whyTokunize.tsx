import React from "react";
import why1 from "../assets/why_1.png";
import why3 from "../assets/premiumRCE.png";
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
    const imageBackgroundClass = "bg-[#F5FFDC]";

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
                <h3 className="text-3xl sm:text-xl md:text-2xl lg:text-3xl  font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-5">{description}</p>
            </div>

            {/* Imagen */}
            <div className={`w-full sm:w-[45%] ${imageBackgroundClass} rounded-lg flex pt-3 pl-3 pr-3 items-center justify-center`}>
                <img
                    loading="lazy"
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
        <section className="px-[20px] md:px-[60px] pt-[120px] py-12">
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
                title="Capital Preservation Through Tax Efficiency "
                description="Reallocate the value of your existing real estate assets into new opportunities without the burden of immediate capital gains taxes or stamp duty. Tokunize allows you to optimize your portfolio while preserving more of your capital for future growth. "
            />
            <WhyUs
                number={2}
                imageTitle={why5}
                title="Strategic Portfolio Diversification"
                description="Diversify across premium commercial real estate with precision and ease. Tokunize allows you to allocate capital into fractional ownership of high-value assets, enhancing risk management and aligning with your long-term investment goals. "
            />
            <WhyUs
                number={3}
                imageTitle={why3}
                title="Access to Exclusive Opportunities"
                description="Invest in previously off-market commercial real estate deals that were typically inaccessible. Tokunize provides a platform to participate in premium return-yielding assets, offering a unique way to enhance your portfolio. "
            />
            <WhyUs
                number={4}
                imageTitle={why4}
                title="Flexible Liquidity Management"
                description="Manage liquidity strategically without the constraints of traditional real estate. Tokunize’s tokenized marketplace offers the flexibility to rebalance your portfolio or capitalize on new opportunities when the time is right, ensuring alignment with your investment horizon. "
            />
            {/* <WhyUs
                number={5}
                imageTitle={why5}
                title="Detailed market analytics."
                description="Access all the features you need to manage your commercial real estate investments and potential acquisitions with a single click. Updated market data on commercial real estate values fuel every view, providing insights that let you take action."
            /> */}
        </section>
    );
};
