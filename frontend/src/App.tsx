import './App.css'
import { HeroSection } from './components/heroSection'
import { Features } from './components/features'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'
import { Newsletter } from './components/newsletter'
import { Toaster } from './components/ui/toaster'
import { WhyTokunize } from './components/whyTokunize'
import { WhyUsTable } from './components/table'

function App() {
  return (
    <>
       <Toaster />
       <HeroSection/>
       <Features />
       <WhyTokunize/>
       <WhyUsTable/>
       {/* <Reviews/> */}
       <FAQ/>
       <Newsletter/>
       <Footer />
    </>
  )
}

export default App
