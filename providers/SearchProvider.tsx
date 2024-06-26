"use client";

import React, { createContext, useContext, useState } from "react";

interface SearchProviderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchProviderProps | "">("");

const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

interface ProviderProps {
  children: React.ReactNode;
}

export const SearchProvider = ({ children }: ProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>(" ");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default useSearch;
