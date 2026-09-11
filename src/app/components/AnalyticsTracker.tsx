import { useEffect } from 'react';
import { useLocation } from 'react-router';
import {
  captureAttribution,
  initializeAnalytics,
  trackContactClick,
  trackEvent,
  trackPageView,
} from '../lib/analytics';

function getPlacement(element: HTMLAnchorElement) {
  return element.dataset.trackingPlacement ||
    element.closest('header, nav, main, footer')?.tagName.toLowerCase() ||
    'unknown';
}

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const placement = getPlacement(anchor);
      const href = anchor.href;

      if (href.startsWith('tel:')) trackContactClick('phone', placement);
      else if (href.startsWith('mailto:')) trackContactClick('email', placement);
      else if (href.includes('lin.ee/')) trackContactClick('line', placement);
      else if (href.includes('facebook.com/profile.php?id=61589267054204') || href.includes('m.me/61589267054204')) {
        trackContactClick('facebook', placement);
      }
      else if (href.includes('maps.app.goo.gl') || href.includes('google.com/maps')) {
        trackContactClick('map', placement);
      } else if (anchor.dataset.trackingEvent) {
        trackEvent(anchor.dataset.trackingEvent, { placement });
      }
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  useEffect(() => {
    captureAttribution();
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.pathname, location.search, location.hash]);

  return null;
}
