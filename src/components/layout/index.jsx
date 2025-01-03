import { Outlet } from "react-router";
import { NavLabManager } from "../nav-lab-manager";
import "../../styles/layout/index.css";

export default function Layout() {
  return (
    <div id="layout">
      {/* Static Background*/}
      <div id="background"></div>

      <NavLabManager />

      {/* Main Container */}
      <div id="content">
        <Outlet /> {/* Where the other pages will render */}
      </div>
    </div>
  );
}
