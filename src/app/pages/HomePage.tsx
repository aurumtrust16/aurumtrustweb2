import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PriceEstimator } from '../components/PriceEstimator';
import { HowItWorks } from '../components/HowItWorks';
import { ContactSection } from '../components/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <PriceEstimator />
      <HowItWorks />
      <ContactSection />
    </>
  );
}
