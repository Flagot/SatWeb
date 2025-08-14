import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem("collapsed") === "true"
  );

  const hide = () => {
    setCollapsed(true);
    localStorage.setItem("collapsed", "true"); // optional persistence
  };

  const show = () => {
    setCollapsed(false);
    localStorage.setItem("collapsed", "false");
  };

  return (
    <SidebarContext.Provider value={{ collapsed, hide, show }}>
      {children}
    </SidebarContext.Provider>
  );
};
