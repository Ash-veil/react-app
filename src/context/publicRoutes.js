import { useContext } from "react";
import { AuthContext } from "./authContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return !user ? children : <Navigate to="/" />;
};

export default PublicRoute;
