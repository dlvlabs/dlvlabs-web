import { Header } from "../../organisms";

interface CommonLayoutProps {
  children: React.ReactNode;
}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center mx-auto">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center pt-28 md:px-16 lg:px-24 xl:px-32">
        {children}
      </div>
    </div>
  );
};
