import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Sidebar */}
      <div className="w-60 border-r border-black hidden md:block" />

      {/* Right Content Area (Topbar + Outlet) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="h-16 border-b border-black" />

        {/* Main Content (Outlet) */}
        <div className="flex-1 overflow-auto px-4 py-6">
          <Outlet />
        </div>
      </div>
    </div>

    // <>
    //   <Outlet />
    // </>
  );
};

export default DashboardLayout;
