import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProgressBar from "../Components/Booking/ProgressBar";

export default function Booking() {
  const location = useLocation();
  const showProgressBar =
    location.pathname !== "/booking" && location.pathname !== "/booking/manage";

  return (
    <div className="w-full">
      {showProgressBar && <ProgressBar />}
      <Outlet />
    </div>
  );
}1
