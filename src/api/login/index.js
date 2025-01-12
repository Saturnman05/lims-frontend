import { API_URL } from "../../utils/constats"

export async function logIn (user) {
  const response = await fetch(`${API_URL}token/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  const token = data.access;
  localStorage.setItem("jwt", token);
}
