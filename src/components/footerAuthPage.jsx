import { Link } from "react-router-dom";

const FooterAuthPage = ({ linkName, description, to }) => {
  return (
    <p className="text-center text-sm text-gray-600 mt-4">
      {description}{" "}
      <Link to={to} className="font-medium text-gray-900 hover:underline">
        {linkName}
      </Link>
    </p>
  );
};

export default FooterAuthPage;
