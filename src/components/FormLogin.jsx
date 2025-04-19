import HeaderAuthPage from "./HeaderAuthPage";
import InputFormAuth from "./InputFormAuth";
import ButtonSubmitAuthForm from "./buttonSubmitAuthForm";
import FooterAuthPage from "./footerAuthPage";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/UserContext";

const FormLogin = () => {
  const { setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

    if (response.status === 201 || response.status === 403) {
     setIsAuthenticated(true);
     navigate("/home");
   }
   const res = await response.json();
   console.log(res);
 } catch (error) {
   console.log(error);
 }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 xl:px-24">
      <div className="max-w-md w-full mx-auto">
        <div className="mt-8">
          <HeaderAuthPage
            title="Connexion"
            description="Entrez vos identifiants pour accéder à votre compte"
          />
        </div>

        <form method="POST" className="space-y-4" onSubmit={HandleSubmit}>
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

          {/* Remember me & Mot de passe oublié */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 text-gray-900 focus:ring-gray-900 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-600"
              >
                Se souvenir de moi
              </label>
            </div>
            <a href="#" className="text-sm font-medium text-gray-900 hover:underline">
              Mot de passe oublié ?
            </a>
          </div>

          <ButtonSubmitAuthForm name="Se connecter" />
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center space-x-2 my-6">
          <hr className="w-1/2 border-gray-300" />
          <span className="text-gray-500 text-sm">ou</span>
          <hr className="w-1/2 border-gray-300" />
        </div>

        {/* Connexion Google */}
        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded-md flex justify-center items-center space-x-2 hover:bg-gray-50 text-sm"
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
          <span>Se connecter avec Google</span>
        </button>

        <FooterAuthPage
          description="Vous n'avez pas de compte ?"
          linkName="S'inscrire"
          to="/register"
        />
      </div>
    </div>
  );
};

export default FormLogin;
