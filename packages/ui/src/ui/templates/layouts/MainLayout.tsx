import { tcm } from "../../../libs";
import { ShootingStars, StarsBackground } from "../../atoms";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="relative flex flex-col w-full overflow-hidden antialiased md:items-center md:justify-center">
        <div
          className={tcm(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />
        {children}
      </div>
      <ShootingStars />
      <StarsBackground />
    </>
  );
};
