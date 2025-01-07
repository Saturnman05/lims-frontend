import LogIn from "./app/login/index.jsx";
import NotFoundPage from "./app/not-found/index.jsx";
import HomeLabManager from "./app/HomeLabManager/index.jsx";
import SampleAssignation from "./app/SampleAssignation/index.jsx";
import SampleManagement from "./app/SampleManagement/index.jsx";
import Layout from "./components/layout";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  {
    path: "layout",
    element: <Layout />,
    children: [
      { path: "homeLabManager", element: <HomeLabManager /> },
      { path: "sampleAssignation", element: <SampleAssignation /> },
      { path: "sampleManagement", element: <SampleManagement /> },
    ],
  },
];
