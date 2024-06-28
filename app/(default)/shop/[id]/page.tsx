"use client";

import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import React, { useState } from "react";
import { shopProducts } from "../../../../utils/constant";
import Image from "next/image";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/dialog";
import { rc } from "../../../../utils/css";

function ShopProductPage() {
  const pathname = usePathname();
  const product = shopProducts.find((product) => product.path === pathname);
  const [isSelected, setIsSelected] = useState(false);

  if (product) {
    return (
      <main>
        <section className="wrapper pt-10 pb-20">
          <div className="flex md:flex-row gap-4 flex-col-reverse">
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
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-fit rounded-2xl border bg-[#265F51] px-3 py-0.5 mt-2">
                      <span className="font-semibold tracking-tight text-yellow-50">
                        Buy with {product.price} $WARD
                      </span>
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Choose you Payment Method</DialogTitle>
                      <DialogDescription className="">
                        For now, you can pay with $WARD
                      </DialogDescription>
                      <button
                        className={rc(
                          "w-full rounded-2xl p-4 flex gap-2 items-center justify-between",
                          isSelected ? "bg-gray-50" : "bg-white"
                        )}
                        onClick={() => setIsSelected(true)}
                      >
                        <label
                          htmlFor="ward"
                          className="flex gap-2 items-center font-medium"
                        >
                          <Image
                            src="/svg/color-logo.svg"
                            alt="logo"
                            width={20}
                            height={20}
                          />
                          <span>
                            $WARD{" "}
                            <span className="text-sm text-gray-600">
                              (Balance: 1000 $WARD)
                            </span>
                          </span>
                        </label>
                        <input
                          type="radio"
                          name="payment"
                          id="ward"
                          className="h-4 w-4 checked:bg-[#265F51] checked:border-[#265F51] checked:border"
                          checked={isSelected}
                        />
                      </button>

                      <DialogFooter>
                        <button className="text-yellow-50 px-4 py-1.5 rounded-3xl hover:bg-[#265F51]/90 hover:ring-1 transition-all duration-300 font-medium bg-[#265F51] h-fit flex gap-2 items-center w-full justify-center mt-4">
                          Pay
                          <MoveRightIcon size={12} />
                        </button>
                      </DialogFooter>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <Image
              src={`/dummy/shop${product.id}.webp`}
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
