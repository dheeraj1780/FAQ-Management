import styled from "styled-components";

const Wrapper = styled.section`
  .sidebar {
    width: 250px;
    height: calc(100vh - var(--nav-height, 60px));
    background-color: var(--sidebar-bg, #333);
    color: var(--sidebar-text, #fff);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar-menu {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-item {
    margin-bottom: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s;
  }

  .menu-item:hover {
    color: var(--primary-color, #007bff);
  }

  .logout-btn {
    background-color: var(--logout-bg, #e74c3c);
    color: var(--white, #fff);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .logout-btn:hover {
    background-color: var(--logout-hover-bg, #c0392b);
  }
`;
export default Wrapper;
