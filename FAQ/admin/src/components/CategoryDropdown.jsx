import React, { useState } from "react";

const CategoryDropdown = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="form-group">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="form-select"
      >
        <option value="" disabled>
          Select a Category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
