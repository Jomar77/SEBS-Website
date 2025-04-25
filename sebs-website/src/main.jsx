import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

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
import Contact from "./Routes/Contact.jsx";
import Booking from "./Routes/Booking.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="*" element={<ErrorPage />} />
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="booking" element={<Booking />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
