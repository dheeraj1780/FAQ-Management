import React from "react";
import Wrapper from "../assets/wrappers/Searchbar";
import CategoryDropdown from "./CategoryDropdown";
import { useCategoryContext } from "../pages/dashboard";
import { useAllFaqsContext } from "../pages/FAQ/GetFaq";
import { Form, useSubmit } from "react-router-dom";

const SearchBar = () => {
  const { searchValues } = useAllFaqsContext();
  const { words, category } = searchValues;
  const { categories } = useCategoryContext();
  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      console.log("asd");
      console.log();
      timeout = setTimeout(() => {
        onChange(form);
      }, 200);
    };
  };

  return (
    <Wrapper>
      <Form className="search-form">
        <div className="search-bar-container">
          <div className="search-dropdown">
            <CategoryDropdown
              categories={categories}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
              existed={category}
            />
          </div>

          <div className="input-container">
            <label htmlFor="search-text">Search</label>
            <br />
            <input
              name="words"
              type="text"
              placeholder="Search FAQs..."
              onChange={debounce((form) => {
                submit(form);
              })}
            />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchBar;
