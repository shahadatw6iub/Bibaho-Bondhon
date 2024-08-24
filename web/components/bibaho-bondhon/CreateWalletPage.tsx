"use client";
import React, { useEffect, useState } from "react";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58"; // Import the base58 encoding library
import BottomGradient from "../ui/bottomGradient";
import { Input } from "../ui/input";
import Footer from "./Footer";

interface CreateWalletPageProps {
  brideNid: string;
  groomNid: string;
  onCreateWallets: (brideWallet: Keypair, groomWallet: Keypair) => void;
}

const CreateWalletPage: React.FC<CreateWalletPageProps> = ({
  brideNid,
  groomNid,
  onCreateWallets,
}) => {
  const [brideWallet, setBrideWallet] = useState<Keypair | null>(null);
  const [groomWallet, setGroomWallet] = useState<Keypair | null>(null);

  useEffect(() => {
    if (!brideWallet && !groomWallet) {
      const brideWallet = Keypair.generate();
      const groomWallet = Keypair.generate();

      setBrideWallet(brideWallet);
      setGroomWallet(groomWallet);

      onCreateWallets(brideWallet, groomWallet);
    }
  }, [brideWallet, groomWallet, onCreateWallets]);

  // Helper function to convert the secret key to a base58 string
  const formatSecretKey = (secretKey: Uint8Array) => {
    return bs58.encode(secretKey);
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen relative w-full h-full bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg">
        <h1 className="relative mt-6 z-10 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Create Wallet
        </h1>

        {brideWallet && (
          <div className="mt-6 p-4 bg-black text-white rounded-md w-full max-w-md">
            <p>Bride NID: {brideNid}</p>
            <h2 className="text-lg font-semibold">Bride Wallet</h2>
            <Input
              value={brideWallet.publicKey.toBase58()}
              readOnly
              className="w-full"
            />
            {/* <p className="mt-2">Secret Key:</p>
            <textarea
              value={formatSecretKey(brideWallet.secretKey)}
              readOnly
              className="w-full h-32 bg-black text-white p-2 rounded-md"
              style={{ whiteSpace: "pre-wrap" }} // Ensures new lines are preserved
            /> */}
          </div>
        )}

        {groomWallet && (
          <div className="mt-6 p-4 bg-black text-white rounded-md w-full max-w-md">
            <p>Groom NID: {groomNid}</p>

            <h2 className="text-lg font-semibold">Groom Wallet</h2>
            <Input
              value={groomWallet.publicKey.toBase58()}
              readOnly
              className="w-full"
              style={{ whiteSpace: "pre-wrap" }}
            />
            {/* <p className="mt-2">Secret Key:</p>
            <textarea
              value={formatSecretKey(groomWallet.secretKey)}
              readOnly
              className="w-full h-32 bg-black text-white p-2 rounded-md"
              style={{ whiteSpace: "pre-wrap" }}
            /> */}
          </div>
        )}
        <button
          className="mt-6 pd-5 py-2 px-12 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="button"
        >
          Create contract <BottomGradient />
        </button>
      </div>
      <Footer />
    </main>
  );
};

export default CreateWalletPage;
