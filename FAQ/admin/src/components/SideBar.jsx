import Wrapper from "../assets/wrappers/Sidebar";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Wrapper>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard/" className="sidebar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard/addfaq" className="sidebar-link">
              Add FAQ
            </Link>
          </li>
          <li>
            <Link to="/dashboard/category" className="sidebar-link">
              Category
            </Link>
          </li>
          <li className="logout">
            <button className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default SideBar;
