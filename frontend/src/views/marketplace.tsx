import { MarketPlacePropertyCard } from "@/components/marketPlacePropertyCard";
import { MarketplaceBanner } from "@/components/marketplaceBanner";
import { useEffect, useState, useMemo } from 'react';
import axios from "axios";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { PropertyFilters } from "@/components/propertyFilters";

// Define la interfaz Property
interface Token {
  token_price: number;
  tokensSold: number;
  total_tokens: number;
  tokens_available: number;
}

interface Property {
  id: string;
  title: string;
  location: string;
  property_type: string;
  projected_annual_return: number;
  status: string;
  created_at: string;
  tokens: Token[];
  image: string[];
}

export const Marketplace = () => {
    const sortProperties = (properties: Property[], sortBy: string) => {
        return properties.sort((a, b) => {
            switch (sortBy) {
                case 'price_asc':
                    return a.tokens[0].token_price - b.tokens[0].token_price;
                case 'price_desc':
                    return b.tokens[0].token_price - a.tokens[0].token_price;
                case 'annual_return_asc':
                    return a.projected_annual_return - b.projected_annual_return;
                case 'annual_return_desc':
                    return b.projected_annual_return - a.projected_annual_return;
                default:
                    return 0;
            }
        });
    };

    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        location: '',
        property_type: '',
        sort_by: ''
    });

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const apiUrl = `${import.meta.env.VITE_BACKEND_URL_MARKETPLACE}property/properties/public/`;
                const response = await axios.get(apiUrl);

                const publishedProperties: Property[] = response.data.filter(
                    (property: Property) => property.status === "published" || property.status === "coming_soon"
                );
                setProperties(publishedProperties);
            } catch (err) {
                setError('Failed to fetch properties');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    // Memoize filtered properties
    const filteredProperties = useMemo(() => {
        return properties.filter(property => {
            const meetsLocation = !filters.location || property.location === filters.location;
            const meetsPropertyType = !filters.property_type || property.property_type === filters.property_type;
            return meetsLocation && meetsPropertyType;
        });
    }, [properties, filters.location, filters.property_type]);

    // Memoize sorted properties
    const sortedProperties = useMemo(() => {
        return sortProperties(filteredProperties, filters.sort_by);
    }, [filteredProperties, filters.sort_by]);

    return (
        <section className="px-[50px]">
            <MarketplaceBanner />
            <div className="py-10">
                <PropertyFilters
                    locations={[...new Set(properties.map(p => p.location))]}
                    onFilterChange={handleFilterChange}
                    propertyTypes={[...new Set(properties.map(p => p.property_type))]}
                />
                {loading ? (
                    <div className="flex items-center justify-center h-40">
                        <LoadingSpinner />
                    </div>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {sortedProperties.map((property, index) => (
                            <MarketPlacePropertyCard
                                key={index}
                                title={property.title}
                                location={property.location}
                                minTokenPrice={property.tokens[0].token_price}
                                estAnnualReturn={property.projected_annual_return}
                                propertyImgs={property.image}
                                id={property.id}
                                tokensSold={property.tokens[0].tokensSold}
                                totalTokens={property.tokens[0].total_tokens}
                                createdDay={property.created_at}
                                status={property.status}
                                tokens_available={property.tokens[0].tokens_available}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
