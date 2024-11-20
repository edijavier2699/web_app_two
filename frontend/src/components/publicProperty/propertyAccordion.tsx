import { useState } from 'react';
import { PropertyOverview } from './propertyOverview';
import { PropertyFinancial } from './propertyFinancial';
import { useGetAxiosRequest } from '@/hooks/useGetAxiosRequest';
import { Property, PropertyFinancialData } from '@/types/types';
import { DataAccordion } from '../dataAccordion/DataAccordion';
import { SignUpRequired } from './signUpRequired';

interface PropertyAccordionProps {
  property_id: number;
  overviewData: Property; 
}

export const PropertyAccordion = ({ property_id, overviewData }: PropertyAccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Default to 'Overview' tab
  
  const tabs = ['Overview', 'Financial', 'Activity', 'Documents'];
  const viewType = tabs[activeIndex].toLowerCase(); // Map tab name to viewType ('overview', 'financial', etc.)
  const requiresAuth = viewType === 'activity' || viewType === 'documents';

  // Obtener datos financieros usando el hook
  const { data, loading, error } = useGetAxiosRequest<PropertyFinancialData>(
    `${import.meta.env.VITE_BACKEND_URL_MARKETPLACE}property/${property_id}/landing-page/?view=${viewType}`, 
    requiresAuth
  );

  // Componentes que se renderizan por cada pestaña
  const components = [
    <PropertyOverview overviewData={overviewData} key="overview" />, // Overview tab
    <PropertyFinancial data={data} loading={loading} error={error} key="financial" />, // Financial tab
    <SignUpRequired key="activity" />, // Activity tab (SignUpRequired)
    <SignUpRequired key="documents" />, // Documents tab (SignUpRequired)
  ];

  const handleTabChange = (index: number) => {
    setActiveIndex(index); // Actualizar el índice activo
  };

  return (
    <>
      <DataAccordion tabs={tabs} components={components} onTabChange={handleTabChange} />
    </>
  );
};
