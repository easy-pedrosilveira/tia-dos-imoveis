import Image from "next/image";
import Arrow from "@/assets/icons/arrow.svg";

export function InfoSection() {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="max-w-[307px] text-xl uppercase font-bold leading-7 bg-gradient-custom bg-clip-text text-transparent">
        Financie seu apartamento com os melhores preços do mercado
      </h1>
      <p className="text-sm font-normal leading-5 text-gray mb-1">
        Encontre o lar dos seus sonhos com nossa seleção exclusiva de imóveis.
        Oferecemos condições de financiamento acessíveis.
      </p>
      <button className="min-w-44 max-w-52 h-11 rounded-lg px-4 flex items-center gap-4 bg-white mt-2 shadow-lg">
        <span className="text-base text-custom-blue-normal font-medium">
          Entrar em contato
        </span>
        <Image src={Arrow} alt=">" />
      </button>
    </div>
  );
}
