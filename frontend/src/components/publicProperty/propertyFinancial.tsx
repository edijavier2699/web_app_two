import React, { useEffect } from 'react';
import { LoadingSpinner } from '../loadingSpinner';

interface PropertyFinancialProps {
  data?: {
    annual_cash_flow?: string;
    annual_gross_rents?: string;
    blockchain_address?: string;
    closing_costs?: string;
    dao_administration_fees?: string;
    homeowners_insurance?: string;
    legal_documents_url?: string;
    monthly_cash_flow?: string;
    operating_reserve?: string;
    projected_annual_cash_flow?: string;
    projected_annual_return?: string | null;
    projected_annual_yield?: string;
    projected_rental_yield?: string;
    property_management?: string;
    property_taxes?: string;
    token_price?: string;
    tokensSold?: number;
    total_investment_value?: string;
    total_tokens?: number;
    underlying_asset_price?: string;
    upfront_fees?: string;
  } | null;
  loading: boolean;
  error: string | null;
  propertyType: string
}



export const PropertyFinancial: React.FC<PropertyFinancialProps> = ({ data, loading, error }) => {

  // const [properyExtraFinancial, setPropertyExtraFinancial] = useState({})

  useEffect(()=>{
    
  },[])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
      < LoadingSpinner/>
     </div>
    );
  }
 
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">No financial data available.</p>
      </div>
    );
  }

  return (
    <section className="px-3">
      <div className="space-y-6">
        {/* Projected Annual Returns Section */}
        <div className="bg-white py-4 border-b shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Projected Annual Returns</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-semibold text-2xl">{data.projected_annual_yield}%</span>
            </li>
            <li className="flex justify-between">
              <span>Projected Appreciation</span>
              <span className="font-semibold">{data.projected_annual_return ?? 'N/A'}%</span>
            </li>
            <li className="flex justify-between">
              <span>Rental Yield</span>
              <span className="font-semibold">{data.projected_rental_yield}%</span>
            </li>
            <li className="flex justify-between">
              <span>Total Investment Value</span>
              <span className="font-semibold">£{data.total_investment_value}</span>
            </li>
          </ul>
        </div>


        {/* Annual and Monthly Expenses Section */}
        <div className="bg-white py-4 shadow-md p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Annual and Monthly Expenses</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="font-semibold text-2xl">£{data.annual_cash_flow}</span>
            </li>
            <li className="flex justify-between">
              <span>Homeowners Insurance</span>
              <span className="font-semibold">£{data.homeowners_insurance}</span>
            </li>
            <li className="flex justify-between">
              <span>Property Management</span>
              <span className="font-semibold">£{data.property_management}</span>
            </li>
            <li className="flex justify-between">
              <span>Annual LLC Administration and Filing Fees</span>
              <span className="font-semibold">£{data.dao_administration_fees}</span>
            </li>
            <li className="flex justify-between">
              <span>Operating Reserve Replenishment</span>
              <span className="font-semibold">£{data.operating_reserve}</span>
            </li>
            <li className="flex justify-between">
              <span>Annual Cash Flow</span>
              <span className="font-semibold">£{data.annual_cash_flow}</span>
            </li>
            <li className="flex justify-between">
              <span>Monthly Cash Flow</span>
              <span className="font-semibold">£{data.monthly_cash_flow}</span>
            </li>
            <li className="flex justify-between">
              <span>Projected Annual Cash Flow</span>
              <span className="font-semibold">£{data.projected_annual_cash_flow}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};