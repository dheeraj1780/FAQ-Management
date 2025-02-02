import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #1e1e2f; /* Dark background */

  .form {
    background: #2b2b3c; /* Darker form background */
    padding: 25px 35px;
    border-radius: 12px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow */
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  h4 {
    margin-bottom: 15px;
    font-size: 1.6rem;
    color: #00bcd4; /* Cyan accent */
    font-weight: 600;
  }

  .form-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    padding: 12px;
    border: 1px solid #444; /* Darker border */
    border-radius: 6px;
    font-size: 1rem;
    background: #333847;
    color: white;
    transition: all 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
    border-color: #00bcd4;
    box-shadow: 0px 0px 8px rgba(0, 188, 212, 0.5);
  }

  .submit-btn {
    background: #00bcd4; /* Cyan button */
    color: white;
    border: none;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
  }

  .submit-btn:hover {
    background: #0097a7;
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 188, 212, 0.5);
  }
`;

export default Wrapper;
