import React, { useEffect, useState } from "react";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/admin/faq");
    console.log(data);
    return { faqData: data }; // Returning fetched FAQ data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { faqData: [] }; // Return empty array in case of error
  }
};

const GetFaq = () => {
  const { faqData } = useLoaderData();
  // Move state inside the component
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [data, setFaqData] = useState(faqData?.getall || []);

  // Fetch FAQ function (runs when searchText/category changes)
  const fetchFAQs = async () => {
    try {
      console.log(searchText);
      const { data } = await customFetch.get("/admin/faq", {
        params: { words: searchText, category: category },
      });
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
        {data?.getall?.length > 0 ? (
          data.getall.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p>No FAQs found.</p>
        )}
      </>
    </>
  );
};

export default GetFaq;
