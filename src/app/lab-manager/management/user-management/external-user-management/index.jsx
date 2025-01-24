import { Link } from "react-router";
import { PageWrapper } from "../../../../../components/wrappers/page-wrapper/index.jsx";
import ExternalUserManagementTable from "../../../../../components/wrappers/table-wrapper/user-external-table.jsx";
export default function UserManagementExternalLabManager() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        {
          title: (
            <Link to="/layout-lab-manager/management">Administración</Link>
          ),
        },
        {
          title: "Gestion de Usuarios Externos",
        },
      ]}>
      <>
        <ExternalUserManagementTable />
      </>
    </PageWrapper>
  );
}
