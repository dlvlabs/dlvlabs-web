import { tcm } from "../../../libs";
import { Footer, Header } from "../../organisms";

interface CommonLayoutProps
  extends React.PropsWithoutRef<React.PropsWithChildren> {
  className?: string;
  children: React.ReactNode;
}

export const CommonLayout = ({ children, className }: CommonLayoutProps) => {
  return (
    <>
      <div
        className={
          "min-w-screen min-h-screen flex flex-col items-center justify-center mx-auto"
        }>
        <Header />
        <div className={tcm("flex-1 flex flex-col w-full", className)}>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};
