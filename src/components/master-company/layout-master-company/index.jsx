import { Outlet } from "react-router";
import NavMasterCompany from "../nav-master-company/index";
import "../../../styles/master-company/layout-master-company/index.css";

export default function LayoutMasterCompany() {
  return (
    <div id="layout">
      {/* Static Background*/}
      <div id="background"></div>

      {/* Navigation */}
      <NavMasterCompany />

      {/* Main Container */}
      <div id="content">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
}
