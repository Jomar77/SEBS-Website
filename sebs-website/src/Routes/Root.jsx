
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";


export default function Index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
