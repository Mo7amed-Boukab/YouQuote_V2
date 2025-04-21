import { Link } from "react-router-dom";
import ButtonHomePage from "./ButtonHomePage";

const HeaderHomePage = ({ logout }) => {
  return (
    <nav className="bg-gray-900 text-white px-20 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-bold">YouQuote</span>
      </div>

      <div className="space-x-6 flex items-center">
        {["Accueil", "Catégories", "Mes Citations", "Mes Favoris"].map(
          (item, index) => (
            <Link
              key={index}
              to="#"
              className="relative hover:text-gray-300 transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
            >
              {item}
            </Link>
          )
        )}
      </div>
      <form>
       
        <ButtonHomePage onClick={logout}>Déconnexion</ButtonHomePage>
      </form>
    </nav>
  );
};

export default HeaderHomePage;
