import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import Layout from "./components/layout/index";
const router = createBrowserRouter(Routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
