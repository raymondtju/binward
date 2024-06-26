import Image from "next/image";
import Link from "next/link";
import React from "react";
import { shopProducts } from "../../../utils/constant";
import {
  HandHeartIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ward Shop",
  description: "Spend Your Wards on Sustainable Products",
};

function ShopPage() {
  return (
    <main>
      <section className="wrapper pt-10">
        <div className="relative rounded-3xl p-8 bg-[#265F51] text-yellow-50 pb-20 overflow-hidden">
          <h2 className="text-4xl font-medium tracking-tight">
            Eco-Friendly Finds
          </h2>
          <p className="mt-2">Spend Your Wards on Sustainable Products</p>
          <Link
            href="/contribute"
            className="text-[#265F51] px-4 py-1.5 rounded-3xl hover:bg-yellow-100 hover:ring-1 transition-all duration-300 font-medium bg-yellow-50 h-fit w-fit flex gap-2 items-center mt-4"
          >
            <HandHeartIcon size={16} />
            Contribute with you waste
          </Link>
          {/* <button className="text-[#265F51] px-4 py-1.5 rounded-3xl hover:bg-yellow-100 hover:ring-1 transition-all duration-300 font-medium bg-yellow-50 h-fit flex gap-2 items-center mt-4">
            <HandHeartIcon size={16} />
            Contribute with you waste
          </button> */}
          <div className="absolute md:-bottom-12 -bottom-4 md:right-10 right-28">
            <ShoppingBagIcon
              size={200}
              className="md:w-[200px] md:h-[200px] w-20 h-20"
            />
          </div>
          <div className="absolute md:-bottom-8 -bottom-4 md:right-72 right-4">
            <ShoppingBasketIcon
              size={200}
              className="md:w-[200px] md:h-[200px] w-20 h-20"
            />
          </div>
        </div>
      </section>
      <section className="wrapper pt-10 pb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {shopProducts.map((product, index) => (
            <Link
              href={product.path}
              className="relative rounded-2xl p-3 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-300"
              key={index}
            >
              <Image
                src={`/dummy/shop${index + 1}.webp`}
                alt="logo"
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
              <div className="mt-4 relative">
                <h4 className="font-medium">{product.name}</h4>
                <span className="text-sm">{product.category}</span>
              </div>
              <div className="absolute bottom-2 right-2 rounded-xl border bg-[#265F51] px-3 py-0.5">
                <span className="text-sm font-semibold tracking-tight text-yellow-50">
                  {product.price} $WARD
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ShopPage;
