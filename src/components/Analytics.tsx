import { useEffect } from 'react';

declare global {
  interface Window {
    _mtm: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Matomo Tag Manager
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({ 'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start' });

    // Create and append script - using proxied URL to bypass ad blockers
    var d = document;
    var g = d.createElement('script');
    var s = d.getElementsByTagName('script')[0];
    g.async = true;
    // Use proxied path (first-party) in production, direct URL in development
    g.src = import.meta.env.PROD
      ? '/js/analytics.js'
      : 'https://cdn.matomo.cloud/itouahda.matomo.cloud/container_3WfbAl2e.js';
    s.parentNode?.insertBefore(g, s);

    // Cleanup function
    return () => {
      g.remove();
    };
  }, []);

  return null;
};

export default Analytics;