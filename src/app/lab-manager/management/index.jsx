import { Breadcrumb } from "antd";
import ConfigProvider, { ConfigConsumer } from "antd/es/config-provider";
export default function ManagemenLabManager() {
  return (
    <ConfigProvider
      theme={{
        components: { Breadcrumb: { separatorColor: "rgba(22, 217, 206)" } },
      }}>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Administracion</a>,
          },
          {
            title: <a href="">Gestion de usuarios</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
    </ConfigProvider>
  );
}
