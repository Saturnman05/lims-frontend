// import "../../styles/SampleManagement/SampleManagement.css";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import { Link } from "react-router";

export default function SampleMasterCompany() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-master-company/home-master-company">Home</Link> },
        { title: "Muestras" },
      ]}>
      <></>
    </PageWrapper>
  );
}
