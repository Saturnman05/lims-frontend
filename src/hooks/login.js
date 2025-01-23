import { useNavigate } from "react-router";
import { logIn } from "../api/login";

export function useLogin() {
  const imgStyle = {
    display: "block",
    width: 200,
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const centerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await logIn(values);
      const userRol = localStorage.getItem("userRol");
      if (userRol.rolName)
        navigate("/layout-lab-manager/home-lab-manager/");
      else
        navigate("/layout-master-company/home-master-company/");
    } catch (error) {
      console.error(error);
    }
  };

  return { navigate, onFinish, imgStyle, rowStyle, centerStyle };
}
