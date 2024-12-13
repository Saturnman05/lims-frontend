import { Form, Button, Input, Row, Col } from "antd"

const imgStyle = {
  display: 'block',
  width: 200,
}

const rowStyle = {
  display: "flex", 
  justifyContent: "center", 
  minHeight: "100vh"
}

export default function LogIn () {
  const [form] = Form.useForm()

  return (
    <Row 
      align="middle"
      style={rowStyle}  
    >
      <Col span={10}>
        <img
          alt="logo"
          src="https://cdn-icons-png.flaticon.com/512/257/257815.png"
          style={imgStyle}
        />
        <p>Integridad y seguridad alimentaria, garantizadas</p>
      </Col>
      <Col span={8}>
        <h1>L.I.M.S.</h1>
        <Form
          layout="vertical"
          form={form}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Usuario">
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item label="Contraseña">
            <Input placeholder="input placeholder" />
          </Form.Item>

          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
