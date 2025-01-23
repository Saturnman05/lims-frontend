import { API_URL } from "../../utils/constats";
import { message } from "antd";
import users from "./mock-users.json";

export async function logIn (user) {
  // Guardar el token
  const response = await fetch(`${API_URL}token/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const data = await response.json();
    const access = data.access;
    const refresh = data.refresh;
    localStorage.setItem("jwt", access);
    localStorage.setItem("refresh", refresh);
  } else {
    message.error("Error. Nombre de usuario o contraseña incorrecta");
    throw new Error("Error. Nombre de usuario o contraseña incorrecta.")
  }

  // Guardar el rol
  const token = localStorage.getItem("jwt");
  const rolResponse = await fetch(`${API_URL}users/role/`, {
    method: "get",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (rolResponse.ok) {
    const data = await rolResponse.json();
    console.log(data);
    const roles = data.map(rol => ({rolId: rol.role_id, rolName: rol.role_name, isMaster: rol.is_master}));
    if (data.length > 0) localStorage.setItem("userRol", JSON.stringify(roles));
  } else {
    message.error("Error. Al encontrar tu rol de usuario.");
    throw new Error("Error")
  }
}

export async function mockLogIn (user) {
  const token = users.find(userData => userData.username === user.username).id;
  localStorage.setItem("jwt", token);
}
