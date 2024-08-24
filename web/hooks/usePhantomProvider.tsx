import { useState, useEffect } from 'react';

export function usePhantomProvider() {
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    if ('solana' in window) {
      const anyWindow = window as any;
      const provider = anyWindow.solana;

      if (provider?.isPhantom) {
        setProvider(provider);
      }
    } else {
      window.addEventListener('photon#setup', () => {
        const anyWindow = window as any;
        const provider = anyWindow.solana;

        if (provider?.isPhantom) {
          setProvider(provider);
        }
      });
    }
  }, []);

  return provider;
}
