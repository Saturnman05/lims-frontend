import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../styles/nav-lab-manager/nav-lab-manager.css";

export function NavLabManager() {
  return (
    <nav className="nav-lab-header">
      <div className="navbar-logo">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          L.I.M.S
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/SampleManagement">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/SampleAssignment">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/Results">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/Information">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/Management">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/support">Gestión de Muestras</a>
        </li>
        <li>
          <a href="/Account">
            <Avatar
              style={{ backgroundColor: "#EADDFF" }}
              size={30}
              icon={<UserOutlined style={{ color: "#4F378A" }} />}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
