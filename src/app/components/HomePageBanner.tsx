"use client";
import HomePageBannerAnimation from "./HomePageBannerAnimation";
import Image from 'next/image'

export default function HomePageBanner() {

    return (
        <div className="mt-25 mb-30 w-full bg-[#F1EAFB] flex flex-col items-center">
            {/* Rainbow animation at the top */}
            <div className="w-full flex justify-center relative h-[200px] md:h-[250px]">
                <HomePageBannerAnimation />

                {/* Logo - There is an issue with the logo stretching before the animation plays so it is made hidden until it finishes */}
                <div className="-mt-15 absolute top-0 flex justify-center w-full">
                    <div className="relative w-50 h-50 opacity-0 transition-opacity duration-600 ease-in-out" id="logo-container">
                        <Image src="/rainbow_logo.png" alt="" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>

            </div>

            {/* Banner text under the rainbow */}
            <div className="-mt-20 md:-mt-35 flex flex-col items-center space-y-4 md:space-y-6">

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                    Rainbow Engineering
                </h1>
                <h2 className="text-2xl sm:text-3xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                    University of Auckland
                </h2>
                 {/* Divider line */}
                <div className="w-32 h-[2px] bg-[#8955d2]" />

                {/* Rainbow Engineering's Three Values */}
                <div className="flex justify-between w-full max-w-md px-10">
                    <h4 className="text-1xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                        Advocacy
                    </h4>
                    <h4 className="text-1xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                        •
                    </h4>
                    <h4 className="text-1xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                        Opportunity
                    </h4>
                    <h4 className="text-1xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                        •
                    </h4>
                    <h4 className="text-1xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                        Community
                    </h4>
                </div>
            </div>
        </div>
    );
}
