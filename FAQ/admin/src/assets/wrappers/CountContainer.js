import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--primary-color, #2c2b2c);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px; /* Rounded corners for a smoother look */
  margin: 20px 0; /* Margin to provide spacing from other elements */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Space between any nested elements */
  transition: all 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
    background-color: var(
      --primary-hover,
      #3c3b3c
    ); /* Slightly lighter background */
  }
`;

export default Wrapper;
