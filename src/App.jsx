import { createBrowserRouter, RouterProvider } from "react-router"
import { Routes as routes } from "./Routes"

const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
