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
  }

  .faq-container:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
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
