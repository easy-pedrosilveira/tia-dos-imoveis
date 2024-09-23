"use client";

import { useState } from "react";
import { PropertyChosen } from "./ui";

export function ChooseProperty() {
  const properties = ["Gran Sky", "Tatuapé", "Campestri"];
  const [selectedProperty, setSelectedProperty] = useState<string>("Gran Sky");

  const handlePropertyClick = (property: string) => {
    setSelectedProperty(property);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full max-w-[502px] h-12 flex items-center justify-between bg-[#ABABAB15] rounded-t-lg shadow-[0px_10px_10px_#00000015]">
        {properties.map((property) => (
          <div
            key={property}
            className={`w-full h-full flex items-center justify-center px-1 cursor-pointer ${
              selectedProperty === property ? "bg-white" : ""
            }`}
            onClick={() => handlePropertyClick(property)}
          >
            <span
              className={`text-sm font-medium ${
                selectedProperty === property
                  ? "bg-gradient-custom bg-clip-text text-transparent"
                  : "text-[#2E2E2E80]"
              }`}
            >
              {property}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full min-h-60">
        <div key={selectedProperty}>
          {selectedProperty && <PropertyChosen />}
        </div>
      </div>
    </div>
  );
}
