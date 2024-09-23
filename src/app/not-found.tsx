import { InnerContainer } from "@/components";
import Image from "next/image";
import NotFoundImage from "@/assets/images/not-found.svg";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Não Encontrada",
};

export default function NotFound() {
  return (
    <InnerContainer className="sm:h-[70vh] items-center sm:justify-center gap-3 text-center py-4">
      <Image src={NotFoundImage} alt="Imagem 404 Página não encontrada!" width={125} height={50} className="mb-2 w-[125px] lg:w-[200px] h-[50px] lg:h-[100px] "/>
      <h1 className="text-base md:text-4xl font-bold leading-4 md:leading-[52px] text-gray-383B41">
        Oops!
        <br /> Página não encontrada{" "}
      </h1>
      <div className="w-full sm:w-[400px] lg:w-[800px]">
        <p className="text-sm lg:text-xl font-normal leading-6 lg:leading-8 text-gray-4E4E4E">
          Parece que ocorreu um problema ao carregar esta página. Por favor,
          tente atualizar a página dentro de alguns instantes.
          <br />
          Se o problema persistir, verifique sua conexão com a internet e tente
          novamente.
        </p>
      </div>
      <Link href={"/"}>
        <button className="w-full max-w-60 px-3 md:w-72 h-10 md:h-11 bg-gray-383B41 rounded-lg">
          <span className="text-sm font-semibold leading-5 text-white-FEFEFE">
            Voltar para página principal
          </span>
        </button>
      </Link>
    </InnerContainer>
  );
}
