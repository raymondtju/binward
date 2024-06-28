import {
  FlameIcon,
  LibraryIcon,
  LightbulbIcon,
  MapIcon,
  Trash2Icon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export const metadata: Metadata = {
  title: "Contribute with Ward",
  description: "Contribute with your waste to help the environment",
};

function ContributePage() {
  return (
    <main>
      <section className="py-32 pb-40">
        <div className="wrapper pb-20">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="md:text-5xl text-4xl font-semibold tracking-tight">
              Contribute Your Waste and Earn Rewards!
            </h1>
            <p className="md:text-2xl text-xl mt-2 text-gray-700 font-medium">
              Recycle your waste, earn $WARD, and{" "}
              <span className="underline underline-offset-2">contribute</span>{" "}
              to a greener future.
            </p>
            <button className="mt-6 text-yellow-50 px-4 py-1.5 rounded-3xl hover:bg-[#265F51]/90 hover:ring-1 transition-all duration-300 font-medium bg-[#265F51] w-fit lg:mx-0 mx-auto">
              Register your Waste
            </button>
          </div>
        </div>
        <Marquee gradientColor="white" gradient={true} speed={20}>
          {Array.from({ length: 7 }).map((_, i) => (
            <Image
              key={i}
              src={`/dummy/kyw${i + 1}.webp`}
              alt={`kyw${i + 1}`}
              width={400}
              height={240}
              className="px-1 md:w-[400px] md:h-[240px] w-56 h-32 rounded-3xl flex-none object-cover saturate-150"
            />
          ))}
        </Marquee>
      </section>

      <section
        className="bg-gradient-to-bl from-[#265F51] to-[#265F51] py-20"
        id="how-it-works"
      >
        <div className="wrapper">
          <FlameIcon
            className="rounded-full p-3.5 bg-yellow-50 mb-2"
            size={60}
          />
          <h2 className="text-4xl font-medium tracking-tight text-yellow-50">
            Our Community's{" "}
            <span className="underline underline-offset-2">Impact</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="relative rounded-3xl bg-yellow-50 p-4 py-5">
              <div className="mx-auto text-[#265F51]">
                <p className="text-center text-3xl font-medium mb-1">
                  10,000 KGs
                </p>
                <h3 className="font-medium text-lg text-center">
                  Total Waste Recycled
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4 py-5">
              <div className="mx-auto text-[#265F51]">
                <p className="text-center text-3xl font-medium mb-1">
                  50,000 $WARD
                </p>
                <h3 className="font-medium text-lg text-center">
                  Wards Earned
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4 py-5">
              <div className="mx-auto text-[#265F51]">
                <p className="text-center text-3xl font-medium mb-1">25</p>
                <h3 className="font-medium text-lg text-center">Events Held</h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4 py-5">
              <div className="mx-auto text-[#265F51]">
                <p className="text-center text-3xl font-medium mb-1">
                  20,000 KGs
                </p>
                <h3 className="font-medium text-lg text-center">
                  CO2 Emissions Reduced
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper pt-20 mb-20">
        <LibraryIcon
          className="rounded-full p-3.5 bg-[#265F51] stroke-white mb-2"
          size={60}
        />
        <h2 className="text-4xl font-medium tracking-tight">
          {/* Local <span className="text-[#265F51]">Event</span> from{" "}
          <span className="text-[#265F51]">Medan, Indonesia</span> */}
          Know Your Waste, What Can Be Recycled?
        </h2>
        <div className="mt-12">
          <p className="text-lg">
            Understanding what types of waste can be recycled is the first step
            toward making a positive impact. Here are some common recyclable
            materials:
          </p>
          <ul className="list-disc mt-2 pl-5">
            <li className="">Plastics: Bottles, containers, and packaging.</li>
            <li className="">Paper: Newspapers, magazines, and cardboard.</li>
            <li className="">
              Metals: Aluminum cans, tin cans, and scrap metal.
            </li>
            <li className="">Glass: Bottles and jars.</li>
            <li className="">
              Electronics: Old phones, computers, and batteries.
            </li>
          </ul>
          <p className="text-lg mt-8">External Resources:</p>
          <ul className="list-disc mt-2 pl-5">
            <li>
              <Link
                href="#"
                className="text-[#265F51] font-medium hover:underline duration-150"
              >
                EPA Recycling Guide
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#265F51] font-medium hover:underline duration-150"
              >
                Recycling International
              </Link>
            </li>
          </ul>
          {/* {localEvents.map((event, i) => {
            return <Card key={`p_${i}`} {...event} i={i} />;
          })} */}
        </div>
      </section>
    </main>
  );
}

export default ContributePage;
