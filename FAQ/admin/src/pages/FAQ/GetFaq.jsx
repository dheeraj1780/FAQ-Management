import React, { useEffect, useState } from "react";
import FAQContainer from "../../components/FAQContainer";
import Searchbar from "../../components/Searchbar";
import { toast } from "react-toastify";
import { useDashboardContext } from "../dashboard"; // Import context
import { CountContainer } from "../../components";
import customFetch from "../../utils/customFetch";

const GetFaq = () => {
  const { faq } = useDashboardContext(); // Get faq data from context
  const [searchText, setSearchText] = useState(""); // Search text state
  const [category, setCategory] = useState(""); // Category filter state
  const [filteredFaqs, setFilteredFaqs] = useState(faq); // Filtered FAQ data

  // Function to fetch latest FAQs
  const fetchFaqs = async () => {
    try {
      const { data: faqData } = await customFetch.get("/admin/faq");
      setFilteredFaqs(faqData.faq);
    } catch (error) {
      toast.error("Failed to fetch FAQs.");
    }
  };

  // Filter FAQs based on searchText and category
  const filterFaqs = () => {
    let filteredData = [...faq];

    // Filter by searchText (check if any faq title or description contains the searchText)
    if (searchText) {
      filteredData = filteredData.filter(
        (faqItem) =>
          faqItem.question.toLowerCase().includes(searchText.toLowerCase()) ||
          faqItem.answer.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Filter by category (only show faqs that match the selected category)
    if (category) {
      filteredData = filteredData.filter(
        (faqItem) => faqItem.categoryName === category
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

  // Listen for the 'faq-updated' event to reload the FAQ data
  useEffect(() => {
    const handleFaqUpdate = () => {
      fetchFaqs(); // Fetch the latest FAQ data after delete
    };

    window.addEventListener("faq-updated", handleFaqUpdate);

    return () => {
      window.removeEventListener("faq-updated", handleFaqUpdate); // Clean up listener on component unmount
    };
  }, []); // Empty dependency array to only set up once when the component mounts

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
