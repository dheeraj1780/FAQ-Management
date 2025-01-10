import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FAQContainer";
import { Link } from "react-router-dom";

const FAQContainer = ({
  _id,
  question,
  answer,
  categoryId,
  createdAt,
  updatedAt,
}) => {
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
            <p className="faq-answer">{answer}</p>
            <div className="faq-meta">
              <span className="faq-category">Category: {categoryId}</span>
              <div className="faq-timestamps">
                <span>Created: {new Date(createdAt).toLocaleDateString()}</span>
                <span>
                  Last Updated: {new Date(updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="faq-actions">
              <Link to="/dashboard/editfaq" className="btn update-btn">
                Update
              </Link>
              <button className="btn delete-btn">Delete</button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
