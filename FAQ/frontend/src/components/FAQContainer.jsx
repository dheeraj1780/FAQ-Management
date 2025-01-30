import React, { useState } from "react";
import Wrapper from "../assets/wrappers/FAQContainer";
import { Link, Form } from "react-router-dom";
import DOMPurify from "dompurify";

const FAQContainer = ({
  _id,
  question,
  answer,
  categoryId,
  createdAt,
  updatedAt,
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
              <Link to={`/dashboard/editfaq/${_id}`} className="btn update-btn">
                Update
              </Link>
              <Form action={`/dashboard/deletefaq/${_id}`} method="post">
                <button className="btn delete-btn" type="submit">
                  Delete
                </button>
              </Form>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default FAQContainer;
