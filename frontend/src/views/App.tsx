
import '../App.css';
import { HeroSection } from '../components/heroSection';
import { Features } from '../components/features';
import { Newsletter } from '../components/newsletter';
import { Toaster } from '../components/ui/toaster';
import { Suspense } from 'react';
import React from 'react';
import { HeroBanner } from '@/components/heroBanner';
import { LoadingSpinner } from '@/components/loadingSpinner';
import { MarketplaceRepresentation } from '@/components/marketplaceRepresentation';
// Lazy loading de los componentes
const FAQ = React.lazy(() => import('../components/faq').then(module => ({ default: module.FAQ })));
const WhyTokunize = React.lazy(() => import('../components/whyTokunize').then(module => ({ default: module.WhyTokunize })));
const WhyUsTable = React.lazy(() => import('../components/table').then(module => ({ default: module.WhyUsTable })));

function App() {
  return (
    <>
      <Toaster />
      <HeroSection />
      <HeroBanner/>
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

export default App;
