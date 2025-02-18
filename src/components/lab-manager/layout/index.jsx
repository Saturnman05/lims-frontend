import { Outlet } from "react-router";
import { NavLabManager } from "../nav-lab-manager";
import "../../../styles/lab-manager/layout/index.css";

export default function LayoutLabManager() {
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
