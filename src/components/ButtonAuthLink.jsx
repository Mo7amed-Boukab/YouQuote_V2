import { Link } from "react-router-dom";

const ButtonAuthLink = ({ linkName, To }) => {
 return (
   <Link
     To={To}
     className="inline-block mt-8 px-8 py-2 text-white border-2 border-white rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
   >
     {linkName}
   </Link>

 );
};

export default ButtonAuthLink;

