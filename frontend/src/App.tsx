import { useState } from 'react'
import './App.css'
import {Navbar} from "./components/navbar"
import { HeroSection } from './components/heroSection'
import { Features } from './components/features'
import { Reviews } from './components/reviews'
import { FAQ } from './components/faq'
import { Footer } from './components/footer'
import { Newsletter } from './components/newsletter'
import { StepsTimeLine } from './components/stepsTimeLine'

function App() {
  return (
    <>
       <Navbar/>
       <HeroSection/>
       <Features />
       <StepsTimeLine/>
       <Reviews/>
       <FAQ/>
       <Newsletter/>
       <Footer />
    </>
  )
}

export default App
