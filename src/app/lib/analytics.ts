const DEFAULT_GOOGLE_TAG_ID = 'AW-18173464456';
const DEFAULT_GOOGLE_ADS_LINE_SEND_TO = 'AW-18173464456/lrZACJj7j_EcEIif5NlD';
const DEFAULT_GOOGLE_ADS_FACEBOOK_SEND_TO = 'AW-18173464456/wBQWCIHW__IcEIif5NlD';
const DEFAULT_GOOGLE_ADS_PHONE_SEND_TO = 'AW-18173464456/7OAGCJv7j_EcEIif5NlD';

const ATTRIBUTION_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'gclid', 'gbraid', 'wbraid', 'fbclid', 'ttclid',
] as const;

type AttributionKey = (typeof ATTRIBUTION_KEYS)[number];
type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsParams = Record<string, AnalyticsValue>;
type Attribution = Partial<Record<AttributionKey, string>> & {
  landing_page?: string;
  referrer?: string;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const FIRST_TOUCH_KEY = 'aurumtrust_first_touch';
const LAST_TOUCH_KEY = 'aurumtrust_last_touch';
const LEAD_ID_KEY = 'aurumtrust_lead_id';

function readJson<T>(storage: Storage, key: string): T | null {
  try {
    const value = storage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return null;
  }
}

function writeJson(storage: Storage, key: string, value: unknown) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Tracking must never interrupt the customer journey.
  }
}

function makeId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getLeadId() {
  try {
    const existing = sessionStorage.getItem(LEAD_ID_KEY);
    if (existing) return existing;
    const leadId = makeId();
    sessionStorage.setItem(LEAD_ID_KEY, leadId);
    return leadId;
  } catch {
    return makeId();
  }
}

export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {
    landing_page: `${window.location.pathname}${window.location.search}`,
  };

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) attribution[key] = value;
  }
  if (document.referrer) attribution.referrer = document.referrer;

  const hasCampaignData = ATTRIBUTION_KEYS.some((key) => attribution[key]);
  const firstTouch = readJson<Attribution>(localStorage, FIRST_TOUCH_KEY);
  if (!firstTouch) writeJson(localStorage, FIRST_TOUCH_KEY, attribution);
  if (hasCampaignData || !readJson<Attribution>(sessionStorage, LAST_TOUCH_KEY)) {
    writeJson(sessionStorage, LAST_TOUCH_KEY, attribution);
  }
}

export function getAttributionParams(): AnalyticsParams {
  const firstTouch = readJson<Attribution>(localStorage, FIRST_TOUCH_KEY) ?? {};
  const lastTouch = readJson<Attribution>(sessionStorage, LAST_TOUCH_KEY) ?? {};
  return {
    first_utm_source: firstTouch.utm_source,
    first_utm_medium: firstTouch.utm_medium,
    first_utm_campaign: firstTouch.utm_campaign,
    last_utm_source: lastTouch.utm_source,
    last_utm_medium: lastTouch.utm_medium,
    last_utm_campaign: lastTouch.utm_campaign,
    gclid: lastTouch.gclid ?? firstTouch.gclid,
    gbraid: lastTouch.gbraid ?? firstTouch.gbraid,
    wbraid: lastTouch.wbraid ?? firstTouch.wbraid,
    fbclid: lastTouch.fbclid ?? firstTouch.fbclid,
    ttclid: lastTouch.ttclid ?? firstTouch.ttclid,
    landing_page: firstTouch.landing_page,
  };
}

function cleanParams(params: AnalyticsParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== ''),
  );
}

export function initializeAnalytics() {
  const googleTagId = import.meta.env.VITE_GOOGLE_TAG_ID?.trim() || DEFAULT_GOOGLE_TAG_ID;
  const ga4MeasurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(..._args: unknown[]) {
    window.dataLayer.push(arguments);
  };
  captureAttribution();
  getLeadId();

  if (!document.querySelector(`script[data-aurum-google-tag="${googleTagId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`;
    script.dataset.aurumGoogleTag = googleTagId;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', googleTagId, { send_page_view: false });
  if (ga4MeasurementId && ga4MeasurementId !== googleTagId) {
    window.gtag('config', ga4MeasurementId, { send_page_view: false });
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  const payload = cleanParams({ ...params, lead_id: getLeadId(), ...getAttributionParams() });
  window.dataLayer = window.dataLayer || [];
  window.gtag?.('event', name, payload);
}

export function trackPageView(path: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
}

export function trackContactClick(
  channel: 'line' | 'facebook' | 'phone' | 'email' | 'map',
  placement: string,
  params: AnalyticsParams = {},
) {
  trackEvent(`${channel}_contact_click`, { placement, ...params });
  const sendTo = channel === 'line'
    ? import.meta.env.VITE_GOOGLE_ADS_LINE_SEND_TO?.trim() || DEFAULT_GOOGLE_ADS_LINE_SEND_TO
    : channel === 'facebook'
      ? import.meta.env.VITE_GOOGLE_ADS_FACEBOOK_SEND_TO?.trim() || DEFAULT_GOOGLE_ADS_FACEBOOK_SEND_TO
    : channel === 'phone'
      ? import.meta.env.VITE_GOOGLE_ADS_PHONE_SEND_TO?.trim() || DEFAULT_GOOGLE_ADS_PHONE_SEND_TO
      : undefined;

  // Keep click-based conversions secondary until CRM-qualified events are live.
  if (sendTo) {
    window.gtag?.('event', 'conversion', {
      send_to: sendTo,
      value: 1,
      currency: 'THB',
      event_callback_timeout: 2000,
    });
  }
}
