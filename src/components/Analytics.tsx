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

    // Create and append script
    var d = document;
    var g = d.createElement('script');
    var s = d.getElementsByTagName('script')[0];
    g.async = true;
    g.src = import.meta.env.VITE_MATOMO_URL;
    s.parentNode?.insertBefore(g, s);

    // Cleanup function
    return () => {
      g.remove();
    };
  }, []);

  return null;
};

export default Analytics;