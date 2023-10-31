import Footer from './components/footer'
import Navbar from './components/navbar'
import AboutUs from './sections/about_us'
import ServiceSection from './sections/service_section'
import TestimonySection from './sections/testimony_section'
import WelcomeSection from './sections/welcome_section'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
      <AboutUs></AboutUs>
      <ServiceSection></ServiceSection>
      <TestimonySection></TestimonySection>
      <Footer></Footer>
    </div>
  )
}
