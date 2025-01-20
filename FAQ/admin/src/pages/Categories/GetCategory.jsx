import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryContainer from "../../components/CategoryContainer";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useCategoryContext } from "../dashboard";

const Categories = () => {
  const { categories } = useCategoryContext();
  console.log({ categories });
  return (
    <div>
      {categories.map((category) => {
        return <CategoryContainer key={category._id} {...category} />;
      })}
    </div>
  );
};

export default Categories;
