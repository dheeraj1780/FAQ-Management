import React, { useEffect, useState } from "react";
import FAQContainer from "../components/FAQContainer";
import Searchbar from "../components/SearchBar";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const FAQ = ({ faqdata }) => {
  // ✅ Move state inside the component
  const [searchText, setSearchText] = useState(""); // User input
  const [category, setCategory] = useState(""); // Selected category
  const [data, setFaqData] = useState([]); // FAQ list

  console.log(category);
  // ✅ Get initial data from loader
  const loaderData = faqdata;

  // ✅ Fetch FAQ function (runs when searchText/category changes)
  const fetchFAQs = async () => {
    try {
      const { data } = await customFetch.get("/user/faq", {
        params: { words: searchText, category: category }, // ✅ Correct variable names
      });
      console.log(data);
      setFaqData(data);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  // Debounced Effect: Wait 300ms after user stops typing
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchFAQs();
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, category]); // Runs when user types or changes category

  return (
    <>
      <Searchbar setSearchText={setSearchText} setCategory={setCategory} />
      <>
        {data?.faq?.length > 0 ? (
          data.faq.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p>No FAQs found.</p>
        )}
      </>
    </>
  );
};

export default FAQ;
