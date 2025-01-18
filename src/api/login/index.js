import { API_URL } from "../../utils/constats";
import { message } from "antd";
import users from "./mock-users.json";

export async function logIn (user) {
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
}

export async function mockLogIn (user) {
  const token = users.find(userData => userData.username === user.username).id;
  localStorage.setItem("jwt", token);
}
