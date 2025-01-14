import { Form, theme } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { LoginFormPage, ProFormText } from "@ant-design/pro-components";
import { useLogin } from "../../hooks/login";
import video from "../../assets/video3.mp4";
import "../../styles/global.css";
export default function LogIn() {
  const [form] = Form.useForm();
  const { onFinish } = useLogin();
  const { token } = theme.useToken();

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}>
      <LoginFormPage
        submitter={{
          searchConfig: {
            submitText: "Iniciar sesión",
          },
          submitButtonProps: {
            style: {
              background: "#16D9CE",
              width: "100%",
            },
          },
        }}
        backgroundImageUrl="https://mdn.alipayobjects.com/huamei_gcee1x/afts/img/A*y0ZTS6WLwvgAAAAAAAAAAAAADml6AQ/fmt.webp"
        logo="https://cdn-icons-png.flaticon.com/512/257/257815.png"
        backgroundVideoUrl={video}
        title="LIMS"
        containerStyle={{
          backgroundColor: "rgba(230, 230, 230, 0.65)",
          backdropFilter: "blur(4px)",
          marginRight: "7rem",
          width: "400px", // Add fixed width
          maxWidth: "90%", // Ensure responsiveness
          flex: "0 0 auto", // Prevent flex growing
        }}
        subTitle="Integridad y seguridad alimentaria, garantizadas"
        actions={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}></div>
        }
        onFinish={onFinish}
        form={form}>
        <ProFormText
          name="username"
          fieldProps={{
            size: "large",
            prefix: (
              <UserOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"user"}
          rules={[
            {
              required: true,
              message: "Escribe tu usuario!",
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: "large",
            prefix: (
              <LockOutlined
                style={{
                  color: token.colorText,
                }}
                className={"prefixIcon"}
              />
            ),
          }}
          placeholder={"ant.design"}
          rules={[
            {
              required: true,
              message: "Escribe tu contraseña",
            },
          ]}
        />
      </LoginFormPage>
    </div>
  );
}
