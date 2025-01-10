import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/admin/categories", data);
    toast.success("Category added successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddCategory = () => {
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

export default AddCategory;
