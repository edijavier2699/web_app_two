import React from 'react';
import { FeaturesCard } from './featuresCard'; // Importa correctamente el archivo .tsx

export const Features: React.FC = () => {
    return (
        <section className="my-[60px] featuresSection  mx-[20px] sm:mx-[80px]">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <FeaturesCard 
                    icon="Globe" 
                    title=" See Your Money Grow"
                    description="Get real-time updates on your rental income, so you can track your returns and make informed decisions."
                />
                <FeaturesCard 
                    icon="Chart" 
                    title="Diversify with Ease"
                    description="Spread your investments across multiple properties, reducing risk and increasing potential returns."
                />
                <FeaturesCard 
                    icon="Bolt" 
                    title="Invest on Your Terms"
                    description="Buy and sell tokens easily, without the need for lawyers, paperwork, or hefty fees, so you can adapt to changing market conditions."
                />
            </div>
        </section>
    );
};
