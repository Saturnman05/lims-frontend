import { useNavigate } from "react-router";

export function useLogout () {
  const navigate = useNavigate();
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("jwt");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userRol");
    navigate("/");
  };
  return { logout }
}