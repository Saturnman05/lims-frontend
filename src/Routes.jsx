import LogIn from "./app/login/index.jsx";
import NotFoundPage from "./app/not-found/index.jsx";

// Lab manager
import HomeLabManager from "./app/lab-manager/home-lab-manager/index.jsx";
import SampleLabManager from "./app/lab-manager/samples/index.jsx";
import ResultsAuditLabManager from "./app/lab-manager/results-audit/index.jsx";
import LayoutLabManager from "./components/lab-manager/layout/index.jsx";
import InformsLabManager from "./app/lab-manager/informs";
import StatisticsLabManager from "./app/lab-manager/statistics";
import ManagementLabManager from "./app/lab-manager/management";
import SupportLabManager from "./app/lab-manager/support";
import UserManagementExternalLabManager from "./app/lab-manager/management/user-management/external-user-management/index.jsx";
import UserManagementInternalLabManager from "./app/lab-manager/management/user-management/internal-user-management/index.jsx";
import ExternalRegisterLabManager from "./app/lab-manager/management/user-management/external-user-management/register/index.jsx";
import InternalRegisterLabManager from "./app/lab-manager/management/user-management/internal-user-management/register/index.jsx";

// Master company
import HomeMasterCompany from "./app/master-company/home-master-company/index.jsx";
import InformsMasterCompany from "./app/master-company/informs-master-company";
import StatisticsMasterCompany from "./app/master-company/statistics-master-company";
import LayoutMasterCompany from "./components/master-company/layout-master-company/index.jsx"; 
import UserManagementMasterCompany from "./app/master-company/user-management-master-company/index.jsx";
import RegisterUserMasterCompany from "./app/master-company/user-management-master-company/register-user-master-company/index.jsx";
import SampleMasterCompany from "./app/master-company/samples/index.jsx";
import RequestSample from "./app/master-company/samples/request-sample/index.jsx";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  {
    path: "layout-lab-manager",
    element: <LayoutLabManager />,
    children: [
      { path: "home-lab-manager", element: <HomeLabManager /> },
      { path: "samples", element: <SampleLabManager /> },
      { path: "results-audit", element: <ResultsAuditLabManager /> },
      { path: "informs", element: <InformsLabManager /> },
      { path: "statistics", element: <StatisticsLabManager /> },
      { path: "management", element: <ManagementLabManager /> },
      { path: "management/user-management-external/register", element: <ExternalRegisterLabManager /> },
      { path: "management/user-management-external", element: <UserManagementExternalLabManager /> },
      { path: "management/user-management-internal", element: <UserManagementInternalLabManager /> },
      { path: "management/user-management-internal/register", element: <InternalRegisterLabManager /> },
      { path: "support", element: <SupportLabManager /> },
    ],
  },
  {
    path: "layout-master-company",
    element: <LayoutMasterCompany/>,
    children: [
      { path: "home-master-company", element: <HomeMasterCompany /> },
      { path: "samples", element: <SampleMasterCompany /> },
      { path: "samples/request", element: <RequestSample />},
      { path: "results-audit", element: <ResultsAuditLabManager /> },
      { path: "informs-master-company", element: <InformsMasterCompany /> },
      { path: "statistics-master-company", element: <StatisticsMasterCompany /> },
      { 
        path: "user-management-master-company", 
        children: [
          { path: "", element: <UserManagementMasterCompany /> },
          {
            path: "register-user-master-company",
            children: [
              { path: "", element: <RegisterUserMasterCompany /> },
            ]
          }
        ] 
      },
    ],
  },
];