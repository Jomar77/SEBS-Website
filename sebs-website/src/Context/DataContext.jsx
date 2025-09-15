
import React, { createContext, useContext } from "react";
import { useServices } from "../Hooks/useServices";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { services, loading, error } = useServices();
  return (
    <DataContext.Provider value={{ services, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}
