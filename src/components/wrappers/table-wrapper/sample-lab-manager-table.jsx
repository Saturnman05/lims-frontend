{
  /*

import { Table, Space, Input, Divider } from "antd";
import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

// ====== Datos para Dropdowns ======
const itemsRole = [
  {
    key: "1",
    label: "Master",
  },
  {
    key: "2",
    label: "Empleado",
  },
];

const itemState = [
  {
    key: "1",
    label: "Activo",
  },
  {
    key: "2",
    label: "Desactivo",
  },
];

const { Search } = Input;
const { Column } = Table;
*}
// ====== Datos de ejemplo de la tabla ======

const data = [
  {
    key: "1",
    solicitud: "RD-2023-0178",
    nombreProducto: "Salsa de Tomate “Doña Juana”",
    marca: "Doña Juana",
    fechaCreacion: "15/08/2023",
    estado: "En Proceso",
    resultado: "Pendiente",
  },
  {
    key: "2",
    solicitud: "RD-2023-0178",
    nombreProducto: "Salsa de Tomate “Doña Juana”",
    marca: "Doña Juana",
    fechaCreacion: "15/08/2023",
    estado: "Aceptada",
    resultado: "Aprobada",
  },
  {
    key: "3",
    solicitud: "RD-2023-0178",
    nombreProducto: "Salsa de Tomate “Doña Juana”",
    marca: "Doña Juana",
    fechaCreacion: "15/08/2023",
    estado: "Rechazada",
    resultado: "Reprobada",
  },
  {
    key: "4",
    solicitud: "RD-2023-0178",
    nombreProducto: "Salsa de Tomate “Doña Juana”",
    marca: "Doña Juana",
    fechaCreacion: "15/08/2023",
    estado: "Completada",
    resultado: "Aprobada",
  },
];

// Paletas de colores para el “Estado”
const estadoColors = {
  "En Proceso": { backgroundColor: "#CCF2F2", color: "#008B9F" },
  Aceptada: { backgroundColor: "#CDEEE2", color: "#188C75" },
  Rechazada: { backgroundColor: "#FCDADA", color: "#D84B46" },
  Completada: { backgroundColor: "#093B36", color: "#FFFFFF" },
};

// Paletas de colores para el “Resultado”
const resultadoColors = {
  Pendiente: { backgroundColor: "#C9CACC", color: "#555555" },
  Aprobada: { backgroundColor: "#9EA1A4", color: "#FFFFFF" },
  Reprobada: { backgroundColor: "#9F1C1C", color: "#FFFFFF" },
};

const TableSamplesLabManager = () => {
  // Función para renderizar un “tag” con estilo personalizado
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

  return (
    <div>

      <Table dataSource={data} pagination={false}>
        <Column title="Solicitud No." dataIndex="solicitud" key="solicitud" />
        <Column
          title="Nombre del Producto"
          dataIndex="nombreProducto"
          key="nombreProducto"
        />
        <Column title="Marca" dataIndex="marca" key="marca" />
        <Column
          title="Fecha de Creación"
          dataIndex="fechaCreacion"
          key="fechaCreacion"
        />

        {/* Columna: Estado */
}
{
  /*
        <Column
          title="Estado"
          dataIndex="estado"
          key="estado"
          render={(estado) => renderCustomTag(estado, estadoColors)}
        />

        { Columna: Resultado }
        <Column
          title="Resultado"
          dataIndex="resultado"
          key="resultado"
          render={(res) => renderCustomTag(res, resultadoColors)}
        />

        {/* Columna: Acciones (iconos) }
        <Column
          title="Acciones"
          key="acciones"
          render={(_, record) => (
            <Space size="middle">
              <EditOutlined
                style={{ color: "#3261DD", fontSize: 16, cursor: "pointer" }}
                onClick={() => console.log("Editar:", record)}
              />
              <EyeOutlined
                style={{ color: "#3261DD", fontSize: 16, cursor: "pointer" }}
                onClick={() => console.log("Ver:", record)}
              />
              <DeleteOutlined
                style={{ color: "red", fontSize: 16, cursor: "pointer" }}
                onClick={() => console.log("Eliminar:", record)}
              />
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default App;
 
*/
}
