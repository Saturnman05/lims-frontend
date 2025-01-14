import { API_URL } from "../../utils/constats"
import { message } from "antd";

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
    const token = data.access;
    localStorage.setItem("jwt", token);
  } else {
    message.error("Error. Usuario o contraseña incorrecta");
    throw new Error("Error. Nombre de usuario o contraseña incorrecta.")
  }
}
