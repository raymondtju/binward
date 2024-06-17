"use client";

import Image from "next/image";
import React from "react";
import { Icons } from "../../../components/icons";
import Link from "next/link";

function LoginPage() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col items-center w-full max-w-sm rounded-3xl px-10 py-8 bg-gray-50">
        <Link href="/">
          <Image src="/svg/color-logo.svg" alt="logo" width={48} height={48} />
        </Link>
        <h3 className="text-2xl font-medium mt-4">Welcome to Ward</h3>
        <button className="mt-6 text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 w-full flex items-center justify-center">
          <Icons.google className="w-4 h-4 inline-block mr-2" />
          Continue with Google
        </button>
      </div>
    </main>
  );
}

export default LoginPage;
