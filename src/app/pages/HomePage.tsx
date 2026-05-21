import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PriceEstimator } from '../components/PriceEstimator';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PriceEstimator />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
    </>
  );
}
