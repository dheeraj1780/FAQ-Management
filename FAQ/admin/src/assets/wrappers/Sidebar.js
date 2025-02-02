import styled from "styled-components";

const Wrapper = styled.section`
  width: 260px; /* Slightly wider for better usability */
  height: 100vh; /* Full height */
  background-color: #1e1e2f; /* Matching dark UI */
  color: white;
  padding: 20px;
  z-index: 10; /* Ensures the sidebar stays above other elements */
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */

  /* Sidebar Navigation */
  .sidebar-nav {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    gap: 0.5rem;
  }

  .sidebar-link {
    color: #00bcd4; /* Cyan accent */
    text-decoration: none;
    display: block;
    font-size: 1rem;
    padding: 12px 18px;
    margin: 5px 0;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    font-weight: 500;
  }

  .sidebar-link:hover {
    background: #00bcd4;
    color: white;
    transform: scale(1.05);
  }

  /* Logout Button */
  .logout {
    margin-top: auto; /* Push the logout button to the bottom */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logout-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 12px 16px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    width: 100%;
  }

  .logout-btn:hover {
    background: #c0392b;
    transform: scale(1.05);
    box-shadow: 0px 4px 8px rgba(231, 76, 60, 0.5);
  }
`;

export default Wrapper;
