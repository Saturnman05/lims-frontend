import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import "../../../styles/LabManager/nav-lab-manager/index.css";

export function NavLabManager() {
  return (
    <nav className="nav-lab-header">
      <div className="navbar-logo">
        <Link to="/layoutLabManager/homeLabManager" rel="noopener noreferrer">
          L.I.M.S
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <CustomLink to="/layoutLabManager/samples">Muestras</CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/resultsAudit">
            Resultados y Auditoría
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/informs">Informes</CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/statistics">
            Estadísticas
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/management">
            Administración
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/support">Soporte</CustomLink>
        </li>
        <li>
          <CustomLink to="/layoutLabManager/account">
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
  const location = useLocation();

  return (
    <li className={location.pathname === to ? "active" : ""}>
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
