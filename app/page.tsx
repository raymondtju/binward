"use client";

import Image from "next/image";
import {
  type Variants,
  motion,
  delay,
  AnimationProps,
  useMotionValue,
  animate,
} from "framer-motion";
import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  CalendarHeartIcon,
  GemIcon,
  GiftIcon,
  MapIcon,
  RecycleIcon,
  Trash2Icon,
} from "lucide-react";

const variants: Variants = {
  open: {
    transition: { staggerChildren: 0.4, delayChildren: 0.5 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants: AnimationProps["variants"] | any = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      type: "spring",
      duration: 1,
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
    rotate: 0,
  },
};

const Card = ({
  title,
  description,
  i,
  imageUrl,
  color,
  date,
}: {
  title: string;
  description: string;
  i: number;
  imageUrl: string;
  color: string;
  date: string;
}) => {
  return (
    <div className="h-[500px] w-full flex items-center justify-center sticky top-28">
      <div
        className={`flex flex-col relative h-[500px] w-full origin-top rounded-3xl text-yellow-50`}
        style={{
          top: `calc(-5vh + ${i * 160}px)`,
          // width: `calc(90% + ${i * 50}px)`,
          backgroundColor: color,
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={3000}
          height={200}
          quality={50}
          // onLoad={onLoadCallback}
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
              <p className="text-lg">{description}</p>
            </div>

            <button className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 h-fit">
              Attend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const projects = [
//   {
//     title: "Reduce",
//     description:
//       "In his series AD2186, German photographer Matthias Leidinger captures the awe-inspiring landscapes of the American Southwest, exploring the region’s vast, otherworldly terrain and the sense of wonder it evokes.",
//     src: "rock.jpg",
//     link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
//     color: "#BBACAF",
//   },
//   {
//     title: "Recycle",
//     description:
//       "In his series Les Rochers Fauves, French photographer Clément Chapillon captures the eerie beauty of the French countryside, exploring the tension between geographical and mental isolation.",
//     src: "tree.jpg",
//     link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
//     color: "#977F6D",
//   },
//   {
//     title: "Reward",
//     description:
//       "Reflecting on the beauty and fragility of Bali, photographer Zissou documents the island’s sacred and mundane moments in his series Water.",
//     src: "water.jpg",
//     link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
//     color: "#C2491D",
//   },
// ];
// #265F51
// #4FC5A8

const localEvents = [
  {
    title: "Ward Launch",
    description:
      "Join us for the launch of Ward, a smart bin that rewards you for recycling.",
    location: "Ward HQ",
    date: "July 20, 2024",
    time: "10:00",
    color: "#265092",
    imageUrl: "/dummy/ward-launch.jpg",
  },
  {
    title: "E-Waste Collection Drive",
    description:
      "Drop off your old electronics for recycling. Earn extra points for each item you bring.",
    location: "Ward HQ",
    date: "August 15, 2024",
    time: "10:00",
    imageUrl: "/dummy/coll.jpg",
    color: "#265F51",
  },
  {
    title: "Ward Recycling Workshop",
    description:
      "Learn how to effectively sort and recycle your waste. Participants will get a free recycling kit.",
    location: "Green Community Hall",
    date: "September 10, 2024",
    imageUrl: "/dummy/workshop.jpg",
    time: "10:00",
    color: "#4FC5A8",
  },
];
export default function Home() {
  return (
    <main className="wrapper">
      {/* <div className="flex items-center flex-col h-screen justify-center">
        <motion.div
          variants={variants}
          animate="open"
          initial="hidden"
          className="font-cv text-8xl flex gap-4"
        >
          <motion.div variants={itemVariants}>
            <span>Reduce</span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <span>Recycle</span>
          </motion.div>
          <motion.div
            variants={{
              open: {
                ...itemVariants?.open,
                rotate: -3,
                transition: {
                  ...itemVariants?.open.transition,
                  delay: 1,
                },
              },
              hidden: {
                ...itemVariants?.hidden,
                transition: {
                  ...itemVariants?.hidden.transition,
                  delay: 1,
                },
              },
            }}
            className="-rotate-3"
          >
            <span>Reward</span>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-2xl tracking-tighter mt-4 opacity-80"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.8,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          }}
        >
          Your path to a cleaner future.
        </motion.p>
      </div> */}

      <section className="lg:my-48 my-36 lg:flex lg:justify-between lg:flex-row flex justify-center flex-col-reverse md:gap-6 gap-8">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="md:text-5xl text-4xl font-semibold tracking-tight">
            Turn Your Trash Into Treasure
          </h1>
          <p className="md:text-2xl text-xl mt-2 text-gray-700 font-medium">
            Earn rewards by responsibly managing your waste.
          </p>
          <button className="mt-6 text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 w-fit lg:mx-0 mx-auto">
            Start Now
          </button>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10"></div>
          <div className="flex gap-2 items-end mx-4 pb-6 opacity-90">
            <Trash2Icon
              strokeWidth={1.5}
              size={180}
              className="skew-y-12 px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl flex-none shadow-lg bg-gradient-to-tl from-[#265F51] to-[#4FC5A8] stroke-white"
            />
            <div className="-mb-6 flex flex-col items-center">
              <Image
                src="/svg/full-color-logo.svg"
                width={100}
                height={50}
                alt="ward"
                className="mx-auto mb-4"
              />
              <RecycleIcon
                strokeWidth={1.5}
                size={180}
                className="px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl flex-none shadow-lg bg-gradient-to-tr from-[#265F51] to-[#4FC5A8] stroke-white"
              />
            </div>
            <GiftIcon
              strokeWidth={1.5}
              size={180}
              className="-skew-y-12  px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl flex-none shadow-lg bg-gradient-to-bl from-[#265F51] to-[#4FC5A8] stroke-white"
            />
          </div>
        </div>
      </section>

      <section>
        <MapIcon className="rounded-full p-3.5 bg-gray-50 mb-2" size={60} />
        <h2 className="text-4xl font-medium tracking-tight">
          Local <span className="text-[#265F51]">Event</span>
        </h2>
        <div className="mt-24 mb-80">
          {localEvents.map((event, i) => {
            return <Card key={`p_${i}`} {...event} i={i} />;
          })}
        </div>
      </section>
    </main>
  );
}
