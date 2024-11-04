import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { PropertyAccordion } from "@/components/publicProperty/propertyAccordion";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { PropertyImages } from "@/components/publicProperty/propertyImages";
interface PropertyResponse {
  image: string[];
  video_urls: string[];
}

interface OverviewResponse {
  tokens: { token_price: number }[];
  projected_annual_return: number;
}

export const PropertyDetails: React.FC = () => {
  const [propertyImages, setPropertyImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // const [tokenPrice, setTokenPrice] = useState<number>(0);
  // const [anuReturns, setAnuReturns] = useState<number>(0);
  const { id } = useParams<{ id: string }>();

  const backendUrl = import.meta.env.VITE_BACKEND_URL_MARKETPLACE;

  const fetchPropertyData = async () => {
    try {
      const [propertyResponse] = await Promise.all([
        axios.get<PropertyResponse>(`${backendUrl}property/${id}/?view=images`),
        axios.get<OverviewResponse>(`${backendUrl}property/${id}/?view=overview`)
      ]);

      setPropertyImages(propertyResponse.data.image);
      // setTokenPrice(overviewResponse.data.tokens[0].token_price);
      // setAnuReturns(overviewResponse.data.projected_annual_return);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch property data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPropertyData();
    }
  }, [id]);

  // const isDataLoaded = useMemo(() => {
  //   return propertyImages.length > 0 && tokenPrice > 0 && anuReturns > 0;
  // }, [propertyImages, tokenPrice, anuReturns]);

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <LoadingSpinner />
    </div>
  );

  if (error) return <div>{error}</div>;

  return (
    <section className="md:px-[80px]">
         <PropertyImages images={propertyImages} />
      <div className="flex justify-between mt-8">
        <div className="md:w-[65%]">
          {id && <PropertyAccordion property_id={parseInt(id, 10)} />}
        </div>
  
      </div> 
    </section>
  );
};