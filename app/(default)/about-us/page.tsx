"use client";

import Image from "next/image";
import React from "react";

function AboutUsPage() {
  return (
    <main>
      <section className="wrapper py-12">
        <h2 className="text-4xl font-medium tracking-tight mb-10">About Us</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            At <span className="font-bold">Ward</span>, we are dedicated to
            creating a sustainable future by encouraging eco-friendly practices
            and rewarding individuals for their efforts. Our mission is to make
            recycling and waste management easy, accessible, and rewarding for
            everyone. By transforming waste into value, we aim to reduce
            environmental impact and promote a greener planet.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            We envision a world where waste is viewed as a valuable resource
            rather than a problem. By fostering a community of environmentally
            conscious individuals, we strive to lead the way in innovative
            recycling solutions and sustainable living practices. Together, we
            can build a cleaner, healthier, and more sustainable future for
            generations to come.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">What We Do</h3>
          <p className="text-gray-700 mt-2">
            <span className="font-bold">Ward</span> offers a seamless platform
            for users to recycle their waste and earn rewards in the form of
            "Wards". Our app connects users with recycling services, making it
            simple to register waste, schedule pickups, and track environmental
            impact. Users can redeem their Wards for rewards, discounts, or
            donations to environmental causes.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">How It Works</h3>
          <ol className="list-decimal list-inside text-gray-700 mt-2">
            <li>
              <span className="font-bold">Register Your Waste</span>: Sign up on
              our platform and use the "Register Waste" feature to schedule a
              pickup.
            </li>
            <li>
              <span className="font-bold">Recycle</span>: Our couriers collect
              your waste and ensure it is properly recycled.
            </li>
            <li>
              <span className="font-bold">Earn Wards</span>: Earn points based
              on the quantity and type of waste you recycle.
            </li>
            <li>
              <span className="font-bold">Redeem Rewards</span>: Use your Wards
              to redeem exciting rewards, discounts, or donate to environmental
              causes.
            </li>
          </ol>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Impact</h3>
          <p className="text-gray-700 mt-2">
            Since our inception, <span className="font-bold">Ward</span> has
            helped recycle thousands of kilograms of waste, preventing it from
            ending up in landfills. Our community has earned thousands of Wards,
            participated in local events, and reduced CO2 emissions
            significantly. We are proud of our achievements and are constantly
            working to expand our reach and impact.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Join Our Community
          </h3>
          <p className="text-gray-700 mt-2">
            We believe that every small action contributes to a larger change.
            By joining <span className="font-bold">Ward</span>, you become a
            part of a vibrant community dedicated to sustainability and
            environmental preservation. Together, we can make a difference, one
            piece of waste at a time.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">
            Meet the Builder
          </h3>
          <p className="text-gray-700 mt-2">
            At <span className="font-bold">Ward</span>, our journey is powered
            by the dedication and expertise of a passionate team committed to
            sustainability and innovation. Our builders have teamed up on
            numerous freelance projects, bringing their unique skills and shared
            vision to every venture. Together, they drive Ward's mission to
            create a greener, more sustainable world.
          </p>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Alex Johnson
              </h3>
              <p className="text-gray-700 mt-2 italic">Sustainability Expert</p>
              <p className="text-gray-700 mt-2">
                Alex brings extensive knowledge in environmental science and
                sustainability practices. With a keen eye for detail and a deep
                passion for reducing environmental impact, Alex ensures that
                Ward’s initiatives are both effective and eco-friendly.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">Jamie Lee</h3>
              <p className="text-gray-700 mt-2 italic">Tech Innovator</p>
              <p className="text-gray-700 mt-2">
                Jamie is the tech brain behind Ward, with a background in
                software development and tech innovation. Jamie’s expertise in
                creating seamless user experiences and cutting-edge technology
                solutions helps make recycling and waste management easy and
                accessible for everyone.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800">
                Taylor Morgan
              </h3>
              <p className="text-gray-700 mt-2 italic">Community Builder</p>
              <p className="text-gray-700 mt-2">
                Taylor is dedicated to fostering community engagement and
                participation. With experience in project management and
                community outreach, Taylor ensures that Ward’s programs resonate
                with users and inspire collective action towards a sustainable
                future.
              </p>
            </div>
          </div> */}

          <div className="mb-4 mt-4">
            <h3 className="text-xl font-medium text-gray-800">Our Story</h3>
            <p className="text-gray-700 mt-2">
              Our team first collaborated on various freelance projects,
              combining our talents to deliver impactful solutions. In 2022, we
              decided to take our passion for sustainability to the next level
              by creating Ward. Our shared vision and commitment have been the
              driving force behind Ward’s success.
            </p>
          </div>

          <div className="mb-8 text">
            <h3 className="text-xl font-medium text-gray-800">
              A Memorable Moment
            </h3>
            <p className="text-gray-700 mt-2">
              In 2022, we captured a memorable moment of our team hanging out
              together, celebrating our achievements and planning for the
              future. This photo symbolizes our unity and the strong bond that
              propels Ward forward.
            </p>
            <div className="w-fit">
              <Image
                src="/dummy/2022.jpg"
                alt="Ward Team Hangout 2022"
                className="mt-4 rounded shadow-lg"
                width={800}
                height={600}
              />
              <p className="text-base italic text-center mt-2">
                Edbert Yienson, Aden Kesuma, Raymond Tju
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
