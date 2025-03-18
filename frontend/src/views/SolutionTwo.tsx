
import '../App.css';
import { HeroSection } from '../components/heroSection';
import { Features } from '../components/features';
import { Newsletter } from '../components/newsletter';
import { Toaster } from '../components/ui/toaster';
import { Suspense } from 'react';
import React from 'react';
import { LoadingSpinner } from '@/components/loadingSpinner';
import { MarketplaceRepresentation } from '@/components/marketplaceRepresentation';
// Lazy loading de los componentes
const FAQ = React.lazy(() => import('../components/faq').then(module => ({ default: module.FAQ })));
const WhyTokunize = React.lazy(() => import('../components/whyTokunize').then(module => ({ default: module.WhyTokunize })));
const WhyUsTable = React.lazy(() => import('../components/table').then(module => ({ default: module.WhyUsTable })));

const SolutionTwo = () =>{
  return (
    <>
      <Toaster />
      <HeroSection 
        heroSectionTitle='Automated and Seamless Data Management for Real Estate.'
        heroSubtitle='A secure platform that simplifies ownership, renting, prevents fraud, and streamlines transactions.'
      />
      {/* <HeroBanner/> */}
      <MarketplaceRepresentation/>
      <Features />
      <Suspense fallback={<LoadingSpinner/>}>
        <WhyUsTable />
      </Suspense>
      <Suspense fallback={<LoadingSpinner/>}>
        <WhyTokunize />
      </Suspense>
      <Suspense fallback={<LoadingSpinner/>}>
        <FAQ />
      </Suspense>  
      <Newsletter />
    </>
  );
}

export default SolutionTwo;
