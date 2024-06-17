"use client";

import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import React from "react";
import { shopProducts } from "../../../../utils/constant";
import Image from "next/image";
import { MoveLeftIcon } from "lucide-react";

function ShopProductPage() {
  const pathname = usePathname();
  const product = shopProducts.find((product) => product.path === pathname);

  if (product) {
    return (
      <main>
        <section className="wrapper pt-10 pb-20">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-full">
              <Link
                href="/shop"
                className="text-gray-700 px-4 py-1.5 rounded-3xl bg-gray-50 border transition-all duration-300 font-medium"
              >
                <MoveLeftIcon size={16} className="inline-block -mt-1 mr-2" />
                back to shop
              </Link>

              <div className="grid content-end h-full flex-1">
                <div className="mt-4 relative">
                  <h4 className="font-medium text-3xl">{product.name}</h4>
                  <span className="text-lg">{product.category}</span>
                </div>
                <button className="w-fit rounded-2xl border bg-[#265F51] px-3 py-0.5 mt-2">
                  <span className="font-semibold tracking-tight text-yellow-50">
                    Buy with {product.price} $WARD
                  </span>
                </button>
              </div>
            </div>
            <Image
              src="/dummy/store-bag.webp"
              alt="logo"
              width={1000}
              height={1000}
              className="rounded-2xl max-w-md"
            />
          </div>
        </section>
      </main>
    );
  } else {
    return notFound();
  }
}

export default ShopProductPage;
