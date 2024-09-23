import Image from "next/image";
import Marks from "@/assets/icons/marks.svg";
import Star from "@/assets/icons/star.svg";
import Avatar from "@/assets/icons/avatar.svg";
import Arrow from "@/assets/icons/arrow-variant-2.svg";

export function Feedbacks() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="max-w-[307px] text-xl uppercase font-bold leading-7 bg-gradient-custom bg-clip-text text-transparent">
          Titulo para sessão de feedbacks
        </h1>
        <p className="text-sm font-normal leading-5 text-gray mb-4">
          Encontre o lar dos seus sonhos com nossa seleção exclusiva de imóveis.
          Oferecemos condições de financiamento acessíveis.
        </p>
      </div>
      <div className="w-full h-auto flex items-start gap-5">
        <Image src={Marks} alt={`"`} width={28} height={28} />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <Image
              src={Star}
              alt="Estrela para avaliação"
              width={20}
              height={20}
            />
            <Image
              src={Star}
              alt="Estrela para avaliação"
              width={20}
              height={20}
            />
            <Image
              src={Star}
              alt="Estrela para avaliação"
              width={20}
              height={20}
            />
            <Image
              src={Star}
              alt="Estrela para avaliação"
              width={20}
              height={20}
            />
          </div>
          <div>
            <p className="text-sm font-normal leading-5 text-gray mb-6">
              Encontre o lar dos seus sonhos com nossa seleção exclusiva de
              imóveis. Oferecemos condições de financiamento acessíveis.
            </p>
            <div className="flex items-end justify-between">
              <div className="flex items-start gap-2">
                <Image
                  src={Avatar}
                  alt="Avatar"
                  className="size-9 rounded-full"
                />
                <h3 className="text-xs font-semibold text-custom-blue-dark">
                  Nome do usuario
                </h3>
              </div>
              <div className="flex gap-2">
                <button className="size-7 flex items-center justify-center rotate-180 bg-custom-blue-normal rounded-full">
                  <Image src={Arrow} alt="<" width={9} height={9} />
                </button>
                <button className="size-7 flex items-center justify-center bg-custom-blue-normal rounded-full">
                  <Image src={Arrow} alt=">" width={9} height={9} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
