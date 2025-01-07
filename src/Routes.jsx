import LogIn from "./app/LabManager/login";
import NotFoundPage from "./app/LabManager/not-found";
import HomeLabManager from "./app/LabManager/HomeLabManager";
import Sample from "./app/LabManager/samples";
import ResultsAudit from "./app/LabManager/resultsAudit";
import Layout from "./components/LabManager/layout";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  {
    path: "layout",
    element: <Layout />,
    children: [
      { path: "homeLabManager", element: <HomeLabManager /> },
      { path: "samples", element: <Sample /> },
      { path: "resultsAudit", element: <ResultsAudit /> },
    ],
  },
];
