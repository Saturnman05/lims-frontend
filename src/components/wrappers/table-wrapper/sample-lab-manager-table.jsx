import { useState, useEffect } from "react";
import { Table, Space, Input, Dropdown } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import "../../../styles/wrappers/table-wrapper/user-table.css";

const { Search } = Input;

const CATEGORIA_OPTIONS = [
  { key: "1", label: "Lácteos" },
  { key: "2", label: "Carnes" },
  { key: "3", label: "Bebidas" },
  { key: "4", label: "Cereales" },
];

const TIEMPO_OPTIONS = [
  { key: "1", label: "Semanal" },
  { key: "2", label: "Mensual" },
  { key: "3", label: "Anual" },
];

const ESTADO_OPTIONS = [
  { key: "1", label: "En Proceso" },
  { key: "2", label: "Aceptada" },
  { key: "3", label: "Rechazada" },
  { key: "4", label: "Completada" },
];

const SOLICITANTE_OPTIONS = [
  { key: "1", label: "Nestlé Dominicana" },
  { key: "2", label: "Productos Chef S.A." },
  { key: "3", label: "Distribuidora Nacional de Alimentos" },
  { key: "4", label: "Carnes del Caribe SRL" },
];

const INITIAL_DATA = [
  {
    key: "1",
    solicitud: "RD-2023-0178",
    nombreProducto: "Salsa de Tomate “Doña Juana”",
    marca: "Doña Juana",
    fechaCreacion: "15/08/2023",
    estado: "En Proceso",
    resultado: "Pendiente",
    categoria: "Bebidas",
    solicitante: "Nestlé Dominicana",
  },
  {
    key: "2",
    solicitud: "RD-2023-0179",
    nombreProducto: "Leche Entera",
    marca: "Nestlé",
    fechaCreacion: "18/09/2023",
    estado: "Aceptada",
    resultado: "Aprobada",
    categoria: "Lácteos",
    solicitante: "Nestlé Dominicana",
  },
  {
    key: "3",
    solicitud: "RD-2023-0180",
    nombreProducto: "Carne Molida Premium",
    marca: "Carnes del Caribe",
    fechaCreacion: "10/07/2023",
    estado: "Rechazada",
    resultado: "Reprobada",
    categoria: "Carnes",
    solicitante: "Carnes del Caribe SRL",
  },
  {
    key: "4",
    solicitud: "RD-2023-0181",
    nombreProducto: "Harina de Trigo",
    marca: "Chef",
    fechaCreacion: "25/05/2023",
    estado: "Completada",
    resultado: "Aprobada",
    categoria: "Cereales",
    solicitante: "Productos Chef S.A.",
  },
];

const estadoColors = {
  "En Proceso": { backgroundColor: "#E5FFFE", color: "#0C1827" },
  Aceptada: { backgroundColor: "#75EBE4", color: "#0C1827" },
  Rechazada: { backgroundColor: "#EB7577", color: "#0C1827" },
  Completada: { backgroundColor: "#003D3A", color: "#FFFFFF" },
};

const resultadoColors = {
  Pendiente: { backgroundColor: "#DCE7F5", color: "#555555" },
  Aprobada: { backgroundColor: "#8B9AAD", color: "#FFFFFF" },
  Reprobada: { backgroundColor: "#B2090C", color: "#FFFFFF" },
};

const TableSamplesLabManager = () => {
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [selectedTiempo, setSelectedTiempo] = useState(null);
  const [selectedEstado, setSelectedEstado] = useState(null);
  const [selectedSolicitante, setSelectedSolicitante] = useState(null);
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
    console.log("Viewing sample:", record);
  };

  const handleDelete = (record) => {
    console.log("Deleting sample:", record);
  };

  const handleEdit = (record) => {
    console.log("Editing sample:", record);
  };

  const handleDropdownSelect = (key, setter) => {
    setter(key);
  };

  const dropdownButtonStyle = (isSelected) =>
    isSelected
      ? "text-teal-500 border-b-2 border-teal-500"
      : "text-gray-600 border-b-2 border-gray-600 hover:text-teal-500";

  const renderCustomTag = (text, colorMap) => {
    const style = colorMap[text] || {};
    return (
      <span
        style={{
          display: "inline-block",
          padding: "4px 12px",
          borderRadius: "8px",
          fontWeight: 500,
          ...style,
        }}>
        {text}
      </span>
    );
  };

  const columns = [
    {
      title: "Solicitud No.",
      dataIndex: "solicitud",
      key: "solicitud",
    },
    {
      title: "Nombre del Producto",
      dataIndex: "nombreProducto",
      key: "nombreProducto",
    },
    {
      title: "Marca",
      dataIndex: "marca",
      key: "marca",
    },
    {
      title: "Fecha de Creación",
      dataIndex: "fechaCreacion",
      key: "fechaCreacion",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      render: (estado) => renderCustomTag(estado, estadoColors),
    },
    {
      title: "Resultado",
      dataIndex: "resultado",
      key: "resultado",
      render: (resultado) => renderCustomTag(resultado, resultadoColors),
    },
    {
      title: "Categoría",
      dataIndex: "categoria",
      key: "categoria",
    },
    {
      title: "Solicitante",
      dataIndex: "solicitante",
      key: "solicitante",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "#3261DD", fontSize: 16, cursor: "pointer" }}
            onClick={() => handleEdit(record)}
          />
          <EyeOutlined
            style={{ color: "#3261DD", fontSize: 16, cursor: "pointer" }}
            onClick={() => handleView(record)}
          />
          <DeleteOutlined
            style={{ color: "red", fontSize: 16, cursor: "pointer" }}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  return (
    <div className="p-4 w-full">
      <div className="flex gap-40 mb-10">
        <Search
          placeholder="Buscar por solicitud"
          onSearch={handleSearch}
          allowClear
          className="w-64"
        />
        <Dropdown
          menu={{
            items: CATEGORIA_OPTIONS,
            selectable: true,
            onClick: ({ key }) =>
              handleDropdownSelect(key, setSelectedCategoria),
          }}>
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedCategoria
            )}`}>
            Categoría
          </button>
        </Dropdown>
        <Dropdown
          menu={{
            items: TIEMPO_OPTIONS,
            selectable: true,
            onClick: ({ key }) => handleDropdownSelect(key, setSelectedTiempo),
          }}>
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedTiempo
            )}`}>
            Tiempo
          </button>
        </Dropdown>
        <Dropdown
          menu={{
            items: ESTADO_OPTIONS,
            selectable: true,
            onClick: ({ key }) => handleDropdownSelect(key, setSelectedEstado),
          }}>
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedEstado
            )}`}>
            Estado
          </button>
        </Dropdown>
        <Dropdown
          menu={{
            items: SOLICITANTE_OPTIONS,
            selectable: true,
            onClick: ({ key }) =>
              handleDropdownSelect(key, setSelectedSolicitante),
          }}>
          <button
            className={`flex items-center ${dropdownButtonStyle(
              selectedSolicitante
            )}`}>
            Solicitante
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

export default TableSamplesLabManager;
