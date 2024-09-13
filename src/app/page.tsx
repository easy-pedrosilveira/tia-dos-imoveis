"use client";

import Image from "next/image";
import Campestri from "@/assets/images/campestri.png";
import Circles from "@/assets/images/circles.svg";
import { motion } from "framer-motion";
import { itemBoxes } from "@/data";
import { ItemBox } from "@/components";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <HeroSection />
      <Circle />
      <InfoSection />
      <ChooseProperty />
    </main>
  );
}

export function HeroSection() {
  return (
    <div className="w-full h-[372px]">
      <div className="absolute top-0 right-0 w-52 h-[452px] flex items-end">
        <RageForHeroSection />
        <Image
          src={Campestri}
          alt="Campestri"
          className="absolute right-8 max-w-96"
        />
        <div>
          {itemBoxes.map((item) => (
            <ItemBox
              key={item?.id}
              position={item?.position}
              bgColor={item?.bgColor}
              textColor={item?.textColor}
              text={item?.text}
              image={item?.image}
              gap={item?.gap}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function RageForHeroSection() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 right-0 w-full h-full bg-gradient-custom -z-[1]"
    />
  );
}

export function Circle() {
  return (
    <div className="absolute -bottom-28 right-0 -z-[1]">
      <Image src={Circles} alt="Circulos" />
    </div>
  );
}

// 

export function InfoSection() {
  return (
    <div className="flex flex-col gap-3 ">
      <h1 className="min-w-[307px] text-xl uppercase font-bold leading-7 bg-gradient-custom bg-clip-text text-transparent">
        Financie seu apartamento com os melhores preços do mercado
      </h1>
      <p className="text-sm font-normal leading-6 text-gray">
        Encontre o lar dos seus sonhos com nossa seleção exclusiva de imóveis.
        Oferecemos condições de financiamento acessíveis.
      </p>
      <button className="max-w-52 h-11 rounded-lg bg-custom-blue-normal mt-2">
        <span className="text-base text-white font-semibold">
          Entrar em contato
        </span>
      </button>
    </div>
  );
}

export function ChooseProperty() {
  const properties = ["Campestri", "Gran Sky", "Tatuapé"];
  const [selectedProperty, setSelectedProperty] = useState<string>("Gran Sky");

  const handlePropertyClick = (property: string) => {
    setSelectedProperty(property);
  };

  return (
    <div className="flex flex-col gap-8 bg-white rounded-lg shadow-violet-50">
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
                  : "text-[#2E2E2E]"
              }`}
            >
              {property}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full min-h-60">
        <motion.div
          key={selectedProperty}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedProperty
            ? `Informação sobre ${selectedProperty}`
            : "Selecione uma propriedade"}
        </motion.div>
      </div>
    </div>
  );
}
