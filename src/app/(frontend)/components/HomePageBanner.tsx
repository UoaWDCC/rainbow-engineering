"use client";
import HomePageBannerAnimation from "./HomePageBannerAnimation";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function HomePageBanner() {
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

    const bannerBg = isDark ? "#121022" : "#F1EAFB";
    const textColor = isDark ? "#F4EFFF" : "#5f249f";

    return (
        <div className="mt-20 mb-20 w-full flex flex-col items-center" style={{ backgroundColor: bannerBg }}>
            {/* Rainbow animation at the top */}
            <div className="w-full flex justify-center relative h-[200px] md:h-[250px]">
                <HomePageBannerAnimation />

                {/* Logo - There is an issue with the logo stretching before the animation plays so it is made hidden until it finishes */}
                <div className="-mt-15 absolute top-0 flex justify-center w-full">
                    <div className="relative w-50 h-50 opacity-0" id="logo-container">
                        <Image src="/rainbow_logo_bb.png" alt="" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>

            </div>

            {/* Banner text under the rainbow */}
            <div className="-mt-20 md:-mt-35 flex flex-col items-center space-y-4 md:space-y-6">

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl font-bold font-[Montserrat] text-center" style={{ color: textColor }}>
                    Rainbow Engineering
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold font-[Montserrat] text-center" style={{ color: textColor }}>
                    University of Auckland
                </h2>
                 {/* Divider line */}
                <div className="w-32 h-[2px]" style={{ backgroundColor: textColor }} />

                {/* Rainbow Engineering's Three Values */}
                <div className="inline-flex items-center justify-center whitespace-nowrap gap-2 sm:gap-4 w-full max-w-md px-4">
                    <span className="text-1xl font-bold font-[Montserrat]" style={{ color: textColor }}>
                        Advocacy
                    </span>
                    <span className="text-1xl font-bold font-[Montserrat]" style={{ color: textColor }}>•</span>
                    <span className="text-1xl font-bold font-[Montserrat]" style={{ color: textColor }}>Opportunity</span>
                    <span className="text-1xl font-bold font-[Montserrat]" style={{ color: textColor }}>•</span>
                    <span className="text-1xl font-bold font-[Montserrat]" style={{ color: textColor }}>Community</span>
                </div>
            </div>
        </div>
    );
}