import React from "react";
import useStore from "../store/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoute = () => {
  const { user } = useStore();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedAdminRoute;
