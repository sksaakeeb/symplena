import React from "react";

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="flex flex-row">
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
