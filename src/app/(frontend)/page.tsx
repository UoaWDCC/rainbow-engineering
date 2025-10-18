import Image from "next/image";
import { getPayload } from "payload";
import React from "react";
import type { Media } from '../../payload-types'; // adjust path to your generated types

import HomePageBanner from "./components/HomePageBanner";
import ScrollingGallery from "./components/ScrollingGallery";
import RainbowButton from "./components/RainbowButton";
// import { images } from "./data";
import ExecCard from "./components/ExecCard";

import config from "@/payload.config";

type AboutUsType = {
  Title: string;
  Image: { url: string; alt?: string };
  "About Us Description": string;
  "Bullet Points Description": string;
  "Bullet Points"?: { Point: string }[];
};

export default async function HomePage() {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig });

  const aboutus = await payload.findGlobal({
    slug: "about-us",
    depth: 1,
  }) as AboutUsType;

  const execs = await payload.find({
    collection: 'executives',
    sort: "name", // optional, alphabetically
  });

  // loading images from payload collection for scrolling gallery
  interface GalleryItem {
    src: string;
    alt?: string;
  }

  const images = await payload.find({
    collection: "showcase",
  });

  const gallery: GalleryItem[] = images.docs.map((element) => ({
    src: (element.img as Media).url ?? '',
    alt: (element.img as Media).alt ?? '',
  }));

  return (
    <div className="bg-light_purple min-h-screen">
      {/*light purple tailwind colour*/}

      <>
        <HomePageBanner />
        <div className="flex flex-col items-center mt-10">
          {/* Call-to-action Sign Up Button */}
            <div className="max-w-md px-4">
            <RainbowButton href="/signup">SIGN UP</RainbowButton>
          </div>

          {/* Socials Bar */}
          <div className="relative z-10 mt-22 w-full bg-[#E2D6F6] py-8 px-12 flex justify-center items-center max-w-full md:space-x-12">
            {/* Links */}
            <div className="flex space-x-5">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
              >
                <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                  <Image
                    src="/instagram.png"
                    alt="Instagram Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>


              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
              >
                <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                  <Image
                    src="/mail.png"
                    alt="Mail Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://nz.linkedin.com/company/rainbowengineeringuoa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
              >
                <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                  <Image
                    src="/LinkedIn.png"
                    alt="LinkedIn Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
                            {/* Facebook */}
              <a
                href="https://www.facebook.com/rainbowengineering.uoa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-4xl transition-transform duration-300 ease-in-out transform hover:-translate-y-3"
              >
                <div className="relative w-10 h-10 sm:w-20 sm:h-20">
                  <Image
                    src="/facebook.png"
                    alt="Facebook Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-4">
            {/*================================ABOUT US SECTION================================*/}
            <div className="mt-22 w-full bg-[#E2D6F6] py-6 px-4 sm:px-16 rounded-2xl">
              {/* background coloured block */}

              <h2 className="text-3xl sm:text-5xl text-[#5f249f] font-bold font-[Montserrat] mb-3 text-center p-4 sm:p-6">
                {aboutus.Title}
              </h2>
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8">
                {/* code for about us image */}
                <div className="relative flex flex-col items-center text-center w-full sm:w-[1200px] h-[400px] overflow-hidden rounded-xl">
                  <Image
                    src={aboutus.Image.url}
                    alt={aboutus.Image?.alt ?? "About Us Image"}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* code for about us text */}
                <div className="flex flex-col justify-center items-center text-center w-full sm:w-500 p-4 rounded">
                  <p className="text-base sm:text-lg font-[Montserrat] text-slate-700 px-2 sm:px-7">
                    {aboutus["About Us Description"]}
                    <br />
                    <br />
                    {aboutus["Bullet Points Description"]}
                  </p>
                  <ul className="list-disc text-base sm:text-lg font-[Montserrat] text-slate-700 px-8 text-left mt-4">
                    {
                      aboutus["Bullet Points"]?.map(
                      (
                        item, index) => (
                          <li key={index}>
                            {item.Point}
                          </li>
                        )
                      
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/*================================MEET THE EXECS================================*/}
            <h2 className="mt-22 text-3xl md:text-5xl text-[#5f249f] font-bold font-[Montserrat] mb-3 text-center p-6">
              Meet the Exec Team!
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
              {execs.docs.map((exec) => (
                <ExecCard
                  key={exec.id}
                  name={exec.name}
                  role={exec.role}
                  description={exec.description}
                  imageSrc={
                    typeof exec.image === "object" && exec.image.url
                      ? exec.image.url
                      : "/placeholder.jpg"
                  }
                />
              ))}
            </div>

            {/*================================SCROLLING GALLERY================================*/}
            <div className="p-20 flex justify-center items-center">
              <div className="w-32 h-[2px] bg-[#5f249f]" />
            </div>

            <div className="mb-20 w-[97%] ml-[2%] mr-[0%]">
              <ScrollingGallery images={gallery} />
            </div>
            {/* placeholder images till we figure out how to do this */}
          </div>
        </div>
      </>
    </div>
  );
}
