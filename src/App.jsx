import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import { ToastProvider } from './components/Toast';

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQAccordion />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <FloatingCTA />
    </ToastProvider>
  );
}
