import React, { useState } from 'react';
import { PropertyOverview } from './propertyOverview';
import { PropertyFinancial } from './propertyFinancial';
import useFetchPropertyDetails from '@/hooks/useFetchPropertyDetails';
import { SignUpRequired } from './signUpRequired';
import { LoadingSpinner } from '../loadingSpinner';

interface PropertyAccordionProps {
  property_id: number;
}

export const PropertyAccordion: React.FC<PropertyAccordionProps> = ({ property_id }) => {  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  // Define view types based on index
  const viewTypes = ['overview', 'financial', 'activity', 'documents'];
  const viewType = viewTypes[activeIndex ?? 0];

  // Only fetch data if the selected viewType is either 'overview' or 'financial'
  const shouldFetchData = viewType === 'overview' || viewType === 'financial';
  const { data, loading, error } = useFetchPropertyDetails(property_id, viewType, shouldFetchData);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Manejo de la carga y errores
  if (loading && shouldFetchData) {
    return <LoadingSpinner />; // Muestra un mensaje de carga mientras se obtienen los datos
  }

  if (error && shouldFetchData) {
    return <div>Error: {error}</div>; // Muestra un mensaje de error si hay un problema al obtener datos
  }

  return (
    <div>
      {/* Accordion Header */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 0 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(0)}
        >
          Overview
        </button>
        <button
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 1 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(1)}
        >
          Financial
        </button>
        <button
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 2 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(2)}
        >
          Activity
        </button>
        <button
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 3 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(3)}
        >
          Documents
        </button>
      </div>

      {/* Accordion Content */}
      <div>
        {activeIndex === 0 && data && (
          <PropertyOverview propertyType={data.property_type} />
        )}
        {activeIndex === 1 && data && (
          <PropertyFinancial data={data} loading={loading} error={error} />
        )}
        {(activeIndex === 2 || activeIndex === 3) && (
          <SignUpRequired />
        )}
      </div>
    </div>
  );
};
