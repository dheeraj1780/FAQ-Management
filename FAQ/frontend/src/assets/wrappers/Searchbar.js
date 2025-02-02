import styled from "styled-components";

const Wrapper = styled.div`
  .search-form {
    display: flex;
    flex-direction: column; /* Ensure the children stack vertically */
    align-items: flex-start; /* Align items to the start of the container */
    width: 100%; /* Make sure it stretches across the container */
    padding: 0; /* No extra padding */
  }
  .search-bar-container {
    background-color: #1e1e2f; /* Dark background for a modern look */
    padding: 1.2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin: 1rem 0;
    min-width: 100%; /* Prevents overly wide forms */
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
    color: #00bcd4; /* Cyan accent for text */
    font-weight: 500;
  }

  .input-container input {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #444; /* Darker border */
    background: #2b2b3c;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  .input-container input:focus {
    border-color: #00bcd4;
    outline: none;
    box-shadow: 0px 0px 8px rgba(0, 188, 212, 0.5);
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
  }

  .search-btn {
    background-color: #00bcd4; /* Cyan primary button */
    color: white;
    border: none;
  }

  .search-btn:hover {
    background-color: #0097a7;
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(0, 188, 212, 0.5);
  }

  .reset-btn {
    background-color: #e74c3c; /* Red reset button */
    color: white;
    border: none;
  }

  .reset-btn:hover {
    background-color: #c0392b;
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(231, 76, 60, 0.5);
  }
`;

export default Wrapper;
