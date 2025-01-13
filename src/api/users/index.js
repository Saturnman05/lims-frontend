import { API_URL } from "../../utils/constats"
import { message } from "antd";

export async function postExternalUser(user) {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}users/register/`, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    message.success("Se creó el usuario correctamente");
    return;
  }

  const error = await response.json();
  error?.email ? message.error("El correo es inválido") : "";
  error?.username ? message.error("El nombre de usuario es inválido") : "";
  error?.cedula ? message.error("Introduzca un número de cédula válido") : "";
  error?.full_name ? message.error("Introduzca su nombre y apellido") : "";
  error?.password ? message.error("Introduza una contraseña válida") : "";

  return error;
}
