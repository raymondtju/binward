"use client";

import Link from "next/link";
import React from "react";
import { links } from "../utils/constant";
import { Icons } from "./icons";

function Footer() {
  return (
    <footer className="wrapper mb-8">
      <div className="rounded-3xl px-8 py-16 flex md:justify-between md:flex-row flex-col bg-gray-50">
        <div className="flex sm:flex-row flex-row-reverse gap-16">
          <div className="max-w-60">
            <p>
              Ward is a smart bin that rewards you for recycling. Earn rewards
              by responsibly managing your waste.
            </p>
          </div>
          <div>
            <h3 className="text-xl">Navigate</h3>
            <div className="flex flex-col gap-2 mt-4">
              {links.map((link) => (
                <Link href={link.url} className="text-gray-800">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="md:mt-0 mt-8 text-center md:text-left">
          <h3 className="text-xl">Subscribe for latest update</h3>
          <div className="flex flex-col gap-2 mt-4 w-fit md:mx-0 mx-auto">
            <div className="rounded-3xl p-1 border">
              <input
                type="email"
                placeholder="Email"
                className="p-2 bg-transparent h-8 focus:outline-none"
              />
              <button className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900">
                Submit
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-2 mt-2 md:justify-start justify-center">
            <Link
              href="https://github.com/raymondtju/binward"
              target="_blank"
              className="text-gray-800 p-2 hover:bg-gray-100 rounded-xl transition-all duration-300 opacity-80 hover:opacity-100"
            >
              <Icons.github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
