import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard-content {
    display: flex;
  }

  .main-content {
    flex: 1;
    padding: 20px;
    background-color: var(--main-bg, #f4f4f9);
    min-height: calc(100vh - var(--nav-height, 60px));
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
export default Wrapper;
