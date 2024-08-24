"use client";

import Link from "next/link";
import services from "../../data/services.json";
import team from "../../data/team.json";
import Image from "next/image";
import { BackgroundGradient } from "../ui/background-gradient";

function ValuationSDG() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <p className="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Contribution To SDG
          </p>
          <div className="mt-6 text-white">
            <h2 className="font-bold">Reducing child and early marriage:</h2>
            <p>
              Reducing child marriage is a global priority. Many countries have
              implemented legislation setting a minimum age for marriage to
              prevent the harmful practice of marrying children. Bibaho-Bondhon
              ensures to enforce the laws, provide access to quality education
              and economic empowerment.
            </p>
            <h2 className="font-bold">Increasing transparency:</h2>
            <p>
              Bibaho-Bondhon emphasizes transparency and accountability in all
              governance activities. This transparency will allow stakeholders
              to verify the legitimacy and integrity of the system&apos;s operations.
            </p>
            <h2 className="font-bold">Eliminating fraudulent and middleman:</h2>
            <p>
              Bibaho-Bondhon emphasizes zero bribery, fraudulence, and
              middlemen, making the system decentralized. If there are any
              intermediates, they will be trained, licensed, and managed by the
              government.
            </p>
          </div>
          <div className="items-center justify-center mt-10">
            <Image
              src="/images/sdg.png"
              alt="SDG"
              width={1500}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValuationSDG;
