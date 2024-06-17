"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "../utils/constant";
import { usePathname } from "next/navigation";

// export const links = [
//   {
//     title: "How it works",
//     url: "/how-it-works",
//   },
//   {
//     title: "Events",
//     url: "/events",
//   },
//   {
//     title: "Achievement",
//     url: "/achievement",
//   },
//   {
//     title: "Articles",
//     url: "/articles",
//   },
//   {
//     title: "Rewards",
//     url: "/rewards",
//   },
// ];

function NavLink(linkData: { title: string; url: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={linkData.url}
      className={`text-gray-900 px-4 py-1.5 rounded-3xl hover:bg-gray-100 transition-all duration-300 font-medium ${
        pathname.startsWith(linkData.url) ? "bg-gray-100 border" : ""
      }`}
      // target="_blank"
    >
      {linkData.title}
    </Link>
  );
}

const hasLogin = ["/shop"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="backdrop-blur-lg sticky top-0 z-50 transition-all ease-linear duration-200">
      <div className="flex flex-col wrapper">
        <div className="flex items-center py-4">
          <div className="flex-1 flex items-center">
            <Link href="/">
              <Image
                src="/svg/color-logo.svg"
                alt="logo"
                width={36}
                height={36}
              />
            </Link>

            <div className="ml-6 hidden items-center gap-2 md:flex">
              {links.map((link) => (
                <NavLink key={link.title} {...link} />
              ))}
            </div>
          </div>
          <div className="flex-none flex items-center">
            {!hasLogin.includes(pathname) ? (
              <Link
                href="/login"
                className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900"
              >
                Start Now
              </Link>
            ) : (
              <div className="text-gray-900 px-4 py-1.5 rounded-3xl bg-gray-50 border transition-all duration-300 font-medium">
                Balance: 1000 $WARD
              </div>
            )}
            <button
              className="md:hidden block pl-4 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="pb-4">
            <div className="md:hidden gap-2 flex flex-col">
              {links.map((link) => (
                <NavLink key={link.title} {...link} />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
