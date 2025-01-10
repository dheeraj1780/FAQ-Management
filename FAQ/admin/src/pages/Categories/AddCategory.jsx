import React from "react";
import { Form, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn } from "../../components";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/admin/categories", data);
    toast.success("Category added successfully");
    return redirect("/dashboard/category");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddCategory = () => {
  return (
    <Wrapper>
      <Form method="post">
        <h2>{"Add Catgeory"}</h2>
        <div className="form-group">
          <label htmlFor="name">Category Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter the question"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter the answer"
          />
        </div>
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddCategory;
