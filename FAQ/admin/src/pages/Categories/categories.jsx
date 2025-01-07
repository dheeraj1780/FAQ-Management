import React from "react";
import CategoryContainer from "../../components/CategoryContainer";

const Categories = () => {
  return (
    <CategoryContainer
      category="General FAQ"
      description="This category includes all the general questions that do not fit in any specific category."
      createdAt="01/01/2020"
      updatedAt="05/12/2023"
    />
  );
};

export default Categories;
