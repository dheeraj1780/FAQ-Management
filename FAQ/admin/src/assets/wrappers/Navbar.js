import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: 100%;
    height: var(--nav-height, 60px);
    background-color: var(--primary-color, #007bff);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: var(--white, #fff);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
`;
export default Wrapper;
