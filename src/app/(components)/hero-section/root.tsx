import Campestri from "@/assets/images/campestri.png";
import { itemBoxes } from "@/data";
import { ItemBox } from "@/components";
import Image from "next/image";
import { RageForHeroSection } from "./range-for-hero-section";

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
          {itemBoxes?.length > 0 ? (
            itemBoxes.map((item) => (
              <ItemBox
                key={item.id}
                position={item.position}
                bgColor={item.bgColor}
                textColor={item.textColor}
                text={item.text}
                image={item.image}
                gap={item.gap}
              />
            ))
          ) : (
            <p>Nenhum item disponível</p>
          )}
        </div>
      </div>
    </div>
  );
}