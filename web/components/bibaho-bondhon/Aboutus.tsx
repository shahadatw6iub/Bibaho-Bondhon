"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import Link from "next/link";
import Image from "next/image";

function Aboutus() {
  return (
    <LampContainer
      // className="bg-slate-100 dark:bg-slate-900"
    >
      <motion.h1
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        About Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 text-center px-4 md:px-6 lg:px-8"
      >
        Nuptial-Link is a company that develops software for blockchain-based
        marriage registration. We believe that blockchain technology can
        revolutionize the way marriage records are managed, making them more
        secure, efficient, and transparent. Our software provides a secure and
        immutable ledger for storing marriage records, which can be accessed by
        authorized users from anywhere in the world. We also offer a variety of
        features that make it easy for users to register their marriages,
        including online registration, e-signatures, and automatic
        notifications. We are committed to providing our users with the best
        possible experience, and we are excited to be at the forefront of this
        new technology.
      </motion.p>
      <motion.h1
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-4xl"
      >
        Whitepaper
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 100 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 max-w-4xl mx-auto text-base md:text-lg lg:text-xl text-slate-700 dark:text-slate-300 text-center px-4 md:px-6 lg:px-8"
      >
        <Link
          className="flex items-center justify-center font-light"
          href={"/files/whitepaper.pdf"}
        >
          Click Here to Read Our Whitepaper
          <Image
            src="/images/whitepaper.png"
            alt="Whitepaper Image"
            width={50}
            height={100}
            className="object-contain ml-2"
          />
        </Link>
      </motion.p>
    </LampContainer>
  );
}

export default Aboutus;
