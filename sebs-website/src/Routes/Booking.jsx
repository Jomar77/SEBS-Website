import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProgressBar from "../Components/Booking/ProgressBar";
import EventPackageSection from "../Components/Common/EventPackageSection/EventPackageSection";

export default function Booking() {
  const location = useLocation();
  const showProgressBar =
    location.pathname !== "/booking" &&
    location.pathname !== "/booking/manage" &&
    !location.pathname.includes('/success');
  const isMainBookingPage = location.pathname === "/booking";

  return (
    <div className="w-full min-h-screen">
      {/* Only show progress bar on booking steps, not landing or success pages */}
      {showProgressBar && <ProgressBar />}
      
      <Outlet />
      {isMainBookingPage && <EventPackageSection />}
    </div>
  );
}
