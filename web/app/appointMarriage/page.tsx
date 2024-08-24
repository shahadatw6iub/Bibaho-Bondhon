"use client";

import AppointMarriage from "../../components/bibaho-bondhon/Appointmarriage";
import Footer from "../../components/bibaho-bondhon/Footer";
import { AuroraBackground } from "../../components/ui/aurora-background";
import Link from "next/link";

import React from "react";

function Page() {
  return (
    <main>
      <div>
        <AppointMarriage />
      </div>
      <Footer />
    </main>
  );
}

export default Page;
