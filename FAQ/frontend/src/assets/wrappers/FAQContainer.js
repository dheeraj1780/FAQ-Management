import styled from "styled-components";

const Wrapper = styled.section`
  .faq-container {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 16px;
    background-color: #fff;
    margin: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
    cursor: pointer;
  }

  .faq-container:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-question {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
  }

  .arrow {
    font-size: 1.5rem;
    color: #666;
    transition: transform 0.3s;
  }

  .arrow.expanded {
    transform: rotate(90deg);
  }

  .faq-content {
    margin-top: 12px;
  }

  .faq-answer {
    font-size: 1em;
    margin-bottom: 12px;
  }

  .faq-meta {
    font-size: 0.9em;
    color: #666;
  }

  .faq-category {
    display: block;
    margin-bottom: 4px;
  }

  .faq-timestamps span {
    display: block;
  }

  .faq-actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
  }

  .update-btn {
    background-color: #007bff;
    color: white;
  }

  .update-btn:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  .delete-btn {
    background-color: #e74c3c;
    color: white;
  }

  .delete-btn:hover {
    background-color: #c0392b;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
`;
export default Wrapper;
