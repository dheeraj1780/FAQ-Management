import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-content {
    display: flex;
    background-color: var(
      --bg-color,
      #1f2229
    ); /* Keeping the sidebar's dark color */
    min-height: 100vh;
    color: white;
  }

  .main-content {
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #2c3e50; /* Light grayish-white for the content area */
    min-height: calc(100vh - var(--nav-height, 60px));
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    padding: 20px;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
  }

  .sidebar-item {
    padding: 12px 20px;
    margin: 5px 0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .sidebar-item:hover {
    background-color: #34495e;
  }
`;

export default Wrapper;
