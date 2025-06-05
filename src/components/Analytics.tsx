import React, { useEffect } from 'react';

declare global {
  interface Window {
    _mtm: any[];
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Matomo
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    
    // Create and append script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cdn.matomo.cloud/younesaitouahdavercelapp.matomo.cloud/container_57RKR4Jt.js';
    
    // Find the first script tag and insert before it
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode?.insertBefore(script, firstScript);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      script.remove();
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};

export default Analytics; 