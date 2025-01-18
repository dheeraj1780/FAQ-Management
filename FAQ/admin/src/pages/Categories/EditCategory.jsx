import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn } from "../../components";

const EditCategory = () => {
  return (
    <Wrapper>
      <Form>
        <h2>{"Edit Catgeory"}</h2>
        <div className="form-group">
          <label htmlFor="question">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the Category name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe in few words..."
          />
        </div>
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditCategory;
