import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteSign = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <Navigate to="/" /> : <Outlet />;
};

export default ProtectedRouteSign;
