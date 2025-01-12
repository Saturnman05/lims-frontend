import { Link } from "react-router";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";
import NombreInput from "../../../components/lab-manager/Inputs/nombre-input/Nombre.jsx";

export default function ManagementLabManager() {
  return (
    <PageWrapper
      breadCrumbItems={[
        { title: <Link to="/layout-lab-manager/home-lab-manager">Home</Link> },
        { title: "Administración" },
      ]}>
      <>
        <NombreInput name="name">Nombre Completo </NombreInput>
      </>
    </PageWrapper>
  );
}
