import { createBrowserRouter, RouterProvider } from "react-router";
import { Routes } from "./Routes";
import { NavLabManager } from "./components/nav-lab-manager/nav-lab-manager";

const router = createBrowserRouter(Routes);

function App() {
  return (
    <>
      <NavLabManager />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
