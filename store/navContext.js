"use client";

import { createContext, useState } from "react";

export const NavContext = createContext({
  isActive: false,
  setIsActive: (value) => {},
});

export const NavProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const setIsActiveHandler = (value) => setIsActive(value);

  return (
    <NavContext.Provider
      value={{
        isActive,
        setIsActive: setIsActiveHandler,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
