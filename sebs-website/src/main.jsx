import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./CSS/index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Error-page.jsx";
import Root from "./Routes/Root.jsx";
import Index from "./Routes/Index.jsx";
import About from "./Routes/About.jsx";
import Booking from "./Routes/Booking.jsx";
import Gallery from "./Routes/Gallery.jsx";
import { BookingProvider } from "./Context/BookingContext.jsx";
import ServiceStep from "./Components/Booking/Steps/ServiceStep.jsx";
import DateStep from "./Components/Booking/Steps/DateStep.jsx";
import DetailsStep from "./Components/Booking/Steps/DetailsStep.jsx";
import BookingSuccess from "./Components/Booking/BookingSuccess.jsx";
import BookingLanding from "./Components/Booking/BookingLanding.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="*" element={<ErrorPage />} />
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="booking" element={<Booking />} >
          <Route index element={<BookingLanding />} />
          <Route path="service" element={<ServiceStep />} />
          <Route path="date" element={<DateStep />} />
          <Route path="details" element={<DetailsStep />} />
          <Route path="success" element={<BookingSuccess />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  </React.StrictMode>
);
