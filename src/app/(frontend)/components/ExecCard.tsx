// components/ExecCard.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ExecCardProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
}

export default function ExecCard({ name, role, imageSrc, description }: ExecCardProps) {
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

  const cardBg = isDark ? "#2A2342" : "#E2D6F6";
  const nameColor = isDark ? "#F4EFFF" : "#1f2937";
  const roleColor = isDark ? "#CFC6E9" : "#4b5563";
  const descColor = isDark ? "#B8ADDA" : "#334155";

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl" style={{ backgroundColor: cardBg }}>
      <Image
        src={imageSrc}
        alt={name}
        width={160} // same as w-40
        height={160} // same as h-40
        className="mb-2 rounded-full"
      />
      <p className="text-sm md:text-base font-semibold font-[Montserrat]" style={{ color: nameColor }}>{name}</p>
      <p className="text-xs md:text-sm font-semibold font-[Montserrat] mb-1" style={{ color: roleColor }}>{role}</p>
      <p className="text-xs md:text-sm font-[Montserrat]" style={{ color: descColor }}>{description}</p>
    </div>
  );
}