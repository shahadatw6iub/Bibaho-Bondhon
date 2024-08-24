import React from "react";
import BottomGradient from "../ui/bottomGradient";
import { useWallet } from "./WalletContext";

function Walletheader() {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  return (
    <main>
        <div className="flex flex-col items-center max-w-md w-full rounded-3xl mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black mt-4">
        {walletAddress ? (
          <div className="w-full bg-black text-white p-4 rounded flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded">
              <p>Address: {walletAddress}</p>
            </div>
            <button
              className="px-8 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              style={{ width: "300px" }} // Set the desired width
              type="button"
              onClick={disconnectWallet}
            >
              Disconnect Wallet
              <BottomGradient />
            </button>
          </div>
        ) : (
          <div>
            {/* Connect Button */}
            <button
              className="px-8 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="button"
              onClick={connectWallet}
            >
              Connect Wallet
              <BottomGradient />
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Walletheader;
