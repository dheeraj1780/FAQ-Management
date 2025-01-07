import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const dashboard = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Outlet />
    </>
  );
};

export default dashboard;
