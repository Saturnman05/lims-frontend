import { FormWrapper } from "../../../../components/wrappers/form-wrapper/index";
import { Link } from "react-router";

const formPages = [
  {
    category: "Datos Personales",
    fields: [
      { name: "name", label: "Nombre", type: "text" },
      { name: "lastName", label: "Apellido", type: "text" },
      { name: "cedula", label: "Cédula", type: "text" },
      { name: "email", label: "Correo Institucional", type: "email" },
      { name: "phone", label: "Teléfono", type: "text" },
    ],
  },
  {
    category: "Datos del Usuario",
    fields: [
      { name: "username", label: "Nombre de Usuario", type: "text" },
      {
        name: "rol",
        label: "Rol",
        type: "select",
        options: [
          { value: "Empleado", label: "Empleado" },
          { value: "Master", label: "Master" },
        ],
      },
      { name: "password", label: "Contraseña", type: "password" },
      {
        name: "confirmPassword",
        label: "Confirmar Contraseña",
        type: "password",
      },
    ],
  },
];

export default function RegisterUserMasterCompany() {
  return (
    <FormWrapper
      formPages={formPages}
      breadCrumbItems={[
        { title: <Link to="/layout-master-company/home-master-company">Home</Link> },
        {
          title: (
            <Link to="/layout-master-company/user-management-master-company">Administración</Link>
          ),
        },
        {
          title: (
            <Link to="/layout-master-company/user-management-master-company/register-user-master-company/">
              Gestion de Usuarios Internos
            </Link>
          ),
        },
        { title: "Register" },
      ]}
    />
  );
}