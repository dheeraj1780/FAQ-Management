import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Wrapper from "../assets/wrappers/Dashboard";
const dashboard = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <div className="dashboard-content">
          <SideBar />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default dashboard;
