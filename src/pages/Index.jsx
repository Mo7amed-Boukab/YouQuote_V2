import HeaderHomePage from "../components/HeaderHomePage";
import Hero from "../components/Hero";
import CategoriesLinks from "../components/CategoriesLinks";
import ButtonHomePage from "../components/ButtonHomePage";
import CardQuote from "../components/CardQuote";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("authToken");

  const Logout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    }
  };

  return (
    <>
      <HeaderHomePage logout={Logout} />
      <Hero />
      <div className="pb-8 mt-12 bg-gray-100">
        <div className="flex justify-between items-center px-20 py-10">
          <h2 className="text-2xl font-bold text-gray-800">Publications</h2>
          <ButtonHomePage onClick={() => navigate("/quotes/create")}>
            <span className="mr-1">+</span> Ajouter une citation
          </ButtonHomePage>
        </div>

        <CategoriesLinks />

        <div className="grid grid-cols-1 gap-6 mx-20 md:grid-cols-2 lg:grid-cols-3">
          <CardQuote />
          <CardQuote />
          <CardQuote />
          <CardQuote />
          <CardQuote />
          <CardQuote />
        </div>
      </div>
    </>
  );
}
