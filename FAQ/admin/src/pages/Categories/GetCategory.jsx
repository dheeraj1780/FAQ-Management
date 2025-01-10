import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryContainer from "../../components/CategoryContainer";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/admin/categories");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Categories = () => {
  const { data } = useLoaderData();
  const { categories } = data;
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
