import LogIn from "./app/login/index.jsx";
import NotFoundPage from "./app/not-found/index.jsx";

export const Routes = [
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <LogIn /> },
];
