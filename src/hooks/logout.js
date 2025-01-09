import { useNavigate } from "react-router";

export function useLogout () {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };
  return { logout }
}