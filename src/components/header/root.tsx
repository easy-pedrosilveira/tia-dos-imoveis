"use client"

import Image from "next/image";
import MenuIcon from "@/assets/icons/menu-icon.svg";
import { InnerContainer } from "@/components";
import { useScroll } from "@/utils";

export function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`sticky top-0 w-full flex justify-center py-2 mt-5 transition-all duration-500 ease-in-out z-10 rounded-b-xl ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent shadow-none"
      }`}
    >
      <InnerContainer>
        <Image src={MenuIcon} alt="Ícone do Menu" />
      </InnerContainer>
    </header>
  );
}
