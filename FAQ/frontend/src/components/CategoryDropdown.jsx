import React, { useState, useEffect } from "react";

const CategoryDropdown = ({ categories, existed, set }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    setSelectedCategory(existed);
  }, [existed]);

  return (
    <div className="form-group">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="categoryId"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          set(e.target.value);
        }}
        className="form-select"
        defaultValue={{ existed }}
      >
        <option value="">Select a Category</option>
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
