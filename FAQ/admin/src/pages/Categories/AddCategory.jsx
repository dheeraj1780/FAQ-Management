import React from "react";
import { Form, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn, FormRow } from "../../components";
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
        <h2>{"Add Category"}</h2>
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

export default AddCategory;
