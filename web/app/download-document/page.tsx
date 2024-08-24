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
            Download Certificate
          </h2>
          <div className="w-full max-w-md mx-auto mt-20 relative z-10">
            <input
              type="text"
              placeholder="Enter the certificate No"
              className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
          </div>
          <div className="w-full max-w-md mx-auto mt-6 relative z-10">
            <input
              type="text"
              placeholder="Enter Bride NID"
              className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
          </div>
          <div className="w-full max-w-md mx-auto mt-6 relative z-10">
            <input
              type="text"
              placeholder="Enter Groom NID"
              className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
            />
          </div>

          <Link href={"showQR"}>
            <button
              className=" mt-6 pd-5 px-40 py-2 rounded border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Download certificate
              <BottomGradient />
            </button>
          </Link>
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
