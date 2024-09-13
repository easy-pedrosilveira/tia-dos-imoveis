import Money from "@/assets/icons/money.svg";
import PiggyBank from "@/assets/icons/piggy-bank.svg";
import BuildingOffice from "@/assets/icons/building-office.svg";
import { StaticImageData } from "next/image";

export interface ItemBoxProps {
  id?: number;
  position: string;
  bgColor: string;
  textColor: string;
  text: string;
  image: StaticImageData | string;
  gap: string;
}

export const itemBoxes = [
  {
    id: 1,
    position: "top-36 -left-12",
    bgColor: "bg-white",
    textColor: "text-custom-blue-normal",
    text: "Investimento seguro",
    image: Money,
    gap: "gap-2",
  },
  {
    id: 2,
    position: "bottom-32 -left-32",
    bgColor: "bg-custom-blue-normal",
    textColor: "text-white",
    text: "Corretora de confiança",
    image: BuildingOffice,
    gap: "gap-3",
  },
  {
    id: 3,
    position: "-bottom-1 -left-20",
    bgColor: "bg-white",
    textColor: "text-custom-blue-normal",
    text: "Compra inteligente",
    image: PiggyBank,
    gap: "gap-3",
  },
];
