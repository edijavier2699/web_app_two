import React from 'react';
import { FeaturesCard } from './featuresCard'; // Importa correctamente el archivo .tsx

export const Features: React.FC = () => {
    return (
        <section className="mt-[60px] pb-[120px] featuresSection  mx-[20px] md:mx-[60px] border-b">
            <p className="text-3xl font-bold text-gray-800 mb-4">What we offer</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <FeaturesCard 
                    icon="Feature2" 
                    title="Premium CRE"
                    description="Access diverse properties across asset classes, risk profiles and markets to build a portfolio focused on compelling, risk-adjusted returns."
                />
                <FeaturesCard 
                    icon="Feature3" 
                    title="Full Legal Compliance"
                    description="We utilise a decentralised autonomous organisation (DAO) structure through LLCs, created for each listed property. This ensures compliance with laws and regulations governing fractional real estate investments. "
                />
                <FeaturesCard 
                    icon="Feature1" 
                    title="Instant Liquidity"
                    description="Tokens can be traded instantly on a secondary marketplace, offering real-time liquidity options that individual property REITs typically lack."
                />
            </div>
        </section>
    );
};
