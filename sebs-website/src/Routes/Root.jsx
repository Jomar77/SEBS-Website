import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer.jsx";


export default function Index() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
