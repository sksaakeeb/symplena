import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
            {/* Sidebar content here */}
            <li className="text-xl">
              <a>Home</a>
            </li>
            <li className="text-xl">
              <a>History</a>
            </li>
            <li className="text-xl">
              <a>Upgrade Plan</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
