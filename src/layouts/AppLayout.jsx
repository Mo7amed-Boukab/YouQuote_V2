import { useContext, useEffect } from "react";
import { Context } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default AppLayout;
