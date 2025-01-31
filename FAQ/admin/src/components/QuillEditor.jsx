import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = ({ content, setContent, placeholder }) => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null); // To track the Quill instance

  useEffect(() => {
    if (!quillInstance.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ direction: "ltr" }, { direction: "rtl" }],
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
            ["clean"],
          ],
        },
        placeholder: placeholder || "Enter content here...",
      });

      quill.on("text-change", () => {
        const htmlContent = quill.root.innerHTML; // Get HTML content
        setContent(htmlContent); // Update parent state
      });

      quillInstance.current = quill; // Save the Quill instance for future use
    }

    // If content changes, set it in Quill editor
    if (content && quillInstance.current) {
      quillInstance.current.root.innerHTML = content; // Set the new content
    }
  }, [content, setContent, placeholder]); // Depend on content and placeholder

  return <div ref={editorRef} style={{ height: "300px" }}></div>;
};

export default QuillEditor;
