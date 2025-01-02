import LogIn from "./pages/login";
import NotFoundPage from "./pages/not-found";
import HomeLabManager from "./app/HomeLabManager";
import SampleManagement from "./app/SampleManagement";
import SampleAssignation from "./app/SampleAssignation";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
  { path: "homeLabManager", element: <HomeLabManager /> },
  { path: "sampleAssignation", element: <SampleAssignation /> },
  { path: "sampleManagement", element: <SampleManagement /> },
  //  {
  //    path: "app",
  //    element: <AppRouterPage />,
  //    children: [
  //      { path: "dashboard", element: <DashboardPage /> },
  //      { path: "admin/people", element: <PeoplePage />},
  //      { path: "admin/vehicles", element: <VehiclesPage />},
  //      { path: "admin/users", element: <UsersPage /> },
  //      { path: "admin/employees", element: <EmployeesPage /> },
  //      { path: "request-fuel", element: <RequestFuelView /> },
  //      { path: "assign/request", element: <DeliveryByRequestView /> },
  //      { path: "assign/static", element: <DeliveryMonthlyView /> },
  //      { path: "register-tickets", element: <TicketRegistration /> },
  //    ],
  //  },
];
