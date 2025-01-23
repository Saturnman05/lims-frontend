import { Link } from "react-router";
import { PageWrapper } from "../../../../../components/wrappers/page-wrapper/index.jsx";
import TableUserslabManager from "../../../../../components/wrappers/table-wrapper/user-table.jsx";

export default function UserManagementInternalLabManager() {
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
          title: "Gestion de Usuarios Internos",
        },
      ]}>
      <>
        <div className="flex justify-start">
          <TableUserslabManager />
        </div>
      </>
    </PageWrapper>
  );
}
