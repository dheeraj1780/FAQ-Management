import Wrapper from "../../assets/wrappers/FAQForm";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { SubmitBtn } from "../../components";

const AddFAQ = () => {
  const editorRef = useRef(null);
  useEffect(() => {
    if (!editorRef.current.quill) {
      // Check if Quill is already initialized
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
      quill.on("text-change", () => {
        const content = quill.root.innerHTML; // Get HTML content
        editorRef.current.dataset.content = content; // Store content in ref
      });

      editorRef.current.quill = quill; // Store Quill instance in ref
    }
  }, []);

  return (
    <Wrapper>
      <form>
        <h2>{"Add FAQ"}</h2>
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="Enter the question"
          />
        </div>
        <div className="form-group">
          <div ref={editorRef} style={{ height: "300px" }}></div>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter the category"
          />
        </div>
        <div className="form-actions">
          <SubmitBtn />
        </div>
      </form>
    </Wrapper>
  );
};

export default AddFAQ;
