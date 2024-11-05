import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { PropertyAccordion } from "@/components/publicProperty/propertyAccordion";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { PropertyImages } from "@/components/publicProperty/propertyImages";
import { Popover, PopoverContent,PopoverTrigger } from "@/components/ui/popover";
import { TokenPriceGraph } from "@/graphs/tokenPriceGraph";
import { FormatCurrency } from "@/components/publicProperty/currencyFormatter";
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from 'react-icons/fa';

interface PropertyResponse {
  image: string[];
  video_urls: string[];
}

interface OverviewResponse {
  tokens: { token_price: number }[];
  projected_annual_return: number;
}

export const PropertyDetails: React.FC = () => {
  const navigate = useNavigate()
  const [propertyImages, setPropertyImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tokenPrice, setTokenPrice] = useState<number>(0);
  const [anuReturns, setAnuReturns] = useState<number>(0);
  const { id } = useParams<{ id: string }>();

  const backendUrl = import.meta.env.VITE_BACKEND_URL_MARKETPLACE;

  const fetchPropertyData = async () => {
    try {
      const [propertyResponse,overviewResponse] = await Promise.all([
        axios.get<PropertyResponse>(`${backendUrl}property/${id}/?view=images`),
        axios.get<OverviewResponse>(`${backendUrl}property/${id}/landing-page/?view=overview`)
      ]);
      
      setPropertyImages(propertyResponse.data.image);
      setTokenPrice(overviewResponse.data.tokens[0].token_price);
      setAnuReturns(overviewResponse.data.projected_annual_return);
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

  if (loading) return (
    <div className="flex items-center justify-center h-40">
      <LoadingSpinner />
    </div>
  );

  if (error) return <div>{error}</div>;

  return (
    <section className="px-[20px] md:px-[60px]">
      <div className="flex items-center space-x-2 my-7">
          <span className="bg-[#A0CC29] rounded-full p-1 cursor-pointer" onClick={()=>{
            navigate(-1)
          }}>
            <FaArrowLeft className="text-white" />
          </span>
          <span className="text-normal cursor-pointer">Back to Marketplace</span>
      </div>
      <PropertyImages images={propertyImages} />
      <div className="flex justify-between mt-8 space-x-7">
        <article className="w-full md:w-2/3">
          {id && <PropertyAccordion property_id={parseInt(id, 10)} />}
        </article>

        <aside className="hidden md:block md:w-1/3   space-y-4 py-4">
        <div className="sticky top-0  space-y-4 py-4">
          <div
            className="space-y-4 border rounded-lg p-4"
            style={{ boxShadow: "0px 0px 13px 0px #00000014" }}
          >
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold text-base  lg:text-2xl w-1/2"><FormatCurrency amount={tokenPrice} /></span>
                <p className="text-sm lg:text-lg text-gray-700 text-center">Per Token</p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-base lg:text-2xl w-1/2">{anuReturns}%</span>
                <p className="text-sm  text-center lg:text-lg text-gray-700">P. Annual Return</p>
              </div>
            </div>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">
                    Invest Now
                  </button>
                </PopoverTrigger>
                <PopoverContent className="max-w-sm">
                  Request an invitation
                </PopoverContent>
              </Popover>
          </div>
          <TokenPriceGraph tokenPrice={tokenPrice}/>
          </div>
      </aside>
      </div> 
    </section>
  );
};