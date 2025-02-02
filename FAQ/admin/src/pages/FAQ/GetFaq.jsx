import React, { createContext } from "react";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import PageBtnContainer from "../../components/PageBtnContainer";
import { CountContainer } from "../../components";
import { useContext } from "react";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  try {
    const { data } = await customFetch.get("/admin/faq", { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

const AllFaqsContext = createContext();

const GetFaq = () => {
  const { data, searchValues } = useLoaderData();
  const { totalFaq, numofPages, currentPage, faq } = data;
  return (
    <AllFaqsContext.Provider value={{ searchValues }}>
      <CountContainer />
      <Searchbar />
      <div>
        {faq.length > 0 ? (
          faq.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p class="nofaq">No FAQs found.</p>
        )}
        {numofPages > 1 && (
          <PageBtnContainer
            numofPages={numofPages}
            totalFaq={totalFaq}
            currentPage={currentPage}
          />
        )}
      </div>
    </AllFaqsContext.Provider>
  );
};
export const useAllFaqsContext = () => useContext(AllFaqsContext);
export default GetFaq;
