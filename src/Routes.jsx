import HomeLabManager from "./app/lab-manager/home-lab-manager/index.jsx";
import SampleLabManager from "./app/lab-manager/samples";
import ResultsAuditLabManager from "./app/lab-manager/results-audit/index.jsx";
import LayoutLabManager from "./components/lab-manager/layout/index.jsx";
import InformsLabManager from "./app/lab-manager/informs";
import StatisticsLabManager from "./app/lab-manager/statistics";
import ManagementLabManager from "./app/lab-manager/management";
import SupportLabManager from "./app/lab-manager/support";
import LogIn from "./app/login/index.jsx";
import NotFoundPage from "./app/not-found/index.jsx";
import UserManagementExternalLabManager from "./app/lab-manager/management/user-management/external-user-management/index.jsx";
import UserManagementInternalLabManager from "./app/lab-manager/management/user-management/internal-user-management/index.jsx";
import ExternalRegisterLabManager from "./app/lab-manager/management/user-management/external-user-management/register/index.jsx";
import InternalRegisterLabManager from "./app/lab-manager/management/user-management/internal-user-management/register/index.jsx";
import RequestSample from "./app/lab-manager/samples/request-sample/index.jsx";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  {
    path: "layout-lab-manager",
    element: <LayoutLabManager />,
    children: [
      { path: "home-lab-manager", element: <HomeLabManager /> },
      { path: "samples", element: <SampleLabManager /> },
      { path: "samples/request", element: <RequestSample />},
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
];
