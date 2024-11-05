import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div>
      DashboardHeader
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
