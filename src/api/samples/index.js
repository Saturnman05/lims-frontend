import { API_URL } from "../../utils/constats";
import { message } from "antd";

export async function getCategorysOptions() {
  const token = localStorage.getItem("jwt");
  try {
    const response = await fetch(`${API_URL}categorys/`, {
      method: "get",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const categorys = data.map(category => ({value: category.category_id, label: category.category_name}));
    return categorys;
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    message.error("Error al cargar las opciones de categorías.");
  }
}

export async function getSubcategorysOptions() {
  const token = localStorage.getItem("jwt");
  try {
    const response = await fetch(`${API_URL}subcategorys/`, {
      method: "get",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const subcategorys = data.map(subcategory => ({value: subcategory.subcategory_id, label: subcategory.subcategory_name}));
    return subcategorys;
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    message.error("Error al cargar las opciones de subcategorías.");
    return;
  }
}

export async function postSample(sample) {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}samples/create/`, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(sample),
  });

  if (response.ok) {
    message.success("Se envió la solicitud correctamente");
    const data = await response.json();
    return data;
  }

  const error = await response.json();
  message.error("Error al solicitar la muestra.");

  return error;
}