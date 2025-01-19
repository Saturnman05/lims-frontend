import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  UserOutlined,
  CaretRightOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "../../../styles/lab-manager/nav-lab-manager/index.css";
import { Avatar } from "antd";
import { CSSTransition } from "react-transition-group";
import { useLogout } from "../../../hooks/logout";

export function NavLabManager() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [adminPosition, setAdminPosition] = useState({ x: 0 });
  const [avatarPosition, setAvatarPosition] = useState({ x: 0 });

  const { logout } = useLogout();

  const adminDropdownRef = useRef(null);
  const avatarDropdownRef = useRef(null);

  useEffect(() => {
    if (isAdminOpen && adminDropdownRef.current) {
      const dropdownRect = adminDropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (dropdownRect.right > screenWidth - 20) {
        const overflowRight = dropdownRect.right - (screenWidth - 20);
        setAdminPosition((prev) => ({ ...prev, x: prev.x - overflowRight }));
      }

      if (dropdownRect.left < 20) {
        setAdminPosition((prev) => ({ ...prev, x: -dropdownRect.left + 20 }));
      }
    }
  }, [isAdminOpen]);

  useEffect(() => {
    if (isAvatarOpen && avatarDropdownRef.current) {
      const dropdownRect = avatarDropdownRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (dropdownRect.right > screenWidth - 20) {
        const overflowRight = dropdownRect.right - (screenWidth - 20);
        setAvatarPosition((prev) => ({ ...prev, x: prev.x - overflowRight }));
      }

      if (dropdownRect.left < 20) {
        setAvatarPosition((prev) => ({ ...prev, x: -dropdownRect.left + 20 }));
      }
    }
  }, [isAvatarOpen]);

  const adminItems = [
    {
      to: "#",
      label: "Ajustes de Laboratorio",
    },
    {
      to: "#",
      label: "Gestión de Usuarios",
      goToMenu: "userManagement",
      rightIcon: <CaretRightOutlined />,
    },
  ];

  const userManagementItems = [
    {
      to: "#",
      label: "Internos",
      rightIcon: <CaretRightOutlined />,
      goToMenu: "userManagementInternal",
    },
    {
      to: "#",
      label: "Externos",
      goToMenu: "userManagementExternal",
      rightIcon: <CaretRightOutlined />,
    },
  ];

  const userManagementExternalItems = [
    { to: "#", label: "Gestión" },
    {
      to: "/layout-lab-manager/management/user-management-external/register",
      label: "Registrar Usuario",
    },
  ];

  const userManagementInternalItems = [
    { to: "#", label: "Gestión" },
    {
      to: "/layout-lab-manager/management/user-management-internal/register",
      label: "Registrar Usuario",
    },
  ];

  const AvatarItems = [
    {
      to: "",
      label: "Cerrar sesión",
      func: logout,
    },
    {
      to: "#",
      label: "Ajustes de Laboratorio",
      rightIcon: <CaretRightOutlined />,
    },
    { to: "/ruta-b", label: "Opción B" },
    { to: "/ruta-c", label: "Opción C" },
  ];

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
        <li
          className="dropdown-container"
          onMouseEnter={() => setIsAdminOpen(true)}
          onMouseLeave={() => setIsAdminOpen(false)}>
          <button className="administracion-button">
            Administración <DownOutlined />
          </button>
          {isAdminOpen && (
            <DropdownMenu
              ref={adminDropdownRef}
              items={adminItems}
              submenus={{
                userManagement: userManagementItems,
                userManagementExternal: userManagementExternalItems,
                userManagementInternal: userManagementInternalItems,
              }}
              position={adminPosition}
            />
          )}
        </li>
        <li>
          <CustomLink to="/layout-lab-manager/support">Soporte</CustomLink>
        </li>
        <li
          className="avatar-container"
          onMouseEnter={() => setIsAvatarOpen(true)}
          onMouseLeave={() => setIsAvatarOpen(false)}>
          <Avatar className="custom-avatar" size={30} icon={<UserOutlined />} />
          {isAvatarOpen && (
            <DropdownMenu
              ref={avatarDropdownRef}
              items={AvatarItems}
              position={avatarPosition}
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

const DropdownMenu = React.forwardRef(
  ({ items, submenus, subsubmenus, position }, ref) => {
    const [activeMenu, setActiveMenu] = useState("main");

    function DropdownItem({ to, children, rightIcon, leftIcon, goToMenu, onClick }) {
      return (
        <li
          className="menu-item"
          onClick={() => {goToMenu && setActiveMenu(goToMenu); onClick && onClick()}}
        >
          <CustomLink to={to}>
            {leftIcon && <span className="icon-left">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="icon-right">{rightIcon}</span>}
          </CustomLink>
        </li>
      );
    }

    DropdownItem.propTypes = {
      to: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
      rightIcon: PropTypes.node,
      leftIcon: PropTypes.node,
      goToMenu: PropTypes.string,
      onClick: PropTypes.func,
    };

    const dropdownStyle = {
      transform: `translateX(${position.x}px)`,
    };

    return (
      <ul className="dropdown" ref={ref} style={dropdownStyle}>
        {/* Render menú principal */}
        <CSSTransition
          in={activeMenu === "main"}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
        >
          <div className="menu">
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                to={item.to}
                rightIcon={item.rightIcon}
                leftIcon={item.leftIcon}
                goToMenu={item.goToMenu}
                onClick={item.func}
              >
                {item.label}
              </DropdownItem>
            ))}
          </div>
        </CSSTransition>

        {/* Render submenús */}
        {submenus &&
          Object.entries(submenus).map(([menuKey, submenuItems]) => (
            <CSSTransition
              key={menuKey}
              in={activeMenu === menuKey}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit>
              <div className="menu">
                {submenuItems.map((item, index) => (
                  <DropdownItem
                    key={index}
                    to={item.to}
                    rightIcon={item.rightIcon}
                    leftIcon={item.leftIcon}
                    goToMenu={item.goToMenu}>
                    {item.label}
                  </DropdownItem>
                ))}
              </div>
            </CSSTransition>
          ))}

        {/* Render sub-submenús (nivel terciario) */}
        {subsubmenus &&
          Object.entries(subsubmenus).map(([menuKey, subsubmenuItems]) => (
            <CSSTransition
              key={menuKey}
              in={activeMenu === menuKey}
              timeout={500}
              classNames="menu-tertiary"
              unmountOnExit>
              <div className="menu">
                {subsubmenuItems.map((item, index) => (
                  <DropdownItem
                    key={index}
                    to={item.to}
                    rightIcon={item.rightIcon}
                    leftIcon={item.leftIcon}>
                    {item.label}
                  </DropdownItem>
                ))}
              </div>
            </CSSTransition>
          ))}
      </ul>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.node.isRequired,
      rightIcon: PropTypes.node,
      goToMenu: PropTypes.string,
      func: PropTypes.func,
    })
  ).isRequired,
  submenus: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.node.isRequired,
        rightIcon: PropTypes.node,
        leftIcon: PropTypes.node,
      })
    )
  ),
  subsubmenus: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string.isRequired,
        label: PropTypes.node.isRequired,
        rightIcon: PropTypes.node,
        leftIcon: PropTypes.node,
      })
    )
  ),
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
  }).isRequired,
};

function CustomLink({ to, children, ...props }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={location.pathname === to ? "active" : ""}
      {...props}
    >
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
