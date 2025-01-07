import { Outlet } from "react-router";
import { NavLabManager } from "../nav-lab-manager";
import "../../../styles/LabManager/layout/index.css";

export default function Layout() {
  return (
    <div id="layout">
      {/* Static Background*/}
      <div id="background"></div>

      {/* Navigation */}
      <NavLabManager />

      {/* Main Container */}
      <div id="content">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
}
