import styled from "styled-components";

const Wrapper = styled.section`
  width: 250px; /* Sidebar width */
  height: 100vh; /* Full height */
  background-color: #2c3e50; /* Sidebar background color */
  color: white;
  padding: 20px;
  z-index: 10; /* Ensures the sidebar stays above other elements */
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
  }

  .sidebar-link {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 6px;
    transition: background-color 0.3s;
  }

  .sidebar-link:hover {
    background-color: #34495e;
  }

  .logout {
    margin-top: auto; /* Push the logout button to the bottom */
  }

  .logout-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  .logout-btn:hover {
    background-color: #c0392b;
  }
`;
export default Wrapper;
