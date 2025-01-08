import { Breadcrumb } from "antd";
import ConfigProvider from "antd/es/config-provider";

export default function StatisticsLabManager() {
  return (
    <ConfigProvider
      theme={{
        components: { Breadcrumb: { separatorColor: "rgba(22, 217, 206)" } },
      }}>
      <Breadcrumb
        items={[
          {
            title: <a href="/layout-lab-manager/home-lab-manager">Home</a>,
          },
          {
            title: "Estadísticas",
          },
        ]}
      />
    </ConfigProvider>
  );
}
