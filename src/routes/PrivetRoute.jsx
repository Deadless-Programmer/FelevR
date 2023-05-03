import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <div className="mt-20 flex items-center justify-center space-x-2">
        <div className="w-10 h-10 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-10 h-10 rounded-full animate-pulse bg-orange-600"></div>
        <div className="w-10 h-10 rounded-full animate-pulse bg-orange-600"></div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
