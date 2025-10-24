"use client";

import { useEffect, useState } from "react";
import BannerAnimation from "./BannerAnimation";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  //this part tracks whether dark mode is currently active
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    //checks what NAvbar has saved for dark mode preference
    const saved = localStorage.getItem("darkMode") === "true";
    setIsDark(saved);

    const onThemeChange = (e: Event) => {
      const { isDark } = (e as CustomEvent).detail ?? {};
      if (typeof isDark === "boolean") setIsDark(isDark);
    };
    window.addEventListener("themechange", onThemeChange);

    //in case dark mode changes in another browser/tab
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

  //dark and light mode colours
  const bannerBg = isDark ? "#121022" : "#F1EAFB";
  const bannerText = isDark ? "#F4EFFF" : "#5f249f";

  return (
    <>
      <div
        id="banner"
        className="w-full px-4 py-10 relative -z-10"
        style={{ background: bannerBg }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold font-[Montserrat] pb-12 lg:py-10 z-10"
          style={{ color: bannerText }}
        >
          {title}
        </h1>
      </div>

      <BannerAnimation />
    </>
  );
}
