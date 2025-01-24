import { useState, useEffect } from "react";
import { Table, Tag, Space, Input, Dropdown } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../../styles/wrappers/table-wrapper/user-table.css";
const { Search } = Input;

const ROLE_OPTIONS = [
  { key: "1", label: "Master" },
  { key: "2", label: "Empleado" },
];

const STATUS_OPTIONS = [
  { key: "1", label: "Activo" },
  { key: "2", label: "Desactivo" },
];

const INITIAL_DATA = [
  {
    key: "1",
    nombre: "Nombre Nombre Apellido Apellido",
    cedula: "xxx-xxxxxxx-x",
    correo: "correocorreo@mail.com",
    fechaRegistro: "15/08/2023",
    telefono: "xxx-xxx-xxxx",
    rol: "Master",
    activo: true,
  },
  {
    key: "2",
    nombre: "Nombre Nombre Apellido Apellido",
    cedula: "xxx-xxxxxxx-x",
    correo: "correocorreo@mail.com",
    fechaRegistro: "15/08/2023",
    telefono: "xxx-xxx-xxxx",
    rol: "Empleado",
    activo: false,
  },
];

const InternalUserManagementTable = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [animatedRows, setAnimatedRows] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRows(INITIAL_DATA.map((row) => row.key));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  const handleView = (record) => {
    console.log("Viewing user:", record);
  };

  const handleDelete = (record) => {
    console.log("Deleting user:", record);
  };

  const handleRoleSelect = ({ key }) => {
    setSelectedRole(key);
  };

  const handleStatusSelect = ({ key }) => {
    setSelectedStatus(key);
  };

  function roleColors(rol) {
    return rol === "Master" ? "bg-[#078C85]" : "bg-[#8B9AAD]";
  }

  const dropdownButtonStyle = (isSelected) =>
    isSelected
      ? "text-teal-500 border-b-2 border-teal-500"
      : "text-gray-600 border-b-2 border-gray-600 hover:text-teal-500";

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Cédula",
      dataIndex: "cedula",
      key: "cedula",
    },
    {
      title: "Correo",
      dataIndex: "correo",
      key: "correo",
    },
    {
      title: "Fecha de Registro",
      dataIndex: "fechaRegistro",
      key: "fechaRegistro",
    },
    {
      title: "Teléfono",
      dataIndex: "telefono",
      key: "telefono",
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "rol",
      render: (rol) => (
        <Tag
          className={`rounded-lg px-3 py-1 border-0 ${roleColors(
            rol
          )} text-white`}>
          {rol}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (_, record) => (
        <Space size="middle">
          <EyeOutlined
            className="text-blue-600 cursor-pointer text-lg hover:text-blue-700"
            onClick={() => handleView(record)}
          />
          <DeleteOutlined
            className="text-red-500 cursor-pointer text-lg hover:text-red-600"
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
    {
      title: "Active",
      dataIndex: "activo",
      key: "activo",
      render: (activo) => (
        <span
          className={`inline-block w-3 h-3 rounded-full ${
            activo ? "bg-emerald-400" : "bg-slate-300"
          }`}
        />
      ),
    },
  ];

  return (
    <div className="p-4 w-full table">
      <div className="flex gap-60 mb-4 self-start">
        <div className="relative">
          <Search
            placeholder="Nombre del usuario"
            onSearch={handleSearch}
            allowClear
            className="w-64 bg-slate-50"
          />
        </div>

        <Dropdown
          menu={{
            items: ROLE_OPTIONS,
            selectable: true,
            onSelect: handleRoleSelect,
            selectedKeys: selectedRole ? [selectedRole] : [],
          }}
          placement="bottomLeft">
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedRole
            )}`}>
            Rol
          </button>
        </Dropdown>

        <Dropdown
          menu={{
            items: STATUS_OPTIONS,
            selectable: true,
            onSelect: handleStatusSelect,
            selectedKeys: selectedStatus ? [selectedStatus] : [],
          }}
          placement="bottomLeft">
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedStatus
            )}`}>
            Estado
          </button>
        </Dropdown>
      </div>

      <Table
        dataSource={INITIAL_DATA}
        columns={columns}
        pagination={false}
        className="bg-white w-[100%]"
        rowClassName={(record) =>
          `bg-white hover:bg-slate-50 ${
            animatedRows.includes(record.key)
              ? "animate-fade-in"
              : "animate-none"
          }`
        }
        components={{
          header: {
            cell: ({ children, ...props }) => (
              <th
                {...props}
                className="bg-slate-50 text-slate-600 font-medium ">
                {children}
              </th>
            ),
          },
        }}
      />
    </div>
  );
};

export default InternalUserManagementTable;
