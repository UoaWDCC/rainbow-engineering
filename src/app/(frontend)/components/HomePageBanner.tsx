"use client";
import HomePageBannerAnimation from "./HomePageBannerAnimation";
import Image from 'next/image'

export default function HomePageBanner() {

    return (
        <div className="mt-4 mb-20 w-full bg-[#F1EAFB] flex flex-col items-center">
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
                <h1 className="text-5xl sm:text-6xl text-[#5f249f] font-bold font-[Montserrat] text-center">
                    Rainbow Engineering
                </h1>
                <h2 className="text-2xl sm:text-3xl text-[#5f249f] font-bold font-[Montserrat] text-center">
                    University of Auckland
                </h2>
                 {/* Divider line */}
                <div className="w-32 h-[2px] bg-[#5f249f]" />

                {/* Rainbow Engineering's Three Values */}
                <div className="inline-flex items-center justify-center whitespace-nowrap gap-2 sm:gap-4 w-full max-w-md px-4">
                    <span className="text-1xl text-[#5f249f] font-bold font-[Montserrat]">
                        Advocacy
                    </span>
                    <span className="text-1xl text-[#5f249f] font-bold font-[Montserrat]">•</span>
                    <span className="text-1xl text-[#5f249f] font-bold font-[Montserrat]">Opportunity</span>
                    <span className="text-1xl text-[#5f249f] font-bold font-[Montserrat]">•</span>
                    <span className="text-1xl text-[#5f249f] font-bold font-[Montserrat]">Community</span>
                </div>
            </div>
        </div>
    );
}