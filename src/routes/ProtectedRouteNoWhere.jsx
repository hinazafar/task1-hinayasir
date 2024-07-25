import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteNoWhere = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1); // Navigate back
  });
};

export default ProtectedRouteNoWhere;
