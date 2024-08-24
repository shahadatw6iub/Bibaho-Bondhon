"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { WhyChooseUsItem } from "../../types.d";
import WhyChooseUsData from "../../data/whychooseusdata.json";

const content = WhyChooseUsData.map((item: WhyChooseUsItem, index: number) => ({
  title: item.title,
  description: item.description,
  content: (
    <div
      key={index}
      className="h-full w-full flex items-center justify-center text-white"
      style={{
        background:
          "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      }}
    >
      {item.title}
    </div>
  ),
}));

export function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
