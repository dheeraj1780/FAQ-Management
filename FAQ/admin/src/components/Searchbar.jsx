import React from "react";
import Wrapper from "../assets/wrappers/Searchbar";
import CategoryDropdown from "./CategoryDropdown";
import { useCategoryContext } from "../pages/dashboard";

const SearchBar = ({ setSearchText, setCategory }) => {
  const { categories } = useCategoryContext();
  return (
    <Wrapper>
      <div className="search-bar-container">
        <CategoryDropdown categories={categories} set={setCategory} />

        <div className="input-container">
          <label htmlFor="search-text">Search</label>
          <br />
          <input
            type="text"
            placeholder="Search FAQs..."
            onChange={(e) => setSearchText(e.target.value)} // Update searchText in parent
          />
        </div>

        {/* <div className="buttons-container">
            <button type="submit" className="btn search-btn">
              Search
            </button>
            <button
              type="button"
              className="btn reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div> */}
      </div>
    </Wrapper>
  );
};

export default SearchBar;
