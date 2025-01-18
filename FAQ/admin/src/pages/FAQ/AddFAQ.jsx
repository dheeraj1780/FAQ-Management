import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn, QuillEditor, FormRow } from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { Form, useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/admin/categories");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/admin/faq", data);
    toast.success("Faq added Successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddFAQ = () => {
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data } = useLoaderData();
  const { categories } = data;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h2>{"Add FAQ"}</h2>
        <FormRow
          type="text"
          name="question"
          labelText="Question"
          placeholder="Enter the question"
        />
        <div className="form-group">
          <QuillEditor
            content={content}
            setContent={setContent}
            placeholder="Enter FAQ content"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="form-select"
          >
            <option value="" disabled>
              Select a Category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddFAQ;
