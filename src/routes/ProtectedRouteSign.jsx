import { current } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteSign = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  // // const authfunction = () => {
  // //   let route = "";
  // //   if (currentUser) {
  // //     route = "/"; // Navigate back
  // //   } //else return <Outlet />;
  // //   else {
  // //     //route = <Outlet />;
  // //     route = "/sign-in";
  // //   }
  // //   console.log("route1=", route);
  // //   return navigate(route);
  // // };

  //useEffect(authfunction, []);

  useEffect(() => {
    if (currentUser) navigate(-1); // Navigate back
  });
  return !currentUser && <Outlet />;
};

export default ProtectedRouteSign;
