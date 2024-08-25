import { AuroraBackground } from "@/components/ui/aurora-background";
import Footer from "../../components/bibaho-bondhon/Footer";
import Services from "../../components/bibaho-bondhon/Services";
import React from "react";

function page() {
  return (
    <main>
      <AuroraBackground>      <Services />
      </AuroraBackground>
      <Footer />

    </main>
  );
}

export default page;
