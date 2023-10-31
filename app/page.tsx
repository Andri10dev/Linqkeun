import Footer from './components/footer/page'
import Navbar from './components/navbar/page'
import WelcomeSection from './sections/welcome_section/page'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <WelcomeSection></WelcomeSection>
      <Footer></Footer>
    </div>
  )
}
