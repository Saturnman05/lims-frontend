import { Form, Button, Input, Row, Col } from "antd";

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

  const handleSubmit = () => {
    console.log(form);
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
        >
          <Form.Item label="Usuario" className="inter-font">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Contraseña" className="inter-font">
            <Input type="password" />
          </Form.Item>
          <Form.Item style={centerStyle}>
            <Button 
              type="primary" 
              shape="round" 
              style={{ background: "#16D9CE", borderColor: "white" }}
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
