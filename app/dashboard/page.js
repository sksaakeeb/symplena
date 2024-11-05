"use client";
import React, { useState, useEffect } from "react";

function DashboardHome() {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the toast after 2 second
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      Dashboard
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Logged in successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHome;
