import React, { createContext, useContext, useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { NavBar, SideBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/admin/categories");
    console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const DashboardContext = createContext();
const categoryContext = createContext();

const dashboard = () => {
  const { data } = useLoaderData();
  const { categories } = data;
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("succesfully logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        logoutUser,
      }}
    >
      <categoryContext.Provider value={{ categories }}>
        <Wrapper>
          <NavBar />
          <div className="dashboard-content">
            <SideBar />
            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </Wrapper>
      </categoryContext.Provider>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export const useCategoryContext = () => useContext(categoryContext);
export default dashboard;
