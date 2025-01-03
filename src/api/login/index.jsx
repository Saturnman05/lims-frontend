import { API_URL } from "../../utils/constats"

export async function LogIn (user) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "post",
      body: JSON.stringify(user)
    })
    const token = response.data.data.jwt
    localStorage.setItem("jwt", token)  
  } catch (error) {
    console.error("Error al iniciar sesión", error)
  }
}