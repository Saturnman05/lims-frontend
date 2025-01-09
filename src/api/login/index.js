import { API_URL } from "../../utils/constats"
import users from "./mock-users.json";
import { useLogin } from "../../hooks/login";

export async function logIn (user) {
  const response = await fetch(`${API_URL}/Auth/login`, {
    method: "post",
    body: JSON.stringify(user),
  });
  const token = response.data.data.jwt;
  localStorage.setItem("jwt", token);
}

export async function mockLogIn (user) {
  const token = users.find(userData => userData.username === user.username).id;
  localStorage.setItem("jwt", token);
}
