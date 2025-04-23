
import React from "react";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
