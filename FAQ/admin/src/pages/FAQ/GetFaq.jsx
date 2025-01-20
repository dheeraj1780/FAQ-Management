import React from "react";
import Wrapper from "../../assets/wrappers/FAQContainer";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/admin/faq");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const FAQ = () => {
  const { data } = useLoaderData();
  const { getall } = data;
  return (
    <>
      <Searchbar />
      <>
        {getall.map((faq) => {
          return <FAQContainer key={faq._id} {...faq} />;
        })}
      </>
    </>
  );
};

export default FAQ;
