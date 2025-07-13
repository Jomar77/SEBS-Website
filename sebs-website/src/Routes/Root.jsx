import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer.jsx";


export default function Index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-base-100">
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
