import styled from "styled-components";

const Wrapper = styled.section`
  .faq-container {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    margin-bottom: 16px;
  }

  .faq-question {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 8px;
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
`;
export default Wrapper;
