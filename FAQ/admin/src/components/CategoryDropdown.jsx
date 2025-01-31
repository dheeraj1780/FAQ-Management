import React, { useState, useEffect } from "react";

const CategoryDropdown = ({ categories, set }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="form-group">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="categoryName"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          set(e.target.value);
        }}
        className="form-select"
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
