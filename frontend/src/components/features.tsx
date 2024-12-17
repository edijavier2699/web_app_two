import { FeaturesCard } from './featuresCard'; // Importa correctamente el archivo .tsx

export const Features = () => {
    return (
        <section className="mt-[60px] pb-[120px] featuresSection  mx-[20px] md:mx-[60px] border-b">
            <p className="text-3xl font-bold text-gray-800 mb-4">What we offer</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <FeaturesCard 
                    icon="Feature2" 
                    title="Premium "
                    secondTitle='Real Estate'
                    description="Access diverse properties across asset classes, risk profiles, and markets to build a portfolio focused on compelling, risk-adjusted returns, while leveraging strategic diversification for stability and growth."
                />
                <FeaturesCard 
                    icon="Feature4" 
                    title="Tax Efficient Reinvestment"
                    description="Reinvest real estate value into premium opportunities with Tokunize, strategically optimizing your portfolio tax-efficiently while preserving capital for sustainable long-term growth."
                />
                <FeaturesCard 
                    icon="ChartBar" 
                    title="Effortless Portfolio Diversification "
                    description="Build a diversified real estate portfolio with Tokunize, enabling direct asset-to-asset transactions, fractional investing, and efficient risk reduction without traditional barriers. "
                />
                <FeaturesCard 
                    icon="Feature1" 
                    title="Liquidity Management"
                    description="Effortlessly sell fractional economic rights with transparent liquidity, real-time pricing, and secure transactions—reallocate investments or access capital without traditional real estate delays."
                />
            </div>
        </section>
    );
};
