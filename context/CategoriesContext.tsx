"use client";
import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductcategoriesApi } from "@/api-endpoints/products";
import { useVendor } from "./VendorContext";

interface CategoriesContextType {
  categories: any; // Categories data
  isAuthenticated: boolean; // Authentication status
  isLoading: boolean; // Loading state
  error: any; // Error state
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

const categoryOrder = [
  "Laptops",
  "Desktops",
  "Graphics Card",
  "Processor",
  "Motherboard",
  "RAM",
  "SSD",
  "HDD",
  "Power Supply",
  "Cabinet",
  "Cooling Fan",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Keyboard Combo",
  "Web Camera",
  "Speaker",
  "Soundbar",
  "Wireless Headphone",
  "Printer",
  "Projector"
];

export function CategoriesProvider({ children }: any) {
  const { vendorId } = useVendor();
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCategoriesData", vendorId],
    queryFn: () => getProductcategoriesApi(`?vendor_id=${vendorId}`),
    enabled: !!vendorId,
    select: (response: any) => {
      if (response?.data) {
        const sortedData = [...response.data].sort((a: any, b: any) => {
          const indexA = categoryOrder.indexOf(a.name);
          const indexB = categoryOrder.indexOf(b.name);

          // If both are in the order list, sort by index
          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          // If only A is in the list, A comes first
          if (indexA !== -1) return -1;
          // If only B is in the list, B comes first
          if (indexB !== -1) return 1;
          // If neither, keep original/alphabetical order
          return a.name.localeCompare(b.name);
        });
        return { ...response, data: sortedData };
      }
      return response;
    }
  });


  return (
    <CategoriesContext.Provider
      value={{
        categories: data || [],
        isAuthenticated: !!data,
        isLoading,
        error,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }
  return context;
}
