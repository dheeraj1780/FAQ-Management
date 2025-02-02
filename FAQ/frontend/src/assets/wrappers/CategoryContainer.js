import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
    background-color: #f8f8f8;
  }
  .category-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .category-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .category-header h3 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #2c3e50;
    margin: 0;
  }

  .category-header p {
    font-size: 1.1rem;
    color: #7f8c8d;
  }

  .category-details {
    margin-top: 1rem;
    font-size: 1rem;
    color: #7f8c8d;
  }

  .category-details strong {
    font-weight: 600;
    color: #2c3e50;
  }

  .category-actions {
    margin-top: 12px;
    display: flex;
    gap: 15px;
  }

  .btn {
    padding: 8px 18px;
    font-size: 1rem;
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
