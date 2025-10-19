"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type AboutUsType = {
  Title: string;
  Image: { url: string; alt?: string };
  "About Us Description": string;
  "Bullet Points Description": string;
  "Bullet Points"?: { Point: string }[];
};

interface AboutUsSectionProps {
  aboutus: AboutUsType;
}

export default function AboutUsSection({ aboutus }: AboutUsSectionProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setIsDark(saved);

    const onThemeChange = (e: Event) => {
      const { isDark } = (e as CustomEvent).detail ?? {};
      if (typeof isDark === "boolean") setIsDark(isDark);
    };
    window.addEventListener("themechange", onThemeChange);

    const onStorage = (e: StorageEvent) => {
      if (e.key === "darkMode" && e.newValue != null) {
        setIsDark(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("themechange", onThemeChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const sectionBg = isDark ? "#2A2342" : "#E2D6F6";
  const titleColor = isDark ? "#F4EFFF" : "#5f249f";
  const textColor = isDark ? "#B8ADDA" : "#334155";

  return (
    <div
      className="mt-22 w-full py-6 px-4 sm:px-16 rounded-2xl"
      style={{ backgroundColor: sectionBg }}
    >
      {/* background coloured block */}

      <h2
        className="text-3xl sm:text-5xl font-bold font-[Montserrat] mb-3 text-center p-4 sm:p-6"
        style={{ color: titleColor }}
      >
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
          <p
            className="text-base sm:text-lg font-[Montserrat] px-2 sm:px-7"
            style={{ color: textColor }}
          >
            {aboutus["About Us Description"]}
            <br />
            <br />
            {aboutus["Bullet Points Description"]}
          </p>
          <ul
            className="list-disc text-base sm:text-lg font-[Montserrat] px-8 text-left mt-4"
            style={{ color: textColor }}
          >
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
  );
}
