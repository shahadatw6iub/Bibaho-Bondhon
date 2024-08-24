"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { usePhantomProvider } from '../../hooks/usePhantomProvider';

interface WalletContextProps {
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const provider = usePhantomProvider();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const storedAddress = localStorage.getItem('walletAddress');
    if (storedAddress) {
      setWalletAddress(storedAddress);
    }
  }, []);

  const connectWallet = async () => {
    if (provider) {
      try {
        const response = await provider.connect();
        const address = response.publicKey.toString();
        setWalletAddress(address);
        localStorage.setItem('walletAddress', address);
      } catch (err) {
        console.error("User rejected the request:", err);
      }
    } else {
      alert('Phantom wallet not detected. Please install it.');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    localStorage.removeItem('walletAddress');
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
