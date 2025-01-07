import HomeLabManager from "./app/labManager/homeLabManager";
import SampleLabManager from "./app/labManager/samples";
import ResultsAuditLabManager from "./app/labManager/resultsAudit";
import LayoutLabManager from "./components/LabManager/layout";
import InformsLabManager from "./app/labManager/informs";
import StatisticsLabManager from "./app/labManager/statistics";
import ManagementLabManager from "./app/labManager/management";
import SupportLabManager from "./app/labManager/support";
import LogIn from "./app/login/index.jsx";
import NotFoundPage from "./app/not-found/index.jsx";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  {
    path: "layoutLabManager",
    element: <LayoutLabManager />,
    children: [
      { path: "homeLabManager", element: <HomeLabManager /> },
      { path: "samples", element: <SampleLabManager /> },
      { path: "resultsAudit", element: <ResultsAuditLabManager /> },
      { path: "informs", element: <InformsLabManager /> },
      { path: "statistics", element: <StatisticsLabManager /> },
      { path: "management", element: <ManagementLabManager /> },
      { path: "support", element: <SupportLabManager /> },
    ],
  },
];
