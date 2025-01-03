import { useNavigate } from "react-router-dom";
import { MyButton } from "./signUpBtn";
import forInvestorImage from "../assets/LegalStructure.png";

export const TokunizeAdvantages = () => {
    const navigate = useNavigate();

    const getStartedLink = () => {
        navigate("/request-invitation/");
    };

    return (
        <article className="min-h-screen flex flex-col my-12 text-gray-800">
            <h4 className=" text-3xl sm:text-4xl sm:text-center  font-semibold text-black mb-3 mx-5  md:px-0">Our Unfair Advantage</h4>
            <p className="text-gray-500 md:text-center pb-5 md:w-[60%] lg:w-[45%]  mx-auto mb-5 px-5 md:px-0">Combining full legal compliance with tax-efficient reinvestment and seamless asset-to-asset transactions in premium commercial real estate.</p>

            {/* Section 1 */}
            <section className="flex flex-col lg:flex-row items-center px-[20px] md:px-[60px] bg-black">
                <aside className="w-full lg:w-1/2 py-[120px] px-5 space-y-4 sm:space-y-6 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-animated-gradient">Regulatory Compliant & Legally Secure</h3>
                    <p className="text-white leading-relaxed">
                        Every property listed on our platform is owned by an LLP, ensuring full compliance with fractional real estate regulations. As an investor in collateralized tokens, you hold the economic rights to the asset, including its income and appreciation.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-white">
                        <li><span className="font-semibold">Buy Tokens:</span> Secure your proportional share in the LLP.</li>
                        <li><span className="font-semibold">Earn & Grow:</span> Receive rental income and benefit from potential asset value growth.</li>
                        <li><span className="font-semibold">Professional Management:</span> Daily operations are handled by vetted property management experts. </li>
                        <li><span className="font-semibold">Flexible Trading:</span> Trade your tokens easily on our marketplace when needed.</li>
                    </ul>
                    <p className="text-animated-gradient text-lg font-bold leading-relaxed">
                        Invest confidently with a secure, seamless, and flexible way to participate in premium real estate opportunities.
                    </p>
                </aside>
                <div className="w-full lg:w-1/2 min-h-[800px] flex justify-center lg:justify-end">
                    <img
                        loading="lazy"
                        alt="Legal compliance illustration"
                        src={forInvestorImage}
                        className="h-[800px] object-contain"
                    />
                </div>
            </section>


            {/* CTA Section */}
            <div className="bg-gray-100 py-8 px-6 sm:px-10 flex flex-col items-center text-center">
                <p className="text-xl sm:text-2xl md:text-3xl  lg:text-5xl sm:w-[70%]  font-bold text-gray-800 mb-4">Use the Value of Your Asset to Invest in New Real Estate Opportunities.</p>
                <MyButton
                    label="Get Started"
                    parentMethod={getStartedLink}
                />
            </div>
        </article>
    );
};

