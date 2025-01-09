import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../../styles/lab-manager/nav-lab-manager/index.css";

export function NavLabManager() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-lab-header">
      <div className="navbar-logo">
        <Link to="/layout-lab-manager/home-lab-manager">L.I.M.S</Link>
      </div>
      <ul className="nav-links">
        <li>
          <CustomLink to="/layout-lab-manager/samples">Muestras</CustomLink>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/results-audit">
            Resultados y Auditoría
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/informs">Informes</CustomLink>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/statistics">
            Estadísticas
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/management">
            Administración
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/support">Soporte</CustomLink>
        </li>
        <li>
          <Avatar
            className="custom-avatar"
            size={30}
            icon={<UserOutlined />}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <ul className="dropdown-menu">
              <li>
                <CustomLink to="/layout-lab-manager/management/users">
                  Usuarios
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/layout-lab-manager/management/roles">
                  Roles
                </CustomLink>
              </li>
              <li>
                <CustomLink to="/layout-lab-manager/management/settings">
                  Configuración
                </CustomLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const location = useLocation();

  return (
    <li className={location.pathname === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function DropdownMenu() {
  function DropdownItem(props) {
    <CustomLink to={props.to} className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </CustomLink>;
  }
  return (
    <div className="dropdown">
      <DropdownItem>A</DropdownItem>
      <DropdownItem>B</DropdownItem>
      <DropdownItem>C</DropdownItem>
    </div>
  );
}
CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
