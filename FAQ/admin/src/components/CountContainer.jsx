import React from "react";
import Wrapper from "../assets/wrappers/CountContainer";
import { useDashboardContext } from "../pages/dashboard";

const CountContainer = () => {
  const { faqCount, categoryCount } = useDashboardContext();
  return (
    <Wrapper>
      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between">
          <div className="p-4 bg-blue-100 rounded-xl">
            <p className="text-gray-600">Total FAQs - {faqCount}</p>
          </div>
          <div className="p-4 bg-green-100 rounded-xl">
            <p className="text-gray-600">Categories - {categoryCount}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CountContainer;
