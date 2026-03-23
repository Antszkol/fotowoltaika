import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Calculator from './components/Calculator';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import technicianQuality from './images/technician_quality.jpg';

export default function App() {
  useScrollAnimation();

  return (
    <>
      <Nav />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Benefits />
        <HowItWorks />
        <div className="full-width-image">
          <img src={technicianQuality} alt="Jakość instalacji" />
        </div>
        <Calculator />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
