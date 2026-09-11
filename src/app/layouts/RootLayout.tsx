import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingCTA } from '../components/FloatingCTA';
import { AnalyticsTracker } from '../components/AnalyticsTracker';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const id = hash.slice(1);
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };
    tryScroll();
  }, [hash, pathname]);

  return null;
}

export function RootLayout() {
  const { search } = useLocation();
  const isAdLanding = new URLSearchParams(search).get('lp') === 'pawn-bkk-spk';

  return (
    <div className="min-h-screen">
      <AnalyticsTracker />
      <ScrollToHash />
      {!isAdLanding && <Navbar />}
      <Outlet />
      {!isAdLanding && <Footer />}
      {!isAdLanding && <FloatingCTA />}
    </div>
  );
}
