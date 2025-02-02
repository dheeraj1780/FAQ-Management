import styled from "styled-components";

const Wrapper = styled.section`
  margin: 20px;
  padding: 25px;
  border-radius: 16px;
  background-color: #2b2b3c; /* Dark background */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Soft shadow */
  max-width: 550px;
  margin: auto;

  form-faq {
    max-width: 100%;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #00bcd4; /* Cyan accent */
    font-size: 1.8rem;
    font-weight: 600;
  }

  .form-group {
    margin-bottom: 18px;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: white;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #444;
    border-radius: 8px;
    box-sizing: border-box;
    background: #333847;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #00bcd4;
    box-shadow: 0px 0px 8px rgba(0, 188, 212, 0.5);
  }

  textarea {
    resize: none;
    height: 120px;
  }

  .form-actions {
    text-align: center;
  }

  .btn {
    padding: 12px 22px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #00bcd4;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover {
    background-color: #0097a7;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 188, 212, 0.5);
  }
`;

export default Wrapper;
