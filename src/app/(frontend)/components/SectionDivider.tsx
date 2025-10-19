"use client";
import { useEffect, useState } from "react";

export default function SectionDivider() {
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

  const dividerColor = isDark ? "#F4EFFF" : "#5f249f";

  return (
    <div className="p-20 flex justify-center items-center">
      <div className="w-32 h-[2px]" style={{ backgroundColor: dividerColor }} />
    </div>
  );
}
