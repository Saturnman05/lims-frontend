// import "../../styles/HomeLabManager/HomeLabManager.css";
import { Breadcrumb } from "antd";
import ConfigProvider from "antd/es/config-provider";

export default function HomeLabManager() {
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
        ]}
      />
    </ConfigProvider>
  );
}
