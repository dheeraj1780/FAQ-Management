import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FAQContainer";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import DOMPurify from "dompurify";

const FAQContainer = ({ _id, question, answer, categoryDetails }) => {
  //sanitizing answer
  const sanitizedAnswer = DOMPurify.sanitize(answer);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <Wrapper>
      <div className="faq-container">
        <div className="faq-header" onClick={toggleAnswer}>
          <h3 className="faq-question">{question}</h3>
          <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
            {isExpanded ? <FaChevronRight /> : <FaChevronRight />}
          </span>
        </div>
        {isExpanded && (
          <div className="faq-content">
            <div
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: sanitizedAnswer }}
            />
          </div>
        )}
        <div className="faq-meta">
          <span className="faq-category">Category: {categoryDetails.name}</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
