import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%; /* Make it stretch across the screen */
  padding: 1rem 2rem;
  background-color: var(--primary-color, #2c2b2c);
  color: white; /* Ensure text is visible */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Wrapper;
