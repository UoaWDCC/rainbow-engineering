import Image from "next/image";
import { getPayload } from "payload";
import React from "react";
import type { Media } from '../../payload-types'; // adjust path to your generated types

import HomePageBanner from "./components/HomePageBanner";
import ScrollingGallery from "./components/ScrollingGallery";
import RainbowButton from "./components/RainbowButton";
// import { images } from "./data";
import ExecCard from "./components/ExecCard";
import PageBackground from "./components/PageBackground";
import SocialsBar from "./components/SocialsBar";
import AboutUsSection from "./components/AboutUsSection";
import SectionHeader from "./components/SectionHeader";
import SectionDivider from "./components/SectionDivider";

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
    <PageBackground>
      <>
        <HomePageBanner />
        <div className="flex flex-col items-center mt-10">
          {/* Call-to-action Sign Up Button */}
          <div className="max-w-md px-4">
            <RainbowButton>SIGN UP</RainbowButton>
          </div>

          {/* Socials Bar */}
          <SocialsBar />
        </div>

        <div>
          <div className="max-w-7xl mx-auto px-4 text-purple-700">
            {/*================================ABOUT US SECTION================================*/}
            <AboutUsSection aboutus={aboutus} />

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
            <SectionDivider />

            <div className="mb-20 w-[97%] ml-[2%] mr-[0%]">
              <ScrollingGallery images={gallery} />
            </div>
            {/* placeholder images till we figure out how to do this */}
          </div>
        </div>
      </>
    </PageBackground>
  );
}
