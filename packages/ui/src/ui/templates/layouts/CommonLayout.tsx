"use client";
import { tcm } from "../../../libs";
import { Footer, Header } from "../../organisms";

interface CommonLayoutProps
  extends React.PropsWithoutRef<React.PropsWithChildren> {
  className?: string;
  children: React.ReactNode;
  activePath?: string;
}

export const CommonLayout = ({
  children,
  className,
  activePath,
}: CommonLayoutProps) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col dark:bg-black/[0.96]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Header activePath={activePath} />
        <div className={tcm("relative flex-1 flex flex-col w-full", className)}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
