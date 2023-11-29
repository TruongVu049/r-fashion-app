import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Anonymous = () => {
  const { user } = useAuth();
  return user?.toKen ? <Navigate to="/" /> : <Outlet />;
};

export default Anonymous;
