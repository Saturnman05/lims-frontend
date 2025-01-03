import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/index";
import LogIn from "./app/Login";
import NotFoundPage from "./app/NotFound";
import HomeLabManager from "./app/HomeLabManager";
import SampleManagement from "./app/SampleManagement";
import SampleAssignation from "./app/SampleAssignation";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<LogIn />}></Route>

          <Route path="/layout" element={<Layout />}>
            <Route path="homeLabManager" element={<HomeLabManager />}></Route>
            <Route
              path="sampleAssignation"
              element={<SampleAssignation />}></Route>
            <Route
              path="sampleManagement"
              element={<SampleManagement />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
