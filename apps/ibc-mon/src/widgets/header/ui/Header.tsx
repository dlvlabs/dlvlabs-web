import { LinkButton } from "./LinkButton";

export const Header = () => {
  return (
    <div className="w-full">
      <nav className="bg-white shadow-lg">
        <div className="md:flex items-center justify-between py-4 px-8 md:px-12">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 md:text-3xl">
              <a href="#">Panoptes</a>
            </div>
          </div>
          <div className="flex gap-x-8">
            <LinkButton href={"#"}>IBC MON</LinkButton>
            <LinkButton href={"#"}>Vote Extension</LinkButton>
            <LinkButton href={"#"}>Blogs</LinkButton>
          </div>
        </div>
      </nav>
    </div>
  );
};
