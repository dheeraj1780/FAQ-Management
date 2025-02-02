import React, { useState, useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/FAQForm";
import {
  SubmitBtn,
  QuillEditor,
  FormRow,
  CategoryDropdown,
} from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useCategoryContext } from "../dashboard";
import { redirect } from "react-router-dom";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/admin/faq/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard");
  }
};

export const action = async ({ request, params }) => {
  console.log("EditFAQ action triggered"); // Debugging
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/admin/faq/${params.id}`, data);
    toast.success("Faq updated Successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditFAQ = () => {
  const [content, setContent] = useState("");
  const { categories } = useCategoryContext();
  const { faq } = useLoaderData();
  useEffect(() => {
    setContent(faq.answer || "");
  }, [faq]);

  return (
    <Wrapper>
      <Form method="post">
        <h2>{"Edit FAQ"}</h2>
        <FormRow
          type="text"
          name="question"
          labelText="Question"
          placeholder="Enter the question"
          defaultValue={faq.question}
        />
        <div className="form-group">
          <QuillEditor
            content={content}
            setContent={setContent}
            placeholder="Enter FAQ content"
          />
        </div>
        <input type="hidden" name="answer" value={content} />
        <CategoryDropdown
          categories={categories}
          name="categoryId"
          existed={faq.categoryDetails._id}
          set={() => {}}
        />
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditFAQ;
