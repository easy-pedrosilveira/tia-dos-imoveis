import { twMerge } from "tailwind-merge";

export function InnerContainer({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={twMerge(
        `w-[90%] h-auto flex flex-col lg:w-[80%] xl:w-[1026px] 2xl:w-[1300px]`,
        className
      )}
      // style={{ border: "1px solid red" }}
    >
      {children}
    </div>
  );
}
