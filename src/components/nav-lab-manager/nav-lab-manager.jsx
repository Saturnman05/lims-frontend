import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../styles/nav-lab-manager/nav-lab-manager.css";

export function NavLabManager() {
  return (
    <nav className="nav-lab-header">
      <div className="navbar-logo">
        <Link to="#" target="_blank" rel="noopener noreferrer">
          L.I.M.S
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <CustomLink to="/SampleManagement">Gestión de Muestras</CustomLink>
        </li>
        <li>
          <CustomLink to="/SampleAssignment">Asignación de Muestras</CustomLink>
        </li>
        <li>
          <CustomLink to="/Results">Resultados</CustomLink>
        </li>
        <li>
          <CustomLink to="/Information">Informes</CustomLink>
        </li>
        <li>
          <CustomLink to="/Management">Administración</CustomLink>
        </li>
        <li>
          <CustomLink to="/support">Soporte</CustomLink>
        </li>
        <li>
          <CustomLink to="/Account">
            <Avatar
              className="custom-avatar"
              size={30}
              icon={<UserOutlined />}
            />
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = useLocation();

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
