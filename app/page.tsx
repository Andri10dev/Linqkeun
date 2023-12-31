import Footer from './components/footer'
import Navbar from './components/navbar'
import AboutUs from './sections/about_us'
import FeatureSection from './sections/feature_section'
import ServiceSection from './sections/service_section'
import TestimonySection from './sections/testimony_section'
import WelcomeSection from './sections/welcome_section'
import React from 'react'
import Image from "next/image"
import Title from "./components/title"
import Feature from './images/feeature.png'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
      <AboutUs></AboutUs>
      <ServiceSection></ServiceSection>
      <FeatureSection></FeatureSection>
      <TestimonySection></TestimonySection>
      <Footer></Footer>
    </div>
  )
}
