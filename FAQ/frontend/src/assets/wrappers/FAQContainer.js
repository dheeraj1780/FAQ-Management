import styled from "styled-components";

const Wrapper = styled.section`
  .faq-container {
    border: 1px solid #3a3f58;
    padding: 16px;
    border-radius: 12px;
    background-color: #2a2d3e;
    color: white;
    margin: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s, transform 0.2s;
    cursor: pointer;
  }

  .faq-container:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  .faq-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .faq-question {
    font-size: 1.3em;
    font-weight: 600;
    margin: 0;
    color: #00bcd4;
  }

  .arrow {
    font-size: 1.5rem;
    color: #bbb;
    transition: transform 0.3s ease;
  }

  .arrow.expanded {
    transform: rotate(90deg);
  }

  .faq-content {
    margin-top: 12px;
    opacity: 0.9;
  }

  .faq-answer {
    font-size: 1rem;
    margin-bottom: 12px;
    color: #d1d1e0;
  }

  .faq-meta {
    font-size: 0.85em;
    color: #a0a0b3;
  }

  .faq-category {
    display: inline-block;
    padding: 4px 8px;
    background: #00bcd4;
    color: #fff;
    border-radius: 6px;
    font-size: 0.8em;
    margin-bottom: 6px;
  }

  .faq-actions {
    margin-top: 12px;
    display: flex;
    gap: 10px;
  }

  .btn {
    padding: 10px 18px;
    font-size: 0.9rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.3s, transform 0.2s;
  }

  .update-btn {
    background-color: #00bcd4;
    color: white;
  }

  .update-btn:hover {
    background-color: #0097a7;
    transform: scale(1.05);
  }

  .delete-btn {
    background-color: #e74c3c;
    color: white;
  }

  .delete-btn:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

export default Wrapper;
