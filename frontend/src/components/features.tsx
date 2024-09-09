import React from 'react';
import { FeaturesCard } from './featuresCard'; // Importa correctamente el archivo .tsx

export const Features: React.FC = () => {
    return (
        <section className="mt-[60px] pb-[120px] featuresSection  mx-[20px] sm:mx-[80px] border-b">
            <p className="mb-[40px] font-semibold">What we offer</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <FeaturesCard 
                    icon="Feature1" 
                    title="Instant Liquidity"
                    description="Tokens can be traded instantly on a secondary marketplace, offering real-time liquidity options that individual property REITs typically lack."
                />
                <FeaturesCard 
                    icon="Feature2" 
                    title="Transparency"
                    description="Blockchain ensures every transaction is secure and transparent, providing investors with real-time data on property performance, unlike traditional REITs."
                />
                <FeaturesCard 
                    icon="Feature3" 
                    title="Lower Fees"
                    description="We minimise management fees and transaction costs that can erode returns in REITs, offering a more cost-effective alternative with direct exposure to both rental income and capital appreciation."
                />
            </div>
        </section>
    );
};
