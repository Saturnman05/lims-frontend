import { Link } from "react-router";
import { PageWrapper } from "../../../components/wrappers/page-wrapper/index";

export default function UserManagementMasterCompany() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-master-company/home-master-company">Home</Link> },
        {
          title: (
            <Link to="/layout-master-company/user-management-master-company">Administración</Link>
          ),
        },
        {
          title: "Gestion de Usuarios Internos",
        },
      ]}>
      <></>
    </PageWrapper>
  );
}