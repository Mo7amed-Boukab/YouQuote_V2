import React from "react";
import LayoutAuthPage from "../components/LayoutAuthPage";
import FormLogin from "../components/FormLogin";
import GuestLayout from "../layouts/GuestLayout";

const Login = () => {
  return (
    <GuestLayout>
      <div className="h-screen">
        <div className="flex h-full">
          <LayoutAuthPage
            name="Rejoignez nous"
            link="/register"
            introductionText="Connectez-vous pour continuer votre voyage inspirant avec nous."
          />
          <FormLogin />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;
