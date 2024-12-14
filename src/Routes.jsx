import LogIn from "./pages/login/index.jsx"
import NotFoundPage from "./pages/not-found/index.jsx"

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
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
]