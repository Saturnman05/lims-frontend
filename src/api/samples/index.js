import { API_URL } from "../../utils/constats";
import { message } from "antd";

export async function getCategorysOptions() {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}categorys/`, {
    method: "get",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const categorys = data.map(category => ({value: category.category_id, label: category.category_value}));
  return categorys;
}

export async function getSubCategorysOptions() {
  const token = localStorage.getItem("jwt");
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
}

