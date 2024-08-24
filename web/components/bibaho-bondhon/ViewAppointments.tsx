"use client";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "../ui/aurora-background";
import Loader from "./Loader";
import Link from "next/link";
import BottomGradient from "../ui/bottomGradient";
import Walletheader from "./Walletheader";

interface Appointment {
  id: number;
  nid: string;
  name: string;
  mobile: string;
  date: string;
  country: string;
  city: string;
  office: string;
}

const useFetchAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getAppointment");
        if (!response.ok) throw new Error("Failed to fetch appointments.");
        const data: Appointment[] = await response.json();
        setAppointments(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { appointments, loading, error };
};

const AppointmentsPage: React.FC = () => {
  const { appointments, loading, error } = useFetchAppointments();

  const handleMakeContract = (appointment: Appointment) => {
    // Implement contract-making logic here
    alert(`Making contract for ${appointment.name} (NID: ${appointment.nid})`);
  };

  if (loading)
    return (
      <main>
        
        <AuroraBackground>
          <div className="relative z-15 text-lg lg:text-4xl md:text-2xl sm:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-6">
            Appointments List
          </div>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Here are your current appointments
          </p>

          <div className="flex items-center justify-center w-full h-full">
            <div>
              <Loader logoSrc="/images/Nuptial-Link.svg" />
            </div>
          </div>
        </AuroraBackground>
      </main>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="relative flex flex-col w-full h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-white transition-bg">
      <AuroraBackground>

      <div className="relative z-15 text-lg lg:text-4xl md:text-2xl sm:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-6">
        Appointments List
      </div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Here are your current appointments
      </p>
      <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-10 mb-10 overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-black border border-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">NID</th>
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Mobile</th>
              <th className="px-4 py-2 border-b">Date</th>
              <th className="px-4 py-2 border-b">Country</th>
              <th className="px-4 py-2 border-b">City</th>
              <th className="px-4 py-2 border-b">Office</th>
              <th className="px-4 py-2 border-b">Actions</th>{" "}
              {/* Added a column for actions */}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="bg-gray-100 dark:bg-black">
                <td className="border px-4 py-2">{appointment.nid}</td>
                <td className="border px-4 py-2">{appointment.name}</td>
                <td className="border px-4 py-2">{appointment.mobile}</td>
                <td className="border px-4 py-2">{appointment.date}</td>
                <td className="border px-4 py-2">{appointment.country}</td>
                <td className="border px-4 py-2">{appointment.city}</td>
                <td className="border px-4 py-2">{appointment.office}</td>
                <td className="border px-4 py-2">
                  <Link href={"signUpMarriage"}>
                    <button
                      className="mt-4 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                      type="button"
                    >
                      Create <BottomGradient />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </AuroraBackground>

    </main>
  );
};

export default AppointmentsPage;
