import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn, FormRow } from "../../components";

const EditCategory = () => {
  return (
    <Wrapper>
      <Form>
        <h2>{"Edit Category"}</h2>
        <FormRow
          type="text"
          name="name"
          labelText="Category Name"
          placeholder="Enter the Category name"
        />
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-input"
            placeholder="Describe in a few words..."
            rows="4"
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
