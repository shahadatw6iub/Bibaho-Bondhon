"use client"
import React, { useState, useEffect } from "react";
import { format, isValid } from "date-fns";
import { Combobox } from "@rewind-ui/core";
import countryData from "../../data/registerLocation.json";
import autoTable from "jspdf-autotable";
import BottomGradient from "../ui/bottomGradient";

// Define an interface for appointment information
interface AppointmentInfo {
  id: number;
  name: string;
  mobile: string;
  date: string;
  country: string;
  city: string;
  office: string;
}

function Appointmarriage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [appointmentInfo, setAppointmentInfo] =
    useState<AppointmentInfo | null>(null);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    // Fetch the latest ID counter from the backend or local storage
    // For simplicity, we'll just initialize with 1 here.
    setIdCounter(1); // Initialize with 1 or fetch from a persistent store
  }, []);

  const selectedCountryData = countryData.countries.find(
    (country) => country.name === selectedCountry
  );

  

  const handleSubmit = async () => {
    const appointmentData: AppointmentInfo = {
      id: idCounter,
      name,
      mobile,
      date: date ? format(date, "yyyy-MM-dd") : "",
      country: selectedCountry,
      city: selectedCity,
      office: selectedOffice,
    };

    try {
      const response = await fetch("http://localhost:3001/saveDAppointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        console.log("Appointment saved successfully!");
        setAppointmentInfo(appointmentData); // Update the state with the appointment data
        setIdCounter((prev) => prev + 1); // Increment the ID for the next appointment
      } else {
        console.error("Failed to save appointment.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="relative flex flex-col w-full h-full items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg">
      <div className="relative items-center justify-center z-15 text-lg lg:text-4xl md:text-2xl sm:text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mt-6">
        How do you register your divorce, You ask?
      </div>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        The process
      </p>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-10  mb-10">
        <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 py-4 text-center max-w-4xl">
          Select a date
        </div>
        <div className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white">
          <div className="dark:text-neutral-200">
            Selected date: {date && isValid(date) && format(date, "yyyy-MM-dd")}
          </div>
          <input
            type="date"
            className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-800 placeholder:text-neutral-700 text-white"
            onChange={(event) => {
              setDate(
                event.target.value && isValid(new Date(event.target.value))
                  ? new Date(event.target.value)
                  : undefined
              );
            }}
            value={date && isValid(date) ? format(date, "yyyy-MM-dd") : ""}
          />
        </div>
        <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
          Name
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter your name..."
            className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
            Mobile No
          </div>
          <input
            type="text"
            placeholder="Enter your mobile number..."
            className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 placeholder:text-neutral-700 text-white"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <div className="font-extralight text-sm md:text-lg lg:text-xl dark:text-neutral-200 max-w-4xl">
            Location
          </div>
          <Combobox
            className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-800 placeholder:text-neutral-700 text-white"
            color="dark"
            mode="tight"
            placeholder="Select a country..."
            shadow="lg"
            size="lg"
            tone="solid"
            radius="lg"
            value={selectedCountry}
            onChange={(val) => {
              // Ensure val is a string before setting the state
              if (typeof val === "string") {
                setSelectedCountry(val);
              }
            }}
          >
            {countryData.countries.map((country, index) => (
              <Combobox.Option
                key={index}
                value={country.name}
                label={country.name}
              />
            ))}
          </Combobox>
        </div>
        {selectedCountry && (
          <div className="flex flex-col gap-4 mb-4">
            <Combobox
              className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-800 placeholder:text-neutral-700 text-white"
              color="dark"
              mode="tight"
              placeholder="Select a city..."
              shadow="lg"
              size="lg"
              tone="solid"
              radius="lg"
              value={selectedCity}
              onChange={(val) => {
                // Ensure val is a string before setting the state
                if (typeof val === "string") {
                  setSelectedCity(val);
                }
              }}
            >
              {selectedCountryData?.cities.map((city, index) => (
                <Combobox.Option
                  key={index}
                  value={city.name}
                  label={city.name}
                />
              ))}
            </Combobox>
          </div>
        )}
        {selectedCity && (
          <div className="flex flex-col gap-4 mb-4">
            <Combobox
              className="w-full p-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-800 placeholder:text-neutral-700 text-white"
              color="dark"
              mode="tight"
              placeholder="Select a registration office..."
              shadow="lg"
              size="lg"
              tone="solid"
              radius="lg"
              value={selectedOffice}
              onChange={(val) => {
                // Ensure val is a string before setting the state
                if (typeof val === "string") {
                  setSelectedOffice(val);
                }
              }}
            >
              {selectedCountryData?.cities
                .find((city) => city.name === selectedCity)
                ?.registration_offices.map((office, index) => (
                  <Combobox.Option key={index} value={office} label={office} />
                ))}
            </Combobox>
          </div>
        )}
        <button
          onClick={handleSubmit}
          className="mt-10 pd-5 border border-neutral-800 bg-gradient-to-br relative group/btn from-black dark:from-zinc dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="button"
        >
          Make an Appointment
          <BottomGradient />
        </button>
      </div>

      {/* Render the appointment information */}
      {appointmentInfo && (
        <div className="mt-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Appointment Details</h2>
          <p>
            <strong>Name:</strong> {appointmentInfo.name}
          </p>
          <p>
            <strong>Mobile:</strong> {appointmentInfo.mobile}
          </p>
          <p>
            <strong>Date:</strong> {appointmentInfo.date}
          </p>
          <p>
            <strong>Country:</strong> {appointmentInfo.country}
          </p>
          <p>
            <strong>City:</strong> {appointmentInfo.city}
          </p>
          <p>
            <strong>Office:</strong> {appointmentInfo.office}
          </p>
        </div>
      )}
    </main>
  );
}

export default Appointmarriage;
