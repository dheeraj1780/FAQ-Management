// CategoryWrapper.js
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .category-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .category-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .category-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
  }

  .category-header p {
    font-size: 1rem;
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
`;

export default Wrapper;
