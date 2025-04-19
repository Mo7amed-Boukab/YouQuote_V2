import React from "react";
import LayoutAuthPage from "../components/LayoutAuthPage";
import FormRegister from "../components/FormRegister";
import GuestLayout from "../layouts/GuestLayout";

const Register = () => {
  return (
    <GuestLayout>
      <div className="h-screen">
        <div className="flex h-full">
          <LayoutAuthPage
            name="Se connecter"
            link="/login"
            introductionText="Rejoignez notre communauté dès aujourd'hui et commencez votre voyage inspirant avec nous."
          />
          <FormRegister />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Register;
