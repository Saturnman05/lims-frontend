import { useNavigate } from "react-router";
import { mockLogIn } from "../api/login";

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
    console.log("en el onfinish:", values);
    try {
      await mockLogIn(values);
      navigate("/layout-lab-manager/home-lab-manager");
    } catch (error) {
      console.error(error);
    }
  };

  return { navigate, onFinish, imgStyle, rowStyle, centerStyle };
}
