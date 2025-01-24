import { Link } from "react-router";
import { PageWrapper } from "../../../components/wrappers/page-wrapper/index";
import InternalUserManagementTable from "../../../components/wrappers/table-wrapper/user-internal-table";

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
    <>
      <InternalUserManagementTable />
    </>
  </PageWrapper>
);
}