import React, { useState } from "react";
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

const EditFAQ = () => {
  const [content, setContent] = useState("");
  const { categories } = useCategoryContext();

  return (
    <Wrapper>
      <Form>
        <h2>{"Edit FAQ"}</h2>
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
        <CategoryDropdown categories={categories} />
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditFAQ;
