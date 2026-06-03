// Google Analytics 4 helper utilities for Triangle Adventures.
// Replace this value with the GA4 Measurement ID from Google Analytics if it ever changes.
// Example format: G-ABC1234567
export const GA_MEASUREMENT_ID = "G-FLVFVDD6YW";

const GA_PLACEHOLDER_ID = "G-XXXXXXXXXX";

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function isAnalyticsReady() {
  return isBrowser() && typeof window.gtag === "function";
}

function isDebugMode() {
  if (!isBrowser()) return false;
  return (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.search.includes("debug_analytics=true")
  );
}

export function initGA() {
  if (!isBrowser()) return;

  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === GA_PLACEHOLDER_ID) {
    console.warn(
      "GA4 is not active yet. Replace G-XXXXXXXXXX in src/utils/analytics.js with your GA4 Measurement ID."
    );
    return;
  }

  if (document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());

  // React Router is a single-page app setup. RouteChangeTracker sends page_view
  // events manually on route changes, so we disable the first automatic page_view here.
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    debug_mode: isDebugMode(),
  });

  if (isDebugMode()) {
    console.info("GA4 debug mode is enabled for Triangle Adventures.");
  }
}

export function trackPageView(path, title = document.title) {
  if (!isAnalyticsReady()) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
    debug_mode: isDebugMode(),
  });
}

export function trackEvent(eventName, params = {}) {
  if (!isAnalyticsReady()) return;

  window.gtag("event", eventName, {
    page_path: window.location.pathname,
    debug_mode: isDebugMode(),
    ...params,
  });
}

export function trackBookNowClick({ tourName, tourSlug, buttonLocation }) {
  trackEvent("book_now_click", {
    tour_name: tourName,
    tour_slug: tourSlug,
    button_location: buttonLocation,
    destination: "fareharbor",
  });
}

export function trackGiftCardClick({ buttonLocation } = {}) {
  trackEvent("gift_card_click", {
    button_location: buttonLocation,
    destination: "fareharbor",
  });
}

export function trackPhoneClick({ buttonLocation } = {}) {
  trackEvent("phone_click", {
    button_location: buttonLocation,
    contact_method: "phone",
  });
}

export function trackEmailClick({ buttonLocation } = {}) {
  trackEvent("email_click", {
    button_location: buttonLocation,
    contact_method: "email",
  });
}

export function trackTripadvisorClick({ buttonLocation } = {}) {
  trackEvent("tripadvisor_click", {
    button_location: buttonLocation,
    destination: "tripadvisor",
  });
}

export function trackInstagramClick({ buttonLocation, tourSlug, contentType = "profile" } = {}) {
  trackEvent("instagram_click", {
    button_location: buttonLocation,
    tour_slug: tourSlug,
    content_type: contentType,
    destination: "instagram",
  });
}
