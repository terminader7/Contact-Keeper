import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authContext } from "../../context/auth/authContext";

export const PrivateRoute = () => {
  const { isAuthenticated } = useContext(authContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
