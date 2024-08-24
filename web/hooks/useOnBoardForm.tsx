import { useState } from "react";

export interface FormData {
  userType: string;
  firstName: string;
  lastName: string;
  nationalID: string;
  biometricConsent: boolean;
}

const useOnBoardForm = () => {
  const initialState: FormData = {
    userType: "user", // default value
    firstName: "",
    lastName: "",
    nationalID: "",
    biometricConsent: false,
  };

  const [formData, setFormData] = useState<FormData>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      userType: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log("Form Data:", formData);

    try {
      const response = await fetch("/api/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Function to reset form data to initial state
  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    resetForm, // Return resetForm so it can be used in the component
  };
};

export default useOnBoardForm;
