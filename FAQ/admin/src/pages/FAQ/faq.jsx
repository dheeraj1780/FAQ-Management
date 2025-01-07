import React from "react";
import Wrapper from "../../assets/wrappers/FAQContainer";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";

const FAQ = () => {
  return (
    <>
      <Searchbar />
      <FAQContainer
        question="this is a questions"
        answer="this is a answer"
        category="category"
        createdAt="06/06/2003"
        updatedAt="03/03/2003"
      />
    </>
  );
};

export default FAQ;
