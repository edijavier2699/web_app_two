import { MarketplaceCard } from "./marketplaceCard";

const properties = [
  {
    title: "Luxury Apartments",
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    propertyType: "Multifamily Residential",
    description: "Luxury apartments nestled in the vibrant heart of Covent Garden, offering unparalleled access to London's finest theatres, dining and shopping.",
    price: "8,650,000",
    returnAmount:"17.3",
    investmentCategory: "Opportunistic"
},
  {
    title: "Modern Office Space",
    image: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    propertyType: "Offices",
    price:  "14,980,000",
    investmentCategory: "Core",
    returnAmount:"7.8",
    description: "Modern, spacious office located in the City of London offering an open floor plan, high ceilings and premium amenities for businesses of any size."
  },
  {
    title: "AI Data Center",
    image: "https://images.unsplash.com/photo-1603573355706-3f15d98cf100?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    propertyType: "AI Data Center",
    price:  "22,320,000",
    investmentCategory: "Core",
    returnAmount:"16.5",
    description: "Premium, high-capacity data centre and facility, offering cutting-edge insfrastructure, secure connectivity and an ideal location for maximizing operational efficiency."
  }
];

export const MarketplaceRepresentation: React.FC = () => {
    return (
        <section className="px-[20px] md:px-[60px] pt-[40px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Marketplace</h1>
          <p className="text-gray-600 mb-6">
            Discover a curated selection of properties available for investment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property, index) => (
              <MarketplaceCard
                key={index} 
                returnAmount={property.returnAmount}
                propertyType={property.propertyType}
                title={property.title}
                description={property.description}
                image={property.image}
                propertyPrice={property.price}
                investmentCategory={property.investmentCategory}
                index={index}
              />
            ))}
          </div>
        </section>
      );      
};
