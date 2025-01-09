// import { API_URL } from "../../utils/constats"
import users from "./mock-users.json";

export async function logIn(user) {
  /*try {
    const response = await fetch(`${API_URL}/login`, {
      method: "post",
      body: JSON.stringify(user)
    })
    const token = response.data.data.jwt
    localStorage.setItem("jwt", token)  
  } catch (error) {
    console.error("Error al iniciar sesión", error)
  }*/

  const token = users.find(
    (userData) => userData.username === user.username
  ).id;
  localStorage.setItem("jwt", token);
}
