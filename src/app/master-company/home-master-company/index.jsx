// import "../../styles/HomeMasterCompany/HomeMasterCompany.css";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";

export default function HomeMasterCompany() {
  return (
    <PageWrapper breadCrumbItems={[{ title: "Home" }]}>
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl">Home Master Company</h1>
      </div>
    </PageWrapper>
  );
}
