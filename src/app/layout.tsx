import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header, InnerContainer } from "@/components";

export const metadata: Metadata = {
  title: "Tia dos Imoveis",
  description: "Tia dos Imoveis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex flex-col items-center py-6 lg:py-10 mb-20">
          <InnerContainer>{children}</InnerContainer>
        </div>
      </body>
    </html>
  );
}
