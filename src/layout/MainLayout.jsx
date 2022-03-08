import React from "react";
import TopBar from "../components/topbar/Topbar";

import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="main">
      <TopBar></TopBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
