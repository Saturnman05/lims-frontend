import { Link } from "react-router";
import { PageWrapper } from "../../../../../components/wrappers/page-wrapper/index.jsx";
import NombreInput from "../../../../../components/lab-manager/Inputs/nombre-input/Nombre.jsx";

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
        <NombreInput name="name">Nombre Completo </NombreInput>
      </>
    </PageWrapper>
  );
}
