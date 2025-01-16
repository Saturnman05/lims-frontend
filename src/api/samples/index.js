import { API_URL } from "../../utils/constats";

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
  const categorys = data.map(category => ({value: category.category_name, label: category.category_name}));
  return categorys;
}

export async function getSubCategorysOptions() {
  return [
    { value: "uno", label: "uno" },
    { value: "dos", label: "dos" },
    { value: "tres", label: "tres" },
  ]
}

export async function getAllergensOptions() {
  const token = localStorage.getItem("jwt");
  const response = await fetch(`${API_URL}allergens/`, {
    method: "get",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    },
  });
  const data = await response.json();
  const allergens = data.map(allergen => ({value: allergen.allergen_name, label: allergen.allergen_name}));
  return allergens;
}