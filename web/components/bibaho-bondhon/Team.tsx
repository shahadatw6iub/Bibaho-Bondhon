"use client";

import Link from "next/link";
import services from "../../data/services.json";
import team from "../../data/team.json";
import Image from "next/image";

import { BackgroundGradient } from "../ui/background-gradient";

interface Team {
  profile: string;
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

function Team() {
  const providedTeam = team.team.filter((team) => team.isFeatured);

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Team
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {providedTeam.map((team: Team) => (
            <div key={team.id} className="">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                    <Image
                      src={`${team.image}`}
                      alt={`${team.title}`}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-200 mt-4 mb-2">
                    {team.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {team.description}
                  </p>
                  <Link href={"https://github.com/shahadatw6"}>
                    <div className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition duration-200 cursor-pointer">
                      Profile
                    </div>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
