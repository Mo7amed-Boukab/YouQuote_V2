import { Link } from "react-router-dom";

const CategoriesLinks = () => {
 return (
     <div className="px-20 pb-10">
       <Link to="#" className="mr-6 pb-2 border-b-2 border-gray-800 text-sm font-medium text-gray-800">Toutes les citations</Link>
       <Link to="#" className="mr-6 pb-2 text-gray-600 hover:text-gray-800 text-sm">Motivation</Link>
       <Link to="#" className="mr-6 pb-2 text-gray-600 hover:text-gray-800 text-sm">Amour</Link>
       <Link to="#" className="mr-6 pb-2 text-gray-600 hover:text-gray-800 text-sm">Philosophie</Link>
       <Link to="#" className="mr-6 pb-2 text-gray-600 hover:text-gray-800 text-sm">Succès</Link>
    </div>
 );
};

export default CategoriesLinks;
