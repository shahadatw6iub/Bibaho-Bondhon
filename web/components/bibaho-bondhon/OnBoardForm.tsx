"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import Link from "next/link";
import useOnBoardForm from "../../hooks/useOnBoardForm";

function OnBoardForm() {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    resetForm,
  } = useOnBoardForm();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.nationalID.trim() !== ""
    );
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsPopupVisible(true);
      await handleSubmit(e);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    resetForm(); // Reset the form when the popup is closed
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Enter personal information
      </p>
      <form className="my-8" onSubmit={handleFormSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <div className="mb-8">
            <Label htmlFor="userType">Select User Type:</Label>
            <select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleSelectChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-black text-white"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <LabelInput
            id="firstName"
            name="firstName"
            label="First name"
            placeholder="First name"
            value={formData.firstName}
            handleChange={handleChange}
          />
          <LabelInput
            id="lastName"
            name="lastName"
            label="Last name"
            placeholder="Last name"
            value={formData.lastName}
            handleChange={handleChange}
          />
        </div>
        <LabelInput
          id="nationalID"
          name="nationalID"
          label="National ID Card Number"
          placeholder="National ID Card Number"
          value={formData.nationalID}
          handleChange={handleChange}
        />

        <div className="pd-10">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mt-6 mb-8">
            Biometric Data (Optional)
          </h2>
          <img
            src="/images/icons8-fingerprint-scan.gif"
            alt="Biometric Data"
            className="w-10 h-10 mx-auto"
          />
          <div className="flex items-center space-x-4 mb-4 mt-6">
            <input
              type="checkbox"
              id="biometricConsent"
              name="biometricConsent"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={formData.biometricConsent}
              onChange={handleChange}
            />
            <Label htmlFor="biometricConsent">
              Consent to use fingerprint data
            </Label>
          </div>
        </div>
        <button
          className={`bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] ${
            !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={!isFormValid()}
        >
          Submit
          <BottomGradient />
        </button>
      </form>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Request Pending</h2>
            <p>
              Hello, {formData.firstName} {formData.lastName}. Your request is
              pending.
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const LabelInput = ({
  id,
  name,
  label,
  placeholder,
  value,
  handleChange,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex flex-col space-y-2 w-full mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      name={name}
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
    />
  </div>
);
const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

export default OnBoardForm;
