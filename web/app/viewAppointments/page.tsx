import React from "react";
import AppointmentsPage from "../../components/bibaho-bondhon/ViewAppointments"; // Ensure the path is correct
import Footer from "@/components/bibaho-bondhon/Footer";

const Page: React.FC = () => {
  return (
    <main>
      <AppointmentsPage />
      <Footer />
    </main>
  );
};

export default Page;
