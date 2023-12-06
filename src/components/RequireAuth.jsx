import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const RequireAuth = ({ allowedRoles }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  return user?.role == allowedRoles ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
