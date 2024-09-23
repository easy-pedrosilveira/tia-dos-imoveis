import { InnerContainer } from "../inner-container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-[300px] flex items-center bg-gray/15">
      <InnerContainer>
        <div className="flex flex-col items-center text-center">
          @{currentYear} Tia dos Imoveís®. todos direitos reservados
        </div>
      </InnerContainer>
    </footer>
  );
}
