import React, { createContext, useContext, useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { NavBar, SideBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  try {
    const { data: categoryData } = await customFetch.get("/admin/categories");
    const { data: faqData } = await customFetch.get("/admin/faq");
    return {
      categories: categoryData.categories,
      categoryCount: categoryData.categories.length,
      faqCount: faqData.faq.length,
      faq: faqData.faq,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { categories: [], faqCount: 0 };
  }
};
const DashboardContext = createContext();
const categoryContext = createContext();

const dashboard = () => {
  const { categories, categoryCount, faq, faqCount } = useLoaderData();
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
        categoryCount,
        faqCount,
        faq,
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
