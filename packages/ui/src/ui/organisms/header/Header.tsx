import { NavigationLink } from "../../atoms/navigation-link";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center mx-auto bg-white shadow-md">
      <div className=" w-full px-8 py-3 flex items-center justify-between">
        <div>
          <a
            href="#"
            className="text-xl font-bold text-gray-800 hover:text-gray-600">
            Panoptes
          </a>
        </div>
        <nav className="flex gap-8">
          <NavigationLink href={"#"}>IBC MON</NavigationLink>
          <NavigationLink href={"#"}>Vote Extension</NavigationLink>
          <NavigationLink href={"#"}>Blogs</NavigationLink>
        </nav>
      </div>
    </header>
  );
};
