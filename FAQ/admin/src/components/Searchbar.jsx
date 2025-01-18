// SearchBar.jsx
import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Searchbar";

const Searchbar = () => {
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here (e.g., pass data to parent component or call an API)
    console.log("Searching for:", { category, searchText });
  };

  const handleReset = () => {
    setCategory("");
    setSearchText("");
  };

  return (
    <Wrapper>
      <div className="search-bar-container">
        <form onSubmit={handleSearch} className="search-bar-form">
          <div className="input-container">
            <label htmlFor="category">Category</label>
            <br />
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
            />
          </div>

          <div className="input-container">
            <label htmlFor="search-text">Search</label>
            <br />
            <input
              type="text"
              id="search-text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter search text"
            />
          </div>

          <div className="buttons-container">
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
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Searchbar;
