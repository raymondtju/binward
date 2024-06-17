import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { localEvents, shopProducts } from "../../../utils/constant";
import {
  CalendarHeartIcon,
  HandHeartIcon,
  LandmarkIcon,
  MoveUpRightIcon,
  ShoppingBagIcon,
  ShoppingBasketIcon,
  TicketCheckIcon,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ward Events",
  description: "Join Our Events to Learn More About Sustainability",
};

function EventPage() {
  const { title, description, date, imageUrl, color } = localEvents[0];

  return (
    <main>
      <section className="wrapper pt-10">
        <div
          className={`flex flex-col relative h-[500px] w-full rounded-3xl text-yellow-50`}
          style={{
            backgroundColor: color,
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={3000}
            height={200}
            quality={50}
            className={`w-full mx-auto h-full bg-cover bg-[top_20rem] object-cover rounded-3xl bg-no-repeat duration-500 opacity-15`}
          />

          {/* <div className="absolute w-full h-full bg-gradient-to-b from-white to-transparent"></div> */}

          <div className="absolute w-full h-full p-8">
            <div className="flex items-center gap-4 w-fit px-4 py-1.5 rounded-3xl hover:ring-1 transition-all duration-300 font-medium bg-yellow-50 text-black h-fit text-base mb-6">
              <CalendarHeartIcon size={20} />
              <span>{date}</span>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium text-3xl">{title}</h3>
                <p className="text-lg mt-2">{description}</p>
              </div>

              <button className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 h-fit flex gap-2 items-center">
                Attend
                <MoveUpRightIcon size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper pt-2 pb-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
          {localEvents.map((event, index) => {
            if (index > 0) {
              return (
                <Link
                  href={"#"}
                  className={`flex flex-col relative h-[500px] w-full rounded-3xl text-yellow-50`}
                  style={{
                    backgroundColor: event.color,
                  }}
                  key={index}
                >
                  <Image
                    src={event.imageUrl}
                    alt={title}
                    width={3000}
                    height={200}
                    quality={50}
                    className={`w-full mx-auto h-full bg-cover bg-[top_20rem] object-cover rounded-3xl bg-no-repeat duration-500 opacity-15`}
                  />

                  {/* <div className="absolute w-full h-full bg-gradient-to-b from-white to-transparent"></div> */}

                  <div className="absolute w-full h-full p-8">
                    <div>
                      <div className="flex items-center gap-4 w-fit px-4 py-1.5 rounded-3xl hover:ring-1 transition-all duration-300 font-medium bg-yellow-50 text-black h-fit text-base mb-6">
                        <CalendarHeartIcon size={20} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-3xl">
                            {event.title}
                          </h3>
                          <p className="text-lg mt-2">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <button className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 h-fit justify-between w-full flex items-center">
                      Attend
                      <MoveUpRightIcon size={12} />
                    </button>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </section>

      <section className="wrapper pt-20 pb-20">
        <div className="relative rounded-3xl p-8 bg-[#265092] text-yellow-50 pb-20 overflow-hidden">
          <h2 className="text-4xl font-medium tracking-tight">
            Connect and Contribute
          </h2>
          <p className="mt-2">Discover Eco-Friendly Events in Your Area</p>
          <button className="text-[#265092] px-4 py-1.5 rounded-3xl hover:bg-yellow-100 hover:ring-1 transition-all duration-300 font-medium bg-yellow-50 h-fit flex gap-2 items-center mt-4">
            <LandmarkIcon size={16} />
            Host your own Event
          </button>
          <div className="absolute md:-bottom-12 -bottom-32 right-10">
            {/* <LandmarkIcon size={200} /> */}
            <TicketCheckIcon size={200} />
          </div>
          {/* <div className="absolute md:-bottom-8 -bottom-28 right-72">
            <TicketCheckIcon size={200} />
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default EventPage;
