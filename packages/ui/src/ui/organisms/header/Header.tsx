import { NavigationLink } from "../../atoms/navigation-link";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <a
            href="#"
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Panoptes
          </a>
        </div>
        <nav className="flex gap-4">
          <NavigationLink href={"#"}>IBC MON</NavigationLink>
          <NavigationLink href={"#"}>Vote Extension</NavigationLink>
          <NavigationLink href={"#"}>Blogs</NavigationLink>
        </nav>
      </div>
    </header>
  );
};
