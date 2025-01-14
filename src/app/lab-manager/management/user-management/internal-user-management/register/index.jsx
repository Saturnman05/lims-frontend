import { Link } from "react-router";
import { FormWrapper } from "../../../../../../components/wrappers/form-wrapper/index.jsx";
import { postInternalUser } from "../../../../../../api/users/index.js"; // Importa la función
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

export default function InternalRegisterLabManager() {
  const onSubmit = async (user) => {
    if (user.password !== user.confirmPassword) {
      message.error("Las contraseñas deben ser iguales");
      return;
    }

    try {
      // Llama a la función postInternalUser
      const response = await postInternalUser({
        cedula: user.cedula,
        email: user.email,
        fullName: user.name + " " + user.lastName,
        isMaster: user.rol === "Master",
        password: user.password,
        phone: user.phone,
        username: user.username,
      });
      console.log(response);
      // Si no hay error, puedes agregar lógica adicional aquí si es necesario
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <FormWrapper
      formPages={formPages}
      onSubmit={onSubmit} // Asegúrate de pasar la función onSubmit al FormWrapper
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
              Gestion de Usuarios Internos
            </Link>
          ),
        },
        { title: "Register" },
      ]}
    />
  );
}
