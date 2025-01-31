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
  }, [setContent, placeholder]); // Depend on setContent and placeholder

  useEffect(() => {
    if (
      quillInstance.current &&
      content !== quillInstance.current.root.innerHTML
    ) {
      const quill = quillInstance.current;
      const selection = quill.getSelection(); // Get current cursor position
      quill.clipboard.dangerouslyPasteHTML(content); // Set the content
      if (selection) {
        quill.setSelection(selection.index, selection.length); // Restore cursor position
      }
    }
  }, [content]);

  return <div ref={editorRef} style={{ height: "300px" }}></div>;
};

export default QuillEditor;
