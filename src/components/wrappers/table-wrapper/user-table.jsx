import { useState } from "react";
import { Table, Tag, Space, Input, Dropdown } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";

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

const UserManagementTable = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

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
          className={`rounded-lg px-3 py-1 border-0 bg-slate-200 text-slate-700`}>
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
    <div className="p-4">
      <div className="flex items-center gap-4 mb-4">
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
            className={`cursor-pointer font-medium ${
              selectedRole
                ? "text-teal-500 hover:text-teal-600"
                : "text-gray-500 hover:text-gray-600"
            }`}>
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
            className={`cursor-pointer font-medium ${
              selectedStatus
                ? "text-teal-500 hover:text-teal-600"
                : "text-gray-500 hover:text-gray-600"
            }`}>
            Estado
          </button>
        </Dropdown>
      </div>

      <Table
        dataSource={INITIAL_DATA}
        columns={columns}
        pagination={false}
        className="bg-white"
        rowClassName="bg-white hover:bg-slate-50"
        components={{
          header: {
            cell: ({ children, ...props }) => (
              <th {...props} className="bg-slate-50 text-slate-600 font-medium">
                {children}
              </th>
            ),
          },
        }}
      />
    </div>
  );
};

export default UserManagementTable;
