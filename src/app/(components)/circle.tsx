import Image from "next/image";
import Circles from "@/assets/images/circles.svg";

export function Circle() {
    return (
      <div className="absolute -bottom-28 right-0 -z-[1]">
        <Image src={Circles} alt="Circulos" />
      </div>
    );
  }