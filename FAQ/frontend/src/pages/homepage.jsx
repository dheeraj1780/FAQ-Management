import React from "react";
import { Outlet } from "react-router-dom";

const homepage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default homepage;
