import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #1e1e2f; /* Dark background */
  color: white;
  padding: 20px;

  img {
    width: 85vw;
    max-width: 500px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -2rem;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3));
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    color: #00bcd4; /* Cyan accent */
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: #b0bec5; /* Light gray for better readability */
    max-width: 500px;
  }

  a {
    color: #00bcd4;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #0097a7;
    text-decoration: underline;
  }
`;

export default Wrapper;
