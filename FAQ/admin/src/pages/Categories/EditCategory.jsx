import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn, FormRow } from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/admin/categories/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/category");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/admin/categories/${params.id}`, data);
    toast.success("Category updated successfully");
    return redirect("/dashboard/category");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditCategory = () => {
  const { category } = useLoaderData();
  return (
    <Wrapper>
      <Form method="post">
        <h2>{"Edit Category"}</h2>
        <FormRow
          type="text"
          name="name"
          labelText="Category Name"
          placeholder="Enter the Category name"
          defaultValue={category.name}
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
            defaultValue={category.description}
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
