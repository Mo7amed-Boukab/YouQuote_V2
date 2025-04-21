import HeaderAuthPage from "./HeaderAuthPage";
import InputFormAuth from "./InputFormAuth";
import ButtonSubmitAuthForm from "./buttonSubmitAuthForm";
import FooterAuthPage from "./FooterAuthPage";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../axios";

const FormRegister = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const { data, status } = await axios.post("/register", formData);

      if (status === 201) {
        setIsAuthenticated(true);
        setUser(data.user);
        console.log(data.user);
        navigate("/login");
      } else {
        console.error("Échec de l'inscription");
      }
    } catch (error) {
      if (error.response) {
        console.error("Erreur API :", error.response.data.message);
      } else {
        console.error("Erreur réseau :", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center px-8 w-full lg:w-1/2 lg:px-16 xl:px-24">
      <div className="mx-auto w-full max-w-md">
        <div className="mt-8">
          <HeaderAuthPage
            title="Créer un Compte"
            description="Entrez vos informations pour créer votre compte"
          />
        </div>

        <form method="POST" className="space-y-4" onSubmit={HandleSubmit}>
          <InputFormAuth
            id="name"
            type="text"
            name="name"
            placeholder="Entrez votre nom complet"
            icon={<FaUser />}
          />
          <InputFormAuth
            id="email"
            type="email"
            name="email"
            placeholder="Entrez votre email"
            icon={<FaEnvelope />}
          />
          <InputFormAuth
            id="password"
            type="password"
            name="password"
            placeholder="Entrez votre mot de passe"
            icon={<FaLock />}
          />
          <InputFormAuth
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            placeholder="Confirmer votre mot de passe"
            icon={<FaLock />}
          />

          <ButtonSubmitAuthForm name="S'inscrire" />
        </form>

        {/* Divider */}
        <div className="flex justify-center items-center my-6 space-x-2">
          <hr className="w-1/2 border-gray-300" />
          <span className="text-sm text-gray-500">ou</span>
          <hr className="w-1/2 border-gray-300" />
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          className="flex justify-center items-center py-3 space-x-2 w-full text-sm rounded-md border border-gray-300 hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0"
            className="mr-2"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span>S'inscrire avec Google</span>
        </button>

        <FooterAuthPage
          description="Vous avez déjà un compte ?"
          linkName="Se connecter"
          to="/login"
        />
      </div>
    </div>
  );
};

export default FormRegister;
