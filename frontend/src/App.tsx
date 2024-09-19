// import './App.css'
// import { HeroSection } from './components/heroSection'
// import { Features } from './components/features'
// import { FAQ } from './components/faq'
// import { Newsletter } from './components/newsletter'
// import { Toaster } from './components/ui/toaster'
// import { WhyTokunize } from './components/whyTokunize'
// import { WhyUsTable } from './components/table'

// function App() {
//   return (
//     <>
//        <Toaster />
//        <HeroSection/>
//        <Features />
//        <WhyTokunize/>
//        <WhyUsTable/>
//        {/* <Reviews/> */}
//        <FAQ/>
//        <Newsletter/>
//     </>
//   )
// }

// export default App

import './App.css';
import { HeroSection } from './components/heroSection';
import { Features } from './components/features';
import { Newsletter } from './components/newsletter';
import { Toaster } from './components/ui/toaster';
import { Suspense } from 'react';
import React from 'react';

// Lazy loading de los componentes
const FAQ = React.lazy(() => import('./components/faq').then(module => ({ default: module.FAQ })));
const WhyTokunize = React.lazy(() => import('./components/whyTokunize').then(module => ({ default: module.WhyTokunize })));
const WhyUsTable = React.lazy(() => import('./components/table').then(module => ({ default: module.WhyUsTable })));

function App() {
  return (
    <>
      <Toaster />
      <HeroSection />
      <Features />
      
      <Suspense fallback={<div>Loading WhyTokunize...</div>}>
        <WhyTokunize />
      </Suspense>
      
      <Suspense fallback={<div>Loading Why Us Table...</div>}>
        <WhyUsTable />
      </Suspense>
      
      <Suspense fallback={<div>Loading FAQ...</div>}>
        <FAQ />
      </Suspense>
      
      <Newsletter />
    </>
  );
}

export default App;
