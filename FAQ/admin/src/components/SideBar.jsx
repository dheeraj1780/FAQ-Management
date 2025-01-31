import Wrapper from "../assets/wrappers/Sidebar";
import { useDashboardContext } from "../pages/dashboard";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard/" className="sidebar-link">
              FAQ
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
          <li>
            <Link to="/dashboard/addcategory" className="sidebar-link">
              Add Category
            </Link>
          </li>
          <li className="logout">
            <button className="logout-btn" onClick={logoutUser}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default SideBar;
