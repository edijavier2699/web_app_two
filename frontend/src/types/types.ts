export interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }

  export interface Question {
    id: string;
    title: string;
    content: string;
}

  
 export  interface FaqCategory {
    title: string;
    description: string;
    path: string;
    id:number,
  }

 export interface HowItWorksCardProps {
    title: string;
    description: string;
}


export interface Property {
  id: string;
  reference_number:string;
  title: string;
  location: string;
  property_type: string;
  tokens: { token_price: number; tokensSold: number; total_tokens: number; tokens_available: number }[];
  projected_annual_return: number;
  image: string[];
  status: string;
  investment_category: string;
  created_at: string;
  post_code: string;
  price: number;
  annual_gross_rents: string;
}



export interface PropertyFinancialData {
  annual_cash_flow?: string;
  annual_gross_rents?: string;
  blockchain_address?: string;
  investment_category?: string;
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
} 

