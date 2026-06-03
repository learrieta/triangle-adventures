import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../../utils/analytics";

export default function RouteChangeTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;

    // Small timeout gives react-helmet or other title updates a moment to run.
    const timer = window.setTimeout(() => {
      trackPageView(path, document.title);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location]);

  return null;
}
