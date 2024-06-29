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
  LibraryIcon,
  LightbulbIcon,
  MapIcon,
  MoveUpRightIcon,
  RecycleIcon,
  ShieldQuestionIcon,
  Trash2Icon,
} from "lucide-react";
import { localEvents } from "../../utils/constant";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/accrordion";
import Link from "next/link";

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
  url,
}: {
  title: string;
  description: string;
  i: number;
  imageUrl: string;
  color: string;
  date: string;
  url: string;
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
              <p className="text-lg mt-2">{description}</p>
            </div>

            <Link
              href={url}
              target="_blank"
              className="text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 h-fit flex gap-2 items-center"
            >
              Attend
              <MoveUpRightIcon size={12} />
            </Link>
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

export default function Home() {
  return (
    <main className="">
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

      <section className="wrapper lg:my-48 mt-36 mb-40 lg:flex lg:justify-between lg:flex-row flex justify-center flex-col-reverse md:gap-6 gap-8">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="md:text-5xl text-4xl font-semibold tracking-tight">
            Turn Your Trash Into Treasure
          </h1>
          <p className="md:text-2xl text-xl mt-2 text-gray-700 font-medium">
            Earn rewards by responsibly managing your waste.
          </p>
          <Link
            href="/contribute"
            className="mt-6 text-white px-4 py-1.5 rounded-3xl hover:bg-gray-700 hover:ring-1 transition-all duration-300 font-medium bg-gray-900 w-fit lg:mx-0 mx-auto"
          >
            Start Now
          </Link>
        </div>
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-white via-transparent to-white z-10"></div>
          <div className="flex gap-2 items-end mx-4 pb-6 opacity-90">
            <motion.div
              className="flex-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Trash2Icon
                strokeWidth={1.5}
                size={180}
                className="skew-y-12 px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl shadow-lg bg-gradient-to-tl from-[#265F51] to-[#4FC5A8] stroke-white"
              />
            </motion.div>
            <div className="-mb-6 flex flex-col items-center">
              <motion.div
                className="flex-none"
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              >
                <Image
                  src="/svg/full-color-logo.svg"
                  width={100}
                  height={50}
                  alt="ward"
                  className="mx-auto mb-4 md:w-24 w-20"
                />
              </motion.div>
              <motion.div
                className="flex-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
              >
                <RecycleIcon
                  strokeWidth={1.5}
                  size={180}
                  className="px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl shadow-lg bg-gradient-to-tr from-[#265F51] to-[#4FC5A8] stroke-white"
                />
              </motion.div>
            </div>
            <motion.div
              className="flex-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <GiftIcon
                strokeWidth={1.5}
                size={180}
                className="-skew-y-12  px-2 md:w-[180px] md:h-[240px] w-24 h-40 rounded-3xl shadow-lg bg-gradient-to-bl from-[#265F51] to-[#4FC5A8] stroke-white"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-bl from-[#4FC5A8] to-[#4FC5A8] py-20"
        id="how-it-works"
      >
        <div className="wrapper">
          <LightbulbIcon
            className="rounded-full p-3.5 bg-yellow-50 mb-2"
            size={60}
          />
          <h2 className="text-4xl font-medium tracking-tight">
            <span className="text-[#265F51]">How</span> it works
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="relative rounded-3xl bg-yellow-50 p-4">
              <div className="absolute right-4 top-4">
                <span className="text-lg font-medium">1</span>
              </div>
              <div className="w-10/12">
                <h3 className="font-medium text-2xl">
                  Sign Up and Set Up Your Profile
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4">
              <div className="absolute right-4 top-4">
                <span className="text-lg font-medium">2</span>
              </div>
              <div className="w-10/12">
                <h3 className="font-medium text-2xl">
                  Sort and Select Your Waste
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4">
              <div className="absolute right-4 top-4">
                <span className="text-lg font-medium">3</span>
              </div>
              <div className="w-10/12">
                <h3 className="font-medium text-2xl">
                  Schedule a Pickup or Drop-Off
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl bg-yellow-50 p-4">
              <div className="absolute right-4 top-4">
                <span className="text-lg font-medium">4</span>
              </div>
              <div className="w-10/12">
                <h3 className="font-medium text-2xl">
                  Earn Wards and Track Your Impact
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper pt-20">
        <MapIcon
          className="rounded-full p-3.5 bg-[#265F51] stroke-white mb-2"
          size={60}
        />
        <h2 className="text-4xl font-medium tracking-tight">
          Local <span className="text-[#265F51]">Event</span> from{" "}
          <span className="text-[#265F51]">Medan, Indonesia</span>
        </h2>
        <div className="mt-24 mb-80">
          {localEvents.map((event, i) => {
            return <Card key={`p_${i}`} {...event} i={i} />;
          })}
        </div>
      </section>

      <section className="wrapper pt-20">
        <LibraryIcon
          className="rounded-full p-3.5 bg-[#265F51] stroke-white mb-2"
          size={60}
        />
        <h2 className="text-4xl font-medium tracking-tight">
          Know your <span className="text-[#265F51]">Waste</span>
        </h2>
        <div className="mt-8 mb-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <Link
              href="https://en.wikipedia.org/wiki/Plastic_recycling"
              target="_blank"
              className="relative rounded-2xl p-3 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-300"
            >
              <Image
                src="/dummy/know-plastic.jpg"
                alt="plastic"
                width={400}
                height={300}
                className="rounded-2xl mb-4 h-[240px] w-full object-cover"
              />
              <h3 className="font-medium text-xl">Plastic</h3>
              <p className="text-base mt-1 line-clamp-3">
                Plastics are versatile materials found in a wide range of
                products. Common plastic waste includes bottles, containers, and
                packaging. Plastics are typically labeled with recycling codes,
                which help determine their recyclability.
              </p>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Glass_recycling"
              target="_blank"
              className="relative rounded-2xl p-3 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-300"
            >
              <Image
                src="/dummy/know-glass.jpg"
                alt="plastic"
                width={400}
                height={300}
                className="rounded-2xl mb-4 h-[240px] w-full object-cover"
              />
              <h3 className="font-medium text-xl">Glass</h3>
              <p className="text-base mt-1 line-clamp-3">
                Glass is a highly recyclable material that can be reused
                indefinitely without losing quality. Common glass waste includes
                bottles and jars. Recycling glass helps conserve natural
                resources and reduces energy consumption.
              </p>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Paper_recycling"
              target="_blank"
              className="relative rounded-2xl p-3 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 border border-transparent transition-all duration-300"
            >
              <Image
                src="/dummy/know-paper.jpg"
                alt="plastic"
                width={400}
                height={300}
                className="rounded-2xl mb-4 h-[240px] w-full object-cover"
              />
              <h3 className="font-medium text-xl">Paper</h3>
              <p className="text-base mt-1 line-clamp-3">
                Paper is one of the most commonly recycled materials. It
                includes newspapers, magazines, cardboard, and office paper.
                Recycling paper helps save trees, water, and energy, and reduces
                landfill waste.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="wrapper pb-20">
        <ShieldQuestionIcon
          className="rounded-full p-3.5 bg-[#265F51] stroke-white mb-2"
          size={60}
        />
        <h2 className="text-4xl font-medium tracking-tight">
          Frequently Asked <span className="text-[#265F51]">Questions</span>
        </h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="mt-8"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Ward?</AccordionTrigger>
            <AccordionContent>
              <span className="font-bold">Ward</span> is a web application that
              rewards users for recycling and participating in eco-friendly
              practices. By recycling your waste, you earn points called "Wards"
              which can be redeemed for rewards, discounts, or donations to
              environmental causes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I start earning Wards?</AccordionTrigger>
            <AccordionContent>
              To start earning Wards, follow these simple steps:
              <ol className="list-decimal pl-5">
                <li>
                  <span className="font-bold">Sign Up</span>: Create an account
                  on Ward.
                </li>
                <li>
                  <span className="font-bold">Register Your Waste</span>: Use
                  the "Register Waste" button to schedule a pickup.
                </li>
                <li>
                  <span className="font-bold">Recycle</span>: A courier will
                  pick up your waste and you’ll earn Wards based on the quantity
                  and type of waste.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              What types of waste can I recycle with Ward?
            </AccordionTrigger>
            <AccordionContent>
              You can recycle the following types of waste:
              <ul className="list-disc pl-5">
                <li>
                  <span className="font-bold">Plastics</span>: Bottles,
                  containers, packaging
                </li>
                <li>
                  <span className="font-bold">Paper</span>: Newspapers,
                  magazines, cardboard
                </li>
                <li>
                  <span className="font-bold">Metals</span>: Aluminum cans, tin
                  cans, scrap metal
                </li>
                <li>
                  <span className="font-bold">Electronics</span>: Old phones,
                  computers, batteries
                </li>
                <li>
                  <span className="font-bold">Glass</span>: Bottles, jars
                </li>
              </ul>
              For a detailed list, check out our{" "}
              <a href="#know-your-waste" className="text-[#265F51]">
                Know Your Waste
              </a>{" "}
              section.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do I redeem my Wards?</AccordionTrigger>
            <AccordionContent>
              To redeem your Wards:
              <ol className="list-decimal pl-5">
                <li>
                  <span className="font-bold">Log In</span> to your Ward
                  account.
                </li>
                <li>
                  <span className="font-bold">Visit the Shop</span>: Browse
                  through the available rewards.
                </li>
                <li>
                  <span className="font-bold">Select an Item</span>: Choose the
                  item you want and redeem your Wards for it.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How are Wards calculated?</AccordionTrigger>
            <AccordionContent>
              Wards are calculated based on the type and quantity of waste you
              recycle. Different materials have different point values, and
              these values are displayed when you register your waste.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How do I track my impact?</AccordionTrigger>
            <AccordionContent>
              You can track your impact by logging into your account and viewing
              your dashboard. It will show you the total waste you’ve recycled,
              the Wards you’ve earned, and the environmental impact of your
              contributions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>
              What should I do if the courier doesn’t arrive?
            </AccordionTrigger>
            <AccordionContent>
              If the courier doesn’t arrive at the scheduled time, please
              contact our support team at{" "}
              <a
                href="mailto:support@ward.recrav.com"
                className="text-[#265F51]"
              >
                support@ward.recrav.com
              </a>{" "}
              or through the help section in your account. We will resolve the
              issue as quickly as possible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>
              Can I host my own recycling event?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We encourage community involvement and support for local
              recycling events. If you’re interested in hosting an event, please
              get in touch with us at{" "}
              <a
                href="mailto:events@ward.recrav.com"
                className="text-[#265F51]"
              >
                events@ward.recrav.com
              </a>
              .
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              How do I get involved in local events?
            </AccordionTrigger>
            <AccordionContent>
              You can get involved in local events by visiting our{" "}
              <a href="#local-events" className="text-[#265F51]">
                Local Events
              </a>{" "}
              page. Here you can find upcoming events, sign up to participate,
              or volunteer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Is Ward available in my area?</AccordionTrigger>
            <AccordionContent>
              Ward is continually expanding to new areas. Please check our{" "}
              <a href="#service-areas" className="text-[#265F51]">
                Service Areas
              </a>{" "}
              section to see if we are available in your location. If not, stay
              tuned as we might be coming to your area soon!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-11">
            <AccordionTrigger>Need more help?</AccordionTrigger>
            <AccordionContent>
              If you have any other questions or need further assistance, please
              contact us at{" "}
              <a href="mailto:help@ward.recrav.com" className="text-[#265F51]">
                help@ward.recrav.com
              </a>{" "}
              {/* or visit our{" "}
              <a href="#contact-us" className="text-[#265F51]">
                Contact Us
              </a>{" "} */}
              page.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
