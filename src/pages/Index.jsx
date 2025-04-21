import HeaderHomePage from "../components/HeaderHomePage";
import Hero from "../components/Hero";
import CategoriesLinks from "../components/CategoriesLinks";
import ButtonHomePage from "../components/ButtonHomePage";
import CardQuote from "../components/CardQuote";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get("/quotes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuotes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des quotes:", error);
        setLoading(false);
      }
    };

    if (token) {
      setIsAuthenticated(true);
      fetchQuotes();
    }
  }, [token]);

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

  if (loading) {
    return (
     <div className="flex justify-center items-center w-full h-screen">
     <div className="relative w-16 h-16 transform rotate-45">
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '0s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-1.4285714286s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-2.8571428571s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-4.2857142857s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-5.7142857143s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-7.1428571429s' }}></div>
       <div className="absolute top-0 left-0 w-5 h-5 m-0.5 bg-gray-800" style={{ animation: 'square-animation 10s ease-in-out infinite both', animationDelay: '-8.5714285714s' }}></div>
     </div>
     <style jsx>{`
       @keyframes square-animation {
         0% { left: 0; top: 0; }
         10.5% { left: 0; top: 0; }
         12.5% { left: 20px; top: 0; }
         23% { left: 20px; top: 0; }
         25% { left: 40px; top: 0; }
         35.5% { left: 40px; top: 0; }
         37.5% { left: 40px; top: 20px; }
         48% { left: 40px; top: 20px; }
         50% { left: 20px; top: 20px; }
         60.5% { left: 20px; top: 20px; }
         62.5% { left: 20px; top: 40px; }
         73% { left: 20px; top: 40px; }
         75% { left: 0; top: 40px; }
         85.5% { left: 0; top: 40px; }
         87.5% { left: 0; top: 20px; }
         98% { left: 0; top: 20px; }
         100% { left: 0; top: 0; }
       }
     `}</style>
   </div>
    );
  }

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
          {quotes.map((quote) => (
            <CardQuote key={quote.id} quote={quote} />
          ))}
        </div>
      </div>
    </>
  );
}
