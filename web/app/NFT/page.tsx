import React from "react";
import NFTCard from "../../components/bibaho-bondhon/NFTCard";
import Footer from "../../components/bibaho-bondhon/Footer";
import { AuroraBackground } from "../../components/ui/aurora-background";

function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <AuroraBackground>
        <div className="relative w-full flex-grow flex flex-col items-center justify-center pt-40">
          <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <h2 className="relative z-10 text-lg sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Here is your Contract
          </h2>
          <NFTCard />
        </div>
      </AuroraBackground>
      <Footer />
    </main>
  );
}

export default Page;
