import React from "react";
import OnBoardForm from "../../components/bibaho-bondhon/OnBoardForm";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import Footer from "../../components/bibaho-bondhon/Footer";
import { AuroraBackground } from "../../components/ui/aurora-background";

function Page() {
  return (
    <main>
      <AuroraBackground>
        <div className="mt-20">
          <h2 className="relative z-10 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            On Board A Member
          </h2>
        </div>
        <div className="relative w-full flex-grow flex flex-col items-center justify-center pt-40">
          <OnBoardForm />
        </div>
      </AuroraBackground>
      <Footer />
    </main>
  );
}

export default Page;
