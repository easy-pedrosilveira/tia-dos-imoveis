import { ItemBoxProps } from "@/data";
import Image from "next/image";

export function ItemBox({
  position,
  gap,
  bgColor,
  image,
  textColor,
  text,
}: ItemBoxProps) {
  return (
    <div
      className={`absolute ${position} w-44 h-11 rounded-lg flex items-center ${gap} px-2 ${bgColor} shadow-md`}
    >
      <Image src={image} alt={`${image}`} />
      <span className={`text-xs ${textColor} font-medium`}>{text}</span>
    </div>
  );
}
