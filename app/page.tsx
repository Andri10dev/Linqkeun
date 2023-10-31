import Footer from './components/footer/page'
import Navbar from './components/navbar/page'
import AboutUs from './sections/about_us/page'
import WelcomeSection from './sections/welcome_section/page'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  )
}
