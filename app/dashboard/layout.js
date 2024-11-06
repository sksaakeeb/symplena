import React from "react";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";
import Footer from "./_components/Footer";

function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="flex flex-row">
        <Sidebar />
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default DashboardLayout;
