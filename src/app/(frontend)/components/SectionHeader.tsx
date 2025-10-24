"use client";
import { useEffect, useState } from "react";

interface SectionHeaderProps {
  text: string;
  className?: string;
}

export default function SectionHeader({ text, className = "" }: SectionHeaderProps) {
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

  const textColor = isDark ? "#F4EFFF" : "#5f249f";

  return (
    <h2
      className={className}
      style={{ color: textColor }}
    >
      {text}
    </h2>
  );
}
