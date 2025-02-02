import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: 100%;
    height: 60px;
    background-color: #1e1e2f; /* Dark background */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
    color: white;
    transition: all 0.3s ease-in-out;
  }

  nav:hover {
    background-color: #2b2b3c;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    color: #00bcd4; /* Cyan accent */
    letter-spacing: 0.05rem;
    transition: all 0.3s ease-in-out;
  }

  h1:hover {
    color: #ffffff;
    transform: scale(1.05);
  }
`;

export default Wrapper;
