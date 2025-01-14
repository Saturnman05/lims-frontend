// import "../../styles/HomeLabManager/HomeLabManager.css";
import { PageWrapper } from "../../../components/wrappers/page-wrapper";

export default function HomeLabManager() {
  return (
    <PageWrapper breadCrumbItems={[{ title: "Home" }]}>
      <div className="w-full h-full flex justify-center items-center">
        <h1 className="text-4xl">Home Lab Manager</h1>
      </div>
    </PageWrapper>
  );
}
