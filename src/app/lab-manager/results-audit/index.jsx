// import "../../styles/SampleManagement/SampleManagement.css";
import { Breadcrumb } from "antd";
import ConfigProvider from "antd/es/config-provider";

export default function ResultsAuditLabManager() {
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
            title: "Resultados y Auditoría",
          },
        ]}
      />
    </ConfigProvider>
  );
}
