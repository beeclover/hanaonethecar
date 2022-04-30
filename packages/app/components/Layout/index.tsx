import React from "react";
import HeaderGlobal from "~/components/Header/Global";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>
    <HeaderGlobal />
    <main className="pt-[60px]">
      {children}
    </main>
    <footer />
  </>;
};

export default Layout;
