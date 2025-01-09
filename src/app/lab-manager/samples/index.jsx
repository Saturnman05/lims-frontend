// import "../../styles/SampleManagement/SampleManagement.css";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import { Link } from "react-router";

export default function SampleLabManager() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        { title: "Muestras" },
      ]}>
      <></>
    </PageWrapper>
  );
}
