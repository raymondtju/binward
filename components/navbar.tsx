import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  {
    title: "How it works",
    url: "/how-it-works",
  },
  {
    title: "Events",
    url: "/events",
  },
  {
    title: "Achievement",
    url: "/achievement",
  },
  {
    title: "Articles",
    url: "/articles",
  },
  {
    title: "Rewards",
    url: "/rewards",
  },
];

function NavLink(linkData: { title: string; url: string }) {
  return (
    <Link
      href={linkData.url}
      className="text-gray-900 shadow-sm px-4 py-1.5 rounded-3xl hover:bg-gray-100 transition-all hover:shadow-none duration-300 font-medium"
      // target="_blank"
    >
      {linkData.title}
    </Link>
  );
}

function Navbar() {
  return (
    <nav className="backdrop-blur-lg sticky top-0 z-50">
      <div className="wrapper flex items-center py-4">
        <div className="flex-1 flex items-center">
          <Image src="/svg/color-logo.svg" alt="logo" width={36} height={36} />

          <div className="ml-6 hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </div>
        </div>
        <div className="flex-none">
          <button className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900">
            Start Now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
