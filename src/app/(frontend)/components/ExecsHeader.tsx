"use client";
import { useEffect, useState } from "react";

export default function ExecsHeader() {
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
      className="mt-22 text-3xl md:text-5xl font-bold font-[Montserrat] mb-3 text-center p-6"
      style={{ color: textColor }}
    >
      Meet the Exec Team!
    </h2>
  );
}
