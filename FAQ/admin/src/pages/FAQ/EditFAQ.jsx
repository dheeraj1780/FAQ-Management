import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";

const EditFAQ = () => {
  return (
    <Wrapper>
      <Form>
        <h2>{"Edit FAQ"}</h2>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" id="question" placeholder="Enter the question" />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer</label>
          <textarea id="answer" placeholder="Enter the answer" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input type="text" id="category" placeholder="Enter the category" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn submit-btn">
            {"Edit FAQ"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditFAQ;
