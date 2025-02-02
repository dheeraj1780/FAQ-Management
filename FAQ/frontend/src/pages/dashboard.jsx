import React, { createContext, useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { NavBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import FAQ from "./FAQ";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data: categoryData } = await customFetch.get("/user/category");
    const { data: faqData } = await customFetch.get("/user/faq", { params });
    return {
      categories: categoryData.categories,
      data: faqData,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { categories: [], faqCount: 0 };
  }
};

const categoryContext = createContext();

const dashboard = () => {
  const { categories } = useLoaderData();

  return (
    <categoryContext.Provider value={{ categories }}>
      <Wrapper>
        <NavBar />
        <div className="dashboard-content">
          <div className="main-content">
            <FAQ />
          </div>
        </div>
      </Wrapper>
    </categoryContext.Provider>
  );
};
export const useCategoryContext = () => useContext(categoryContext);
export default dashboard;
