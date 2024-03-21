// useConfig.js
import { useState, useEffect } from 'react';

export function useConfig() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Fetch your configuration data here
    // Example: fetch('/api/config').then(response => response.json()).then(data => setConfig(data))
    // Replace '/api/config' with your actual endpoint

    // For demonstration purposes, initializing with dummy data
    const dummyConfig = {
      theme: 'light', // or 'dark' depending on your theme setup
      // Add other configuration properties as needed
    };

    setConfig(dummyConfig);
  }, []); // Runs only once when component mounts

  return [config];
}
