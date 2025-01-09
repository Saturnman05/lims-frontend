import { Link } from "react-router";
import { FormWrapper } from "../../../../../components/wrappers/form-wrapper";

const formPages = [
  {
    category: 'Datos Personales',
    fields: [
      { name: 'name', label: 'Nombre', type: 'text' },
      { name: 'lastName', label: 'Apellido', type: 'text' },
      { name: 'cedula', label: 'Cédula', type: 'text' },
      { name: 'email', label: 'Correo Institucional', type: 'email' },
      { name: 'phone', label: 'Teléfono', type: 'text' },
    ],
  },
  {
    category: 'Datos de la Empresa',
    fields: [
      { name: 'rol', label: 'Rol', type: 'select', options: [{ value: "Empleado", label: "Empleado" }, { value: "Master", label: "Master" }] },
      { name: 'companyName', label: 'Nombre de la Compañía', type: 'text' },
      { name: 'comercialName', label: 'Nombre Comercial', type: 'text' },
      { name: 'rnc', label: 'RNC', type: 'text' },
    ],
  },
  {
    category: 'Datos del Usuario',
    fields: [
      { name: 'username', label: 'Nombre de Usuario', type: 'text' },
      { name: 'password', label: 'Contraseña', type: 'password' },
      { name: 'confirmPassword', label: 'Confirmar Contraseña', type: 'password' },
    ],
  },
];

export default function RegisterMaster () {
  return (
    <FormWrapper 
      formPages={formPages} 
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/management">Administracion</Link> },
        { title: <Link to="/layout-lab-manager/management/users">Gestion de Usuarios</Link> },
        { title: "Registrar Usuario" },
      ]} 
    />
  )
}