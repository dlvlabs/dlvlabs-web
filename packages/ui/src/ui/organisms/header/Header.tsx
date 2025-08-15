"use client";
import { useEffect, useState } from "react";
import { NavigationLink } from "../../atoms/navigation-link";
import { NAVIGATION_MENUS } from "./navigation.const";

export interface HeaderProps {
  activePath?: string;
}

export const Header = ({ activePath = "/" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 z-[100] transition-all duration-300 left-0 right-0 mx-auto ${
        isScrolled ? "px-0" : "md:px-16 lg:px-24 xl:px-32"
      }`}>
      <div className="flex items-center justify-center w-full mx-auto">
        <div
          className={`w-full py-6 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "rounded-none backdrop-blur-xl bg-white/30 shadow-md border-b border-white/10"
              : "max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] md:max-w-[calc(100%-4rem)] rounded-full backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg my-4 mx-4 sm:mx-6 md:mx-8 px-6 sm:px-8"
          }`}>
          <div
            className={`flex items-center gap-2 ${isScrolled ? "ml-4 sm:ml-6 md:ml-8" : ""}`}>
            <a
              className="text-xl sm:text-2xl font-semibold text-slate-700 "
              href="/">
              DLV Labs
            </a>
          </div>

          <nav
            className={`hidden md:flex gap-8 ${isScrolled ? "mr-4 sm:mr-6 md:mr-8" : ""}`}>
            {NAVIGATION_MENUS.map((menu) => (
              <NavigationLink
                key={menu.href}
                href={menu.href}
                active={activePath === menu.href}>
                {menu.label}
              </NavigationLink>
            ))}
          </nav>

          {/* 햄버거 메뉴 버튼 - 중간 크기 미만에서만 표시 */}
          <button
            className={`md:hidden text-slate-700 focus:outline-none ${isScrolled ? "mr-4 sm:mr-6 md:mr-8" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 sm:mx-6 md:mx-8 p-4 rounded-xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {NAVIGATION_MENUS.map((menu) => (
              <NavigationLink
                key={menu.href}
                href={menu.href}
                active={activePath === menu.href}>
                {menu.label}
              </NavigationLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
