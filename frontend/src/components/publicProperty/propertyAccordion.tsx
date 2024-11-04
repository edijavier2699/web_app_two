import React, { useState } from 'react';
import { PropertyOverview } from './propertyOverview';
import { PropertyFinancial } from './propertyFinancial';
import useFetchPropertyDetails from '@/hooks/useFetchPropertyDetails';

interface PropertyAccordionProps {
  property_id: number;
}

export const PropertyAccordion: React.FC<PropertyAccordionProps> = ({ property_id }) => {  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  // Define view types based on index
  const viewTypes = ['overview', 'financial', 'activity', 'documents'];
  const viewType = viewTypes[activeIndex ?? 0];

  const { data, loading, error } = useFetchPropertyDetails(property_id,viewType,);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 3 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(3)}
        >
          Activity
        </button>
        <button
          className={`p-2 border-b-2 transition-all ease-in-out duration-300 ${activeIndex === 4 ? 'border-black' : 'border-transparent'}`}
          onClick={() => handleClick(4)}
        >
          Documents
        </button>
      </div>

      {/* Accordion Content */}
      <div>
        {activeIndex === 0 && (
          <PropertyOverview propertyType='coreLuxuryApartments'/>
        )}     
       {activeIndex === 1 && (
          <PropertyFinancial data={data} propertyType='coreLuxuryApartments' loading={loading} error={error} />
       )}
      </div>
    </div>
  );
};