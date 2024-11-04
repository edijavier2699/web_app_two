import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';


interface PropertyDetails {
  annual_cash_flow: string;
  annual_gross_rents: string;
  blockchain_address: string;
  closing_costs: string;
  dao_administration_fees: string;
  homeowners_insurance: string;
  legal_documents_url: string;
  monthly_cash_flow: string;
  operating_reserve: string;
  projected_annual_cash_flow: string;
  projected_annual_return: string | null;
  projected_annual_yield: string;
  projected_rental_yield: string;
  property_management: string;
  property_taxes: string;
  token_price: string;
  tokensSold: number;
  total_investment_value: string;
  total_tokens: number;
  underlying_asset_price: string;
  upfront_fees: string;
}


interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetchPropertyDetails = (property_id: number, viewType: string): FetchState<PropertyDetails> => {
  const [data, setData] = useState<PropertyDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      setLoading(true);
      setError(null);  

      try {

        const apiUrl = `${import.meta.env.VITE_BACKEND_URL_MARKETPLACE}property/${property_id}/landing-page/?view=${viewType}`;

        const config: AxiosRequestConfig = {
          headers: {
            'Content-Type': 'application/json',
          }
        };

        const response = await axios.get<PropertyDetails>(apiUrl, config);  
        console.log(response.data);
              
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch property details.');
        console.error('Error fetching property details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [property_id, viewType]);

  return { data, loading, error };
};

export default useFetchPropertyDetails;
