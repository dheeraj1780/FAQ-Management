import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/FAQForm";
import { SubmitBtn, QuillEditor, FormRow } from "../../components";

const AddFAQ = () => {
  const [content, setContent] = useState(""); // State for editor content

  return (
    <Wrapper>
      <form>
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
        <FormRow
          type="text"
          name="category"
          labelText="Category"
          placeholder="Enter the category name"
        />
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </form>
    </Wrapper>
  );
};

export default AddFAQ;
