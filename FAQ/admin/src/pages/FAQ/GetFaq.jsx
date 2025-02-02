import React, { useContext, useEffect, useState } from "react";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import { toast } from "react-toastify";
import { useDashboardContext } from "../dashboard"; // Import context
import { CountContainer } from "../../components";
import customFetch from "../../utils/customFetch";
import { createContext } from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/admin/faq", { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllFaqsContext = createContext();

const GetFaq = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllFaqsContext.Provider value={{ searchValues }}>
      <CountContainer />
      <Searchbar />
      <div>
        <h4>Current page {data.currentPage}</h4>
        <h4>Total page {data.numofPages}</h4>
        {data.faq.length > 0 ? (
          data.faq.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p>No FAQs found.</p>
        )}
      </div>
    </AllFaqsContext.Provider>
  );
};
export const useAllFaqsContext = () => useContext(AllFaqsContext);
export default GetFaq;
