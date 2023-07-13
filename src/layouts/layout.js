import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-200 py-10 px-5 min-h-[800px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
