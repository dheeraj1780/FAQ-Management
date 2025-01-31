import React, { useEffect, useState } from "react";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import { toast } from "react-toastify";
import { useDashboardContext } from "../dashboard"; // Import context
import { CountContainer } from "../../components";

const GetFaq = () => {
  const { faq } = useDashboardContext(); // Get faq data from context
  const [searchText, setSearchText] = useState(""); // Search text state
  const [category, setCategory] = useState(""); // Category filter state
  const [filteredFaqs, setFilteredFaqs] = useState(faq); // Filtered FAQ data

  console.log(category);
  console.log(searchText);
  console.log(faq);
  // Filter FAQs based on searchText and category
  const filterFaqs = () => {
    let filteredData = [...faq];

    // Filter by searchText (check if any faq title or description contains the searchText)
    if (searchText) {
      filteredData = filteredData.filter(
        (faqItem) =>
          faqItem.title.toLowerCase().includes(searchText.toLowerCase()) ||
          faqItem.description.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by category (only show faqs that match the selected category)
    if (category) {
      filteredData = filteredData.filter(
        (faqItem) => faqItem.category === category
      );
    }

    setFilteredFaqs(filteredData); // Set the filtered FAQ data
  };

  // Debounced Effect: Wait 300ms after user stops typing to apply filtering
  useEffect(() => {
    const timeout = setTimeout(() => {
      filterFaqs(); // Call filter function after debounce delay
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, category]); // Run filter when searchText or category changes

  return (
    <>
      <CountContainer />
      <Searchbar setSearchText={setSearchText} setCategory={setCategory} />
      <div>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => <FAQContainer key={faq._id} {...faq} />)
        ) : (
          <p>No FAQs found.</p>
        )}
      </div>
    </>
  );
};

export default GetFaq;
