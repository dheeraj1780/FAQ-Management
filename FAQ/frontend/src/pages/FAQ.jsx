import React, { createContext, useContext } from "react";
import FAQContainer from "../components/FAQContainer";
import Searchbar from "../components/SearchBar";
import { useLoaderData } from "react-router-dom";
import PageBtnContainer from "../components/PageBtnContainer";

const AllFaqsContext = createContext();

const FAQ = () => {
  const { data, searchValues } = useLoaderData();
  const { totalFaq, numofPages, currentPage, faq } = data;
  console.log(currentPage);
  return (
    <AllFaqsContext.Provider value={{ searchValues }}>
      <Searchbar />
      <div>
        {faq.length > 0 ? (
          faq.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p>No FAQs found.</p>
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
export default FAQ;
