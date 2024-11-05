"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailsContext } from "./context/UserDetailsContext";

function Provider({ children }) {
  const [userDetails, setUserDetails] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    user && VerifyUser();
  }, [user]);

  const VerifyUser = async () => {
    const dataResult = await axios.post("/api/verify-user", { user: user });
    setUserDetails(dataResult.data.result);
  };

  return (
    <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
      <div>{children}</div>
    </UserDetailsContext.Provider>
  );
}

export default Provider;
