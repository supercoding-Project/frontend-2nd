import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTopButton from "../common/ScrollTopButton";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <ScrollTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
