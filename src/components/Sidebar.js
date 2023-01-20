import Link from "next/link";
import { MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="aside">
      <div className="sidebar-container">
        <img src="./img/home-img.png" alt="" />
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">
                <span>
                  <MdDashboard />
                </span>
                DashBoard
              </Link>
            </li>
            <li>
              <Link href="/appoinment">
                <span>
                  <RiContactsBook2Fill />
                </span>
                Appoinment
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>
                  <CgProfile />
                </span>
                Doctor
              </Link>
            </li>
            <li>
              <Link href="/profilesetting">
                <span>
                  <MdAdminPanelSettings />
                </span>
                Profile Setting
              </Link>
            </li>
            <li>
              <Link href="/passwordchange">
                <span>
                  <BsFillFileLock2Fill />
                </span>
                Password Change
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
