import React, { useState, useEffect } from "react";

const CategoryDropdown = ({
  categories,
  name = "category",
  onChange,
  existed = "",
  set = () => {},
}) => {
  return (
    <div className="form-group">
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name={name}
        defaultValue={existed}
        onChange={onChange}
        className="form-select"
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
