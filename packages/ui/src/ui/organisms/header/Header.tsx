import Image from "next/image";
import Link from "next/link";
import { LOGOS } from "../../../assets/images";
import { NavigationLink } from "../../atoms/navigation-link";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center mx-auto bg-white shadow-md">
      <div className="w-full px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={LOGOS.light}
              alt="dlv-labs"
              className="h-14 w-auto"
              width={100}
              height={100}
              priority
            />
          </Link>
        </div>
        <nav className="flex gap-8">
          <NavigationLink href={"/ibc-mon"}>IBC MON</NavigationLink>
          <NavigationLink href={"#"}>Vote Extension</NavigationLink>
          <NavigationLink href={"#"}>Blogs</NavigationLink>
        </nav>
      </div>
    </header>
  );
};
