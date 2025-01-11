import { Form, Input, ConfigProvider } from "antd";
import PropTypes from "prop-types";

export default function NombreInput(props) {
  const { children, name } = props;

  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            // Aquí van los tokens que quieras personalizar
            hoverBorderColor: "#0CB2AA",
            activeBorderColor: "#0CB2AA",
          },
        },
      }}>
      {/* 
        1. Creamos un formulario
        2. El "Form.Item" envuelve el Input y es donde declaramos las reglas 
      */}
      <Form>
        <Form.Item
          name={name}
          rules={[
            {
              required: true,
              message: `Escribe tu ${name}!`,
            },
          ]}>
          <Input placeholder={children} allowClear variant="filled" />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}

NombreInput.propTypes = {
  children: PropTypes.node.isRequired,
};
