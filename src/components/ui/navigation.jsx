import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "./badge";
import { Button } from "./button";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { label: "Shop", href: "#" },
    { label: "Explore", href: "#" },
  ];

  const rightNavItems = [
    { label: "About", href: "#" },
    { label: "Rewards", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative w-full bg-[#fbf9f6]">
      <header className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 lg:h-[127px] bg-transparent">
        <nav className="flex items-center justify-between h-full">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-10 h-10 p-0"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </Button>

          {/* Desktop Left Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Button
              variant="outline"
              className="h-8 lg:h-[41px] px-3 lg:px-[21px] rounded-[50px] border-[#313131] bg-transparent hover:bg-[#313131] hover:text-white transition-colors text-xs lg:text-[13px]"
            >
              <span className="font-normal tracking-[1.95px] leading-[14.3px]">
                WHICH MANUKA IS FOR ME?
              </span>
            </Button>

            <div className="flex">
              {leftNavItems.map((item) => (
                <div
                  key={item.label}
                  className="w-16 lg:w-[90px] h-12 lg:h-[91px] flex items-center justify-center"
                >
                  <button className="font-normal text-[#313131] text-sm lg:text-lg tracking-[0] leading-[23.4px] hover:text-[#f1b434] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2">
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center md:flex-none">
            <img
              className="w-24 h-12 sm:w-32 sm:h-16 lg:w-[215px] lg:h-[103px]"
              alt="New Zealand Honey Co. Logo"
              src="https://c.animaapp.com/meydk0yzXWQdn8/img/link-1.svg"
            />
          </div>

          {/* Desktop Right Navigation & Icons */}
          <div className="hidden md:flex items-center gap-0">
            <div className="flex">
              {rightNavItems.map((item) => (
                <div
                  key={item.label}
                  className={`${
                    item.label === "About"
                      ? "w-16 lg:w-[97px]"
                      : item.label === "Rewards"
                      ? "w-20 lg:w-[118px]"
                      : "w-20 lg:w-[116px]"
                  } h-12 lg:h-[91px] flex items-center justify-center`}
                >
                  <button className="font-normal text-[#313131] text-sm lg:text-lg tracking-[0] leading-[23.4px] hover:text-[#f1b434] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2">
                    {item.label}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 ml-4">
              <button
                className="w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
                aria-label="User Account"
              >
                <img
                  className="w-8 h-8 lg:w-11 lg:h-11"
                  alt=""
                  src="https://c.animaapp.com/meydk0yzXWQdn8/img/link.svg"
                />
              </button>

              <button
                className="w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
                aria-label="Search"
              >
                <img
                  className="w-8 h-8 lg:w-11 lg:h-11"
                  alt=""
                  src="https://c.animaapp.com/meydk0yzXWQdn8/img/details-modal---details---slot---button-dialog---search.svg"
                />
              </button>

              <button
                className="relative w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
                aria-label="Shopping Cart (0 items)"
              >
                <img
                  className="w-5 h-5 lg:w-6 lg:h-6"
                  alt=""
                  src="https://c.animaapp.com/meydk0yzXWQdn8/img/svg.svg"
                />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 lg:w-[22px] lg:h-[22px] bg-[#f1b434] text-[#313131] text-xs font-normal rounded-[11.25px] flex items-center justify-center p-0 hover:bg-[#f1b434]">
                  0
                </Badge>
              </button>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
              aria-label="Search"
            >
              <img
                className="w-6 h-6"
                alt=""
                src="https://c.animaapp.com/meydk0yzXWQdn8/img/details-modal---details---slot---button-dialog---search.svg"
              />
            </button>

            <button
              className="relative w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
              aria-label="Shopping Cart (0 items)"
            >
              <img
                className="w-5 h-5"
                alt=""
                src="https://c.animaapp.com/meydk0yzXWQdn8/img/svg.svg"
              />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 bg-[#f1b434] text-[#313131] text-xs font-normal rounded-full flex items-center justify-center p-0 hover:bg-[#f1b434]">
                0
              </Badge>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#fbf9f6] border-t border-gray-200 shadow-lg z-50">
            <div className="px-4 py-6 space-y-4">
              <Button
                variant="outline"
                className="w-full h-10 rounded-[50px] border-[#313131] bg-transparent hover:bg-[#313131] hover:text-white transition-colors text-xs"
              >
                <span className="font-normal tracking-[1.95px] leading-[14.3px]">
                  WHICH MANUKA IS FOR ME?
                </span>
              </Button>

              <div className="space-y-3">
                {[...leftNavItems, ...rightNavItems].map((item) => (
                  <button
                    key={item.label}
                    className="block w-full text-left py-3 px-4 font-normal text-[#313131] text-lg hover:text-[#f1b434] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button
                  className="flex items-center gap-3 w-full py-3 px-4 font-normal text-[#313131] text-lg hover:text-[#f1b434] hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f1b434] focus:ring-offset-2"
                  aria-label="User Account"
                >
                  <img
                    className="w-6 h-6"
                    alt=""
                    src="https://c.animaapp.com/meydk0yzXWQdn8/img/link.svg"
                  />
                  Account
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
