import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ServiceArea from './components/ServiceArea';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('fade-in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('[data-fade]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ServiceArea />
        <FAQSection />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
