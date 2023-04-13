import React, { Children } from "react";
import Search from "./Search";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Search</h1>
      <Search />
      {children}
    </div>
  );
};

export default Layout;
