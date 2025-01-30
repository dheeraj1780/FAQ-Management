import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--main-bg, #f4f4f9);

  .form {
    background: white;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  h4 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: var(--text-color, #333);
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    padding: 10px;
    border: 1px solid var(--input-border, #ccc);
    border-radius: 5px;
    font-size: 1rem;
  }

  input:focus {
    outline: none;
    border-color: var(--input-focus, #007bff);
    box-shadow: 0 0 3px var(--input-focus, #007bff);
  }

  .submit-btn {
    background: var(--btn-bg, #007bff);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
  }

  .submit-btn:hover {
    background: var(--btn-hover, #0056b3);
  }
`;

export default Wrapper;
