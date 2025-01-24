import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "../../../styles/lab-manager/nav-lab-manager/index.css";
import { Avatar, Dropdown } from "antd";
import { useLogout } from "../../../hooks/logout.js"

export default function NavMasterCompany() {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const itemsManagement = [
    {
      key: "1",
      type: "group",
      label: "Gestión de Usuarios",
      children: [
        {
          key: "1-1",
          label: "Internos",
          children: [
            {
              key: "1-1-1",
              label: "Registrar Usuario",
              onClick: () => {
                navigate(
                  "/layout-master-company/user-management-master-company/register-user-master-company"
                );
              },
            },
            {
              key: "1-1-2",
              label: "Listar Usuarios",
              onClick: () => {
                navigate(
                  "/layout-master-company/user-management-master-company"
                );
              },
            },
          ],
        },
      ],
    },
  ];

  const isMaster = localStorage.getItem("userRol");
  const itemSamples = [
    {
      key: "1",
      label: "Solicitar muestras",
      onClick: () => {
        navigate("/layout-lab-manager/samples/request");
      },
    },
    {
      key: "2",
      label: "Ver Muestras",
      onClick: () => {
        navigate("/layout-lab-manager/samples");
      },
    },
  ];

  const itemAccount = [
    {
      key: "1",
      label: "logout",
      onClick: logout,
    }
  ]
  return (
    <nav className="nav-lab-header">
      <div className="navbar-logo">
        <Link to="/layout-lab-manager/home-lab-manager">L.I.M.S</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Dropdown menu={{ items: itemSamples }}>
            <CustomLink to="/layout-lab-manager/samples">Muestras</CustomLink>
          </Dropdown>
        </li>

        <li>
          <CustomLink to="/layout-lab-manager/informs">Informes</CustomLink>
        </li>
        {isMaster && (
          <li>
            <Dropdown menu={{ items: itemsManagement }}>
              <CustomLink to="/layout-lab-manager/management">
                Administración <DownOutlined />
              </CustomLink>
            </Dropdown>
          </li>
        )}

        <li>
          <CustomLink to="/layout-lab-manager/support">Soporte</CustomLink>
        </li>
        <li>
          <Dropdown menu={{ items: itemAccount}}>
            <Avatar className="custom-avatar" size={30} icon={<UserOutlined />} />
          </Dropdown>
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
