import React from "react";
import LayoutAuthPage from "../components/LayoutAuthPage";
import FormLogin from "../components/FormLogin";


const Login = () => {
  return (

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

  );
};

export default Login;
