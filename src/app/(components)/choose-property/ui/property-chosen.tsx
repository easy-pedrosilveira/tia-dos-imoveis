import Image from "next/image";
import Cozinha from "@/assets/images/cozinha-campestri.svg";
import Whatsapp from "@/assets/icons/whatsapp.svg";

export function PropertyChosen() {
  return (
    <div className="w-full h-auto flex flex-col gap-2">
      <div className="relative w-auto max-w-[502px] h-auto">
        <Image
          src={Cozinha}
          alt="Cozinha"
          className="w-full rounded-tr-lg"
          width={351}
          height={180}

        />
        <div className="absolute -bottom-3 -right-2 w-auto min-h-5 bg-custom-blue-normal rounded-md px-4 py-2">
          <p className="text-sm text-white">Cozinha</p>
        </div>
      </div>
      <div className="">
        <h1>Vision Campestre</h1>
        <p>Aptos a 5 min. de Grand Plaza Shopping e da estação CPTM Utinga!</p>
        <div className="bg-red-400">dd</div>
        <div>
          <button className="min-w-44 h-10 rounded-lg px-4 flex items-center gap-4 bg-custom-blue-normal mt-2">
            <span className="text-sm text-white font-medium">
              Entrar em contato
            </span>
            <Image src={Whatsapp} alt="Whatsapp" width={12} height={12} className="size-6"/>
          </button>
        </div>
      </div>
    </div>
  );
}
