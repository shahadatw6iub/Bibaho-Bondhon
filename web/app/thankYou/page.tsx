import Footer from "../../components/bibaho-bondhon/Footer";
import { AuroraBackground } from "../../components/ui/aurora-background";
import React from "react";

function page() {
  return (
    <main className=" text-center relative ">
      <AuroraBackground>
        <h2 className="relative z-10 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Thank You
        </h2>
        {/* <h2 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          for your feedback
        </h2> */}
      </AuroraBackground>
      <Footer />
    </main>
  );
}

export default page;
