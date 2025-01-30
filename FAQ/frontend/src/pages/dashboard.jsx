import React, { createContext, useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { NavBar } from "../components";
import Wrapper from "../assets/wrappers/Dashboard";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import FAQ from "./FAQ";

export const loader = async () => {
  try {
    // First API call for categories
    const { data: categoryData } = await customFetch.get("/user/category");

    // Second API call for FAQs
    const { data: faqData } = await customFetch.get("/user/faq");

    // Return both results as an object
    return { categoryData, faqData };
  } catch (error) {
    // Handle error and return empty arrays for both data if error occurs
    toast.error(error?.response?.data?.msg);
    return { categoryData: [], faqData: [] };
  }
};

const categoryContext = createContext();

const dashboard = () => {
  const { categoryData, faqData } = useLoaderData();
  const { categories } = categoryData;

  return (
    <categoryContext.Provider value={{ categories }}>
      <Wrapper>
        <NavBar />
        <div className="dashboard-content">
          <div className="main-content">
            <FAQ faqdata={faqData} />
          </div>
        </div>
      </Wrapper>
    </categoryContext.Provider>
  );
};

export const useCategoryContext = () => useContext(categoryContext);
export default dashboard;
