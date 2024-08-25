"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { AuroraBackground } from "../ui/aurora-background";
import BottomGradient from "../ui/bottomGradient";
import Image from "next/image";
import { Input } from "../ui/input";
import kaziData from "../../data/kazi.json";
import { useWallet } from '@solana/wallet-adapter-react';

interface Kazi {
  nid: string;
  full_name: string;
  father_name: string;
  mother_name: string;
  date_of_birth: string;
  gender: string;
  blood_group: string;
  address: {
    village_or_road: string;
    post_office: string;
    upazila: string;
    district: string;
    division: string;
  };
  issue_date: string;
  expiry_date: string;
  fingerprintHash: string;
}

function KaziLoginPage() {
  const [kaziNid, setKaziNid] = useState<string>("");
  const [fingerprintScanned, setFingerprintScanned] = useState<boolean>(false);
  const [loginVerified, setLoginVerified] = useState<boolean>(false);
  const [loginMessage, setLoginMessage] = useState<string>("");
  const [kaziDetails, setKaziDetails] = useState<Kazi | null>(null);

  useEffect(() => {
    // Check if Kazi is already logged in
    const storedKazi = localStorage.getItem("loggedInKazi");
    if (storedKazi) {
      setLoginVerified(true);
      setKaziDetails(JSON.parse(storedKazi));
    }
  }, []);

  const handleLogin = () => {
    const foundKazi = kaziData.find((entry: Kazi) => entry.nid === kaziNid);

    if (foundKazi && fingerprintScanned) {
      setLoginVerified(true);
      setLoginMessage("Login Successful!");
      setKaziDetails(foundKazi);
      localStorage.setItem("loggedInKazi", JSON.stringify(foundKazi)); // Store Kazi details in localStorage
    } else {
      setLoginVerified(false);
      setLoginMessage("Login Failed.");
    }
  };

  const handleLogout = () => {
    setLoginVerified(false);
    setKaziDetails(null);
    setKaziNid("");
    setFingerprintScanned(false);
    localStorage.removeItem("loggedInKazi"); // Remove Kazi details from localStorage
  };

  const { publicKey } = useWallet();
  let kaziAddress = "";

  if (publicKey) {
    // return (`/account/${publicKey.toString()}`);
    kaziAddress = publicKey.toString();
  }

  return (
    <main>
      <div>
        <AuroraBackground>
          <h1 className="relative mt-6 z-10 text-lg md:text-7xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
            Kazi Login
          </h1>
          {loginVerified ? (
            <>
              <div className="mt-6 text-center text-green-500 font-medium">
                {loginMessage}
              </div>
              <div className="mt-4 text-center dark:text-neutral-200">
                <h2 className="text-lg font-bold">Kazi Details</h2>
                <p>Name: {kaziDetails?.full_name}</p>
                <p>NID: {kaziDetails?.nid}</p>
                <p>
                  Address:{" "}
                  {`${kaziDetails?.address.village_or_road}, ${kaziDetails?.address.post_office}, ${kaziDetails?.address.upazila}, ${kaziDetails?.address.district}, ${kaziDetails?.address.division}`}
                </p>
                <p>      {publicKey && <p>Public key: {kaziAddress}</p>}
                </p>
              </div>
              <Link href={""}>
                <button
                  onClick={handleLogout}
                  className="mt-4 px-12 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="button"
                >
                  Logout <BottomGradient />
                </button>
              </Link>
              <Link href={"viewAppointments"}>
                <button
                  className="mt-4 px-8 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="button"
                >
                  View Appointments <BottomGradient />
                </button>
              </Link>
            </>
          ) : (
            <div className="flex flex-col justify-center space-y-8 mt-10 mb-10 z-20 relative">
              <div className="max-w-md w-full mx-auto rounded-3xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <div className="mt-6 font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
                  Kazi NID
                </div>
                <Input
                  type="text"
                  placeholder="Enter Kazi's NID..."
                  value={kaziNid}
                  onChange={(e) => setKaziNid(e.target.value)}
                />

                <div className="mt-6 font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
                  Fingerprint
                </div>
                <div className="form-control items-center">
                  <button
                    className="mt-6 py-1 px-1 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto max-w-xs text-xxs text-white rounded-md h-auto font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    onClick={() => setFingerprintScanned(true)}
                  >
                    Scan Fingerprint
                  </button>

                  <label className="label cursor-pointer">
                    <span className="dark:text-neutral-200">Scanned</span>
                    <input
                      type="checkbox"
                      checked={fingerprintScanned}
                      readOnly
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="p-4 rounded-lg shadow-inner flex flex-col items-center">
                  <Image
                    src="/images/finger.gif"
                    alt="Fingerprint"
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              </div>

              <button
                onClick={handleLogin}
                className="mt-6 pd-5 py-2 px-12 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-auto text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="button"
              >
                Login
                <BottomGradient />
              </button>
              {loginMessage && (
                <div
                  className={`mt-4 text-center font-medium py-2 px-12 ${loginVerified ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {loginMessage}
                </div>
              )}
            </div>
          )}
        </AuroraBackground>
      </div>
      <Footer />
    </main>
  );
}

export default KaziLoginPage;
