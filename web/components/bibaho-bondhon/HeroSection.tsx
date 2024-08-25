"use client";
import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";
import Navbar from "./Navbar";
import Image from "next/image";

function HeroSection() {
  return (<main className="w-full flex relative flex flex-col w-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg">
      <BackgroundBeams />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center p-4 md:p-8 lg:p-16"
      >
        <div className="relative z-15 text-3xl sm:text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Nuptial-Link
        </div>
        <div className="relative z-15 text-xl sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          The future of marriage registration
        </div>
        <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 py-4 text-center max-w-4xl">
          A blockchain-based marriage registration platform that ensures the
          security, efficiency, and transparency of marriage records.
        </div>
        <div className="relative z-15 text-base sm:text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Powered by
        </div>
        <div className="relative z-15 text-lg sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Solana Blockchain
        </div>
        <div>
          <Image
            src="/images/solana.png"
            alt="solana"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href={"/services"}>
            <Button className="bg-black dark:bg-white rounded-full text-white dark:text-black px-6 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>
  </main>
  );
}

export default HeroSection;
