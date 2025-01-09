import { useParams } from 'react-router-dom';
import { PropertyAccordion } from "@/components/publicProperty/propertyAccordion";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { PropertyImages } from "@/components/publicProperty/propertyImages";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TokenPriceGraph } from "@/graphs/tokenPriceGraph";
import { FormatCurrency } from "@/components/publicProperty/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import { useGetAxiosRequest } from "@/hooks/useGetAxiosRequest";
import { Property } from "@/types/types";

export const PropertyDetails = () => {
  const navigate = useNavigate();
  const { reference_number } = useParams();


  const { data, loading, error } = useGetAxiosRequest<Property>(
    `${import.meta.env.VITE_BACKEND_URL_MARKETPLACE}property/single/${reference_number}/?view=overview`
  );

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No property data available.</div>;
  }

  const images = data.image || [];
  const tokenPrice = data.tokens?.[0]?.token_price ?? 0; // Default to 0 if undefined
  const annualReturns = data.projected_annual_return ?? "0";

  return (
    <section className="px-[20px] md:px-[60px]">
      <div className="flex items-center space-x-2 my-7">
        <span
          className="bg-[#A0CC29] rounded-full p-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-white" />
        </span>
        <span className="text-normal cursor-pointer">Back to Marketplace</span>
      </div>
      <PropertyImages images={images} />
      <div className="flex justify-between mt-8 space-x-7">
        <article className="w-full md:w-2/3">
          {reference_number && <PropertyAccordion overviewData={data} property_id={reference_number} />}
        </article>

        <aside className="hidden md:block md:w-1/3 space-y-4 py-4">
          <div className="sticky top-0 space-y-4 py-4">
            <div
              className="space-y-4 border rounded-lg p-4"
              style={{ boxShadow: "0px 0px 13px 0px #00000014" }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base lg:text-2xl">
                    <FormatCurrency amount={tokenPrice} />
                  </span>
                  <p className="text-sm lg:text-lg text-gray-700">Per Token</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-base lg:text-2xl">{annualReturns}%</span>
                  <p className="text-sm lg:text-lg text-gray-700">Annual Returns</p>
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
            <TokenPriceGraph tokenPrice={tokenPrice} />
          </div>
        </aside>
      </div>
    </section>
  );
};
