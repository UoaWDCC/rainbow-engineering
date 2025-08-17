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
                    <div className="relative w-50 h-50 opacity-0" id="logo-container">
                        <Image src="/rainbow_logo.png" alt="" fill style={{ objectFit: 'contain' }} />
                    </div>
                </div>

            </div>

            {/* Title centered below the rainbow */}
            <div className="-mt-20 md:-mt-35 flex flex-col items-center">
                <h1 className="text-6xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                    Rainbow Engineering
                </h1>
                <h2 className="text-3xl text-[#8955d2] font-bold font-[Montserrat] text-center">
                    University of Auckland
                </h2>
            </div>
        </div>
    );
}
