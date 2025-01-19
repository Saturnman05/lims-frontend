import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import { Link } from "react-router";

export default function StatisticsMasterCompany() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-master-company/home-master-company">Home</Link> },
        { title: "Estadísticas" },
      ]}>
      <></>
    </PageWrapper>
  );
}