import { API_URL } from "../../utils/constats"
import { message } from "antd";

export async function postExternalUser(user) {
  const token = localStorage.getItem("jwt");

  if(!user.rnc || !user.comercialName || !user.companyName){
    message.error("falta informacion realtiva a la compania");
    return;
  }
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

export async function postInternalUser(user) {
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

export async function getLabUserRoles() {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}roles/`, {
    method: "get",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    const roles = data.map(rol => ({"value": rol.role_id, "label": rol.role_name}));
    console.log("roles:", roles);
    return roles;
  }

  const error = await response.json();
  message.error("Error al cargar los roles de usuarios");
  return error;
}

export async function getAllUsers() {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}users/`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  }

  const error = await response.json();
  console.error("error en la coneccion", error);
  message.error("Error al cargar los usuarios");
  return error;
}