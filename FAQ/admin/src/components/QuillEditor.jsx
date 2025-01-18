import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = ({ content, setContent, placeholder }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current.quill) {
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
        placeholder: placeholder || "Enter content here...",
      });

      quill.on("text-change", () => {
        const htmlContent = quill.root.innerHTML; // Get HTML content
        setContent(htmlContent); // Update parent state
      });

      if (content) {
        quill.root.innerHTML = content; // Set initial content
      }

      editorRef.current.quill = quill; // Save Quill instance
    }
  }, [content, setContent, placeholder]);

  return <div ref={editorRef} style={{ height: "300px" }}></div>;
};

export default QuillEditor;
