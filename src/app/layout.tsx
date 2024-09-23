import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, InnerContainer, Footer } from "@/components";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Tia dos Imóveis",
    template: "%s - Tia dos Imóveis",
  },
  description:
    "A Tia dos Imóveis oferece imóveis residenciais e comerciais em Santo André e no Tatuapé, São Paulo. Conheça as melhores opções para morar ou investir em regiões em constante valorização.",
  keywords:
    "imóveis em Santo André, imóveis no Tatuapé, apartamentos à venda, casas no Tatuapé, imóveis residenciais, imóveis comerciais, investimentos imobiliários, morar em Santo André, viver no Tatuapé, mercado imobiliário São Paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div className="flex flex-col items-center py-6 lg:py-10 mb-10">
          <InnerContainer>{children}</InnerContainer>
        </div>
        <Footer />
      </body>
    </html>
  );
}
