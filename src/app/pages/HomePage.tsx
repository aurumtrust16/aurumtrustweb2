import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { PriceEstimator } from '../components/PriceEstimator';
import { HowItWorks } from '../components/HowItWorks';
import { ContactSection } from '../components/ContactSection';
import { useLocation } from 'react-router';
import { AdPawnLandingPage } from './AdPawnLandingPage';

export function HomePage() {
  const { search } = useLocation();
  if (new URLSearchParams(search).get('lp') === 'pawn-bkk-spk') {
    return <AdPawnLandingPage />;
  }

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
