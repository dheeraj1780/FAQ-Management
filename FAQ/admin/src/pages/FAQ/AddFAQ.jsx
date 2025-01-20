import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/FAQForm";
import {
  SubmitBtn,
  QuillEditor,
  FormRow,
  CategoryDropdown,
} from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";
import { useCategoryContext } from "../dashboard";

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
  const { categories } = useCategoryContext();

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
        <input type="hidden" name="answer" value={content} />
        <CategoryDropdown categories={categories} />
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddFAQ;
