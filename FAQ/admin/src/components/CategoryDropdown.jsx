import React, { useState, useEffect } from "react";

const CategoryDropdown = ({ categories, existed }) => {
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
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="form-select"
        defaultValue={{ existed }}
      >
        <option value="" disabled>
          Select a Category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
