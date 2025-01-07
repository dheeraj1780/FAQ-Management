import styled from "styled-components";

const Wrapper = styled.section`
  margin: 20px;
  padding: 20px;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  form {
    max-width: 500px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
  }

  textarea {
    resize: none;
    height: 100px;
  }

  .form-actions {
    text-align: center;
  }

  .btn {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #0056b3;
  }
`;
export default Wrapper;
