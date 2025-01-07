import Wrapper from "../assets/wrappers/Sidebar";
const SideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Add FAQ</li>
          <li className="menu-item">Category</li>
        </ul>
        <button className="logout-btn">Logout</button>
      </div>
    </Wrapper>
  );
};

export default SideBar;
