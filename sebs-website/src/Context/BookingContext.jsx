import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    service: null,
    date: null,
    form: {},
  });

  const updateBooking = (data) => {
    setBooking((prev) => ({ ...prev, ...data }));
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking }}>
      {children}
    </BookingContext.Provider>
  );
}