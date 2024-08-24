import React from "react";
import Footer from "../../components/bibaho-bondhon/Footer";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "../../components/ui/aurora-background";

function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900 dark:bg-gray-100 transition-colors duration-500">
      <AuroraBackground>
        <div className="relative w-full flex-grow flex flex-col items-center justify-center pt-40 ">
          <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <h2 className="relative z-15 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Sign The contract
          </h2>
          <div className="z-30 grid grid-cols-1 sm:grid-cols-2 gap-8 py-20">
            <div className="flex flex-col items-center bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                <Image
                  src="/images/sif sir.png"
                  alt="QR Code 1"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <p className="text-white dark:text-gray-800 mt-4">
                Scan to sign as Bride
              </p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                <Image
                  src="/images/sif sir.png"
                  alt="QR Code 2"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <p className="text-white dark:text-gray-800 mt-4">
                Scan to sign as Groom
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
              <Image
                src="/images/NFT.jpg"
                alt="QR Code 2"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <Link href={"showQR"}>
              <button
                className="mt-6 pd-5 px-35 py-2 rounded border border-neutral-800 mx-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
                type="submit"
              >
                Insert An Image of the couple
                <BottomGradient />
              </button>
            </Link>
          </div>
          <div>
            <Link href={"/NFT"}>
              <button
                className="mt-6 pd-5 px-40 py-2 rounded border border-neutral-800 mx-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] "
                type="submit"
              >
                Submit
                <BottomGradient />
              </button>
            </Link>
          </div>
        </div>
      </AuroraBackground>
      <Footer />
    </main>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default Page;
