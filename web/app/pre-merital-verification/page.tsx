import Footer from "../../components/bibaho-bondhon/Footer";
import { AuroraBackground } from "../../components/ui/aurora-background";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main>
      <div>
        <AuroraBackground>
          <h2 className="relative z-10 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Verify On BlockChain
          </h2>

          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-10  mb-10">
            <div className="w-full max-w-md mx-auto mt-6 relative z-10">
              <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
                Target NID Number
              </div>
              <input
                type="text"
                placeholder="Enter NID"
                className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
              />
            </div>
            <div className="w-full max-w-md mx-auto mt-6 relative z-10">
              <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
                Your Phone Number
              </div>
              <input
                type="text"
                placeholder="Enter phone number "
                className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
              />
            </div>
            <div className="font-extralight text-sm md:text-sm lg:text-sm dark:text-neutral-200 py-4 text-center max-w-4xl">
              Upon signing of the person you will receive a text with the
              marital history of the person
            </div>
            <Link href={"/"}>
              <button
                className="mt-10 pd-5 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                check status
                <BottomGradient />
              </button>
            </Link>
          </div>
        </AuroraBackground>
      </div>
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
export default page;
