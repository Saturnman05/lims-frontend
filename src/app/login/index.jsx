import { Form, Button, Input, Row, Col } from "antd";
import { logIn } from "../../api/login/index";
import { useNavigate } from "react-router";

const imgStyle = {
  display: 'block',
  width: 200,
};

const rowStyle = {
  display: "flex", 
  justifyContent: "center", 
  minHeight: "100vh"
};

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export default function LogIn () {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(values);
    try {
      await logIn(values);
      navigate("/layout/homeLabManager");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      align="middle"
      style={rowStyle}
    >
      <Col span={8} style={{ ...centerStyle, marginRight: "200px" }}>
        <img
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/257/257815.png"
          style={imgStyle}
        />
        <p style={{ fontFamily: "DM Serif Text" }}>Integridad y seguridad alimentaria, garantizadas</p>
      </Col>
      <Col span={8}>
        <h1 style={{ ...centerStyle, fontFamily: "DM Serif Text" }}>L.I.M.S.</h1>
        <Form
          layout="vertical"
          form={form}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item 
            label="Usuario"
            name="username"
            className="inter-font"
            rules={[
              {
                required: true,
                message: "Escribe un nombre de usuario",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item 
            label="Contraseña" 
            name="password" 
            className="inter-font"
            rules={[
              {
                required: true,
                message: "Escribe la contraseña para iniciar sesión",
              },
            ]}
          >
            <Input type="password"/>
          </Form.Item>
          <Form.Item style={centerStyle}>
            <Button
              type="primary"
              htmlType="submit" 
              shape="round" 
              style={{ background: "#16D9CE", borderColor: "white" }}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
