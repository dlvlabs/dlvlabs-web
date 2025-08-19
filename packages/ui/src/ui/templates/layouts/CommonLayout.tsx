"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { tcm } from "../../../libs";
import { Footer, Header } from "../../organisms";

interface CommonLayoutProps
  extends React.PropsWithoutRef<React.PropsWithChildren> {
  className?: string;
  children: React.ReactNode;
}

export const CommonLayout = ({ children, className }: CommonLayoutProps) => {
  const pathname = usePathname();
  const [fullPath, setFullPath] = useState(pathname);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFullPath(window.location.pathname);
    }
  }, [pathname]);

  console.log("pathname:", pathname, "fullPath:", fullPath);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Header activePath={fullPath} />
        <div className={tcm("relative flex-1 flex flex-col w-full", className)}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};
