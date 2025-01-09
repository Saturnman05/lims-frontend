import { Link } from "react-router";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import { Input } from "antd";

export default function ManagemenLabManager() {
  return (
    <PageWrapper 
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        { title: <Link>Administración</Link> },
      ]}
    >
      <Input/>
    </PageWrapper>
  );
}
