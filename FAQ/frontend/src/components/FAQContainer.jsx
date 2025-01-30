import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FAQContainer";
import { Link, Form } from "react-router-dom";
import DOMPurify from "dompurify";

const FAQContainer = ({
  _id,
  question,
  answer,
}) => {
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
            {isExpanded ? "▼" : "▶"}
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
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
