import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "../../../styles/lab-manager/nav-lab-manager/index.css";
import { Avatar, Dropdown } from "antd";

const itemsManagement = [
  {
    key: "1",
    type: "group",
    label: "Gestión de Usuarios",
    children: [
      {
        key: "1-1",
        label: "internos",
        children: [
          { key: "1-1-1", label: "Registrar Usuario" },
          { key: "1-1-2", label: "Listar Usuarios" },
        ],
      },
      {
        key: "1-2",
        label: "externos",
        children: [
          { key: "1-2-1", label: "Registrar Usuario" },
          { key: "1-2-2", label: "Listar Usuarios" },
        ],
      },
    ],
  },
  {
    key: "2",
    label: "sub menu",
    children: [
      { key: "2-1", label: "3rd menu item" },
      { key: "2-2", label: "4th menu item" },
    ],
  },
  {
    key: "3",
    label: "disabled sub menu",
    disabled: true,
    children: [
      { key: "3-1", label: "5th menu item" },
      { key: "3-2", label: "6th menu item" },
    ],
  },
];

export default function NavLabManager() {
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
          <Dropdown menu={{ items: itemsManagement }}>
            <CustomLink to="/layout-lab-manager/management">
              Administración <DownOutlined />
            </CustomLink>
          </Dropdown>
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/support">Soporte</CustomLink>
        </li>
        <li>
          <Avatar className="custom-avatar" size={30} icon={<UserOutlined />} />
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={location.pathname === to ? "active" : ""}
      {...props}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
