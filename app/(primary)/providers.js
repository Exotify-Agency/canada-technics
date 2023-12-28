"use client";

import { NavProvider } from "@/store/navContext";
import React from "react";

const Providers = ({ children }) => {
  return <NavProvider>{children}</NavProvider>;
};

export default Providers;
