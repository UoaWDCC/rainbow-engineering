"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SocialsBar() {
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
  const textColor = isDark ? "#F4EFFF" : "#8a55d2";

  return (
    <div
      className="relative z-10 mt-22 w-full py-16 px-12 flex justify-center items-center max-w-full md:space-x-12"
      style={{ backgroundColor: sectionBg }}
    >
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
      {/* Text */}
      <div
        className="hidden md:block text-3xl font-bold font-[Montserrat]"
        style={{ color: textColor }}
      >
        Follow Our Socials
      </div>
    </div>
  );
}
