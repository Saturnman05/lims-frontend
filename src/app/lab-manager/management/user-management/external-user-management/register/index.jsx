import { Link } from "react-router";
import { FormWrapper } from "../../../../../../components/wrappers/form-wrapper/index.jsx";
import { postExternalUser } from "../../../../../../api/users/index.js";
import { message } from "antd";

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
    category: "Datos de la Empresa",
    fields: [
      {
        name: "rol",
        label: "Rol",
        type: "select",
        options: [
          { value: "Empleado", label: "Empleado" },
          { value: "Master", label: "Master" },
        ],
      },
      { name: "companyName", label: "Nombre de la Compañía", type: "text" },
      { name: "comercialName", label: "Nombre Comercial", type: "text" },
      { name: "rnc", label: "RNC", type: "text" },
    ],
  },
  {
    category: "Datos del Usuario",
    fields: [
      { name: "username", label: "Nombre de Usuario", type: "text" },
      { name: "password", label: "Contraseña", type: "password" },
      {
        name: "confirmPassword",
        label: "Confirmar Contraseña",
        type: "password",
      },
    ],
  },
];

export default function ExternalRegisterLabManager() {
  const onSubmit = async (user) => {
    if (user.password !== user.confirmPassword) {
      message.error("Las contraseñas deben ser iguales");
      return;
    }

    console.log("usuario a crear", user);

    try {
      const response = await postExternalUser({
        cedula: user.cedula,
        comercialName: user.comercialName,
        companyName: user.companyName,
        email: user.email,
        fullName: user.name + " " + user.lastName,
        isMaster: user.rol === "Master",
        password: user.password,
        phone: user.phone,
        rnc: user.rnc,
        username: user.username,
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormWrapper
      formPages={formPages}
      onSubmit={onSubmit}
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        {
          title: (
            <Link to="/layout-lab-manager/management">Administración</Link>
          ),
        },
        {
          title: (
            <Link to="/layout-lab-manager/management/user-management-internal/">
              Gestion de Usuarios Externos
            </Link>
          ),
        },
        { title: "Registrar Usuario" },
      ]}
    />
  );
}
