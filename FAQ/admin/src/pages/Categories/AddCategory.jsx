import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";

const EditCategory = () => {
  return (
    <Wrapper>
      <Form>
        <h2>{"Add Catgeory"}</h2>
        <div className="form-group">
          <label htmlFor="question">Category Name</label>
          <input type="text" id="question" placeholder="Enter the question" />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Description</label>
          <textarea id="answer" placeholder="Enter the answer" />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn submit-btn">
            {"Add Catgeory"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditCategory;
