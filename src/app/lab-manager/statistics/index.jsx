import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import { Link } from "react-router";

export default function StatisticsLabManager() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        { title: <Link>Estadísticas</Link> },
      ]}
    >
      <></>
    </PageWrapper>
  );
}
