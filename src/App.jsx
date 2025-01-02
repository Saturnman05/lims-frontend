import { Route, Routes } from "react-router-dom";
import { NavLabManager } from "./components/nav-lab-manager/nav-lab-manager";
import LogIn from "./app/Login";
import NotFoundPage from "./app/NotFound";
import HomeLabManager from "./app/HomeLabManager";
import SampleManagement from "./app/SampleManagement";
import SampleAssignation from "./app/SampleAssignation";

function App() {
  return (
    <>
      <NavLabManager />
      <div className="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="homeLabManager" element={<HomeLabManager />}></Route>
          <Route
            path="sampleAssignation"
            element={<SampleAssignation />}></Route>
          <Route path="sampleManagement" element={<SampleManagement />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
