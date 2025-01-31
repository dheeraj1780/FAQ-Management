// SearchBarWrapper.js
import styled from "styled-components";

const Wrapper = styled.div`
  .search-bar-container {
    background-color: #e3f2fd; /* Light blue background */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
  }

  .search-bar-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }

  .input-container label {
    font-size: 1rem;
    color: #333;
  }

  .input-container input {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }

  .search-btn {
    background-color: #1e88e5; /* Blue button */
    color: white;
    border: none;
  }

  .search-btn:hover {
    background-color: #1976d2;
  }

  .reset-btn {
    background-color: #ff7043; /* Light red button */
    color: white;
    border: none;
  }

  .reset-btn:hover {
    background-color: #f4511e;
  }
`;

export default Wrapper;
