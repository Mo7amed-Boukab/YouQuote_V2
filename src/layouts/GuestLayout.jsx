import { useContext, useEffect } from "react";
import { Context } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const GuestLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    if (isAuthenticated) navigate("/home");
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default GuestLayout;
