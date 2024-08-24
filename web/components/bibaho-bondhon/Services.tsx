"use client";

import Link from "next/link";
import services from "../../data/services.json";
import { BackgroundGradient } from "../ui/background-gradient";
import { BackgroundBeams } from "../ui/background-beams";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  features: string;
  isFeatured: boolean;
  // image: "/services/marriage-registration.jpg";
}

function Services() {
  const providedServices = services.services.filter(
    (services) => services.isFeatured
  );

  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Pioneer in Marital Agreements
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Services
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {providedServices.map((services: Service) => (
            <div key={services.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-neutral-200 mt-4 mb-2">
                    {services.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                    {services.description}
                  </p>
                  <Link href={`/${services.slug}`}>
                    <div className="px-4 py-2 rounded-full bg-teal-600 text-white hover:bg-teal-700 transition duration-200 cursor-pointer">
                      Learn More
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

export default Services;
