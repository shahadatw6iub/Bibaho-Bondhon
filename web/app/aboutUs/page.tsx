import Aboutus from "../../components/bibaho-bondhon/Aboutus";
import Footer from "../../components/bibaho-bondhon/Footer";
import Team from "../../components/bibaho-bondhon/Team";
import ValuationSDG from "../../components/bibaho-bondhon/ValuationSDG";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";

function page() {
  return (
    <main>
      <Aboutus />
      <ValuationSDG />
      <Team />
      <Footer />
    </main>
  );
}

export default page;
