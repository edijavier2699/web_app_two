import React from 'react';
import { FeaturesCard } from './featuresCard'; // Importa correctamente el archivo .tsx

export const Features: React.FC = () => {
    return (
        <section className="my-[60px] featuresSection">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <FeaturesCard 
                    icon="Globe" 
                    title="Transparent Investment Tracking"
                    description="Provide real-time dashboards where you can monitor the performance of their investments"
                />
                <FeaturesCard 
                    icon="Chart" 
                    title="Diversify and Minimise Risks"
                    description="Spread your investments across multiple properties"
                />
                <FeaturesCard 
                    icon="Bolt" 
                    title="Enhance Flexibility"
                    description="Easily adjust your investments to suit changing needs"
                />
            </div>
        </section>
    );
};
