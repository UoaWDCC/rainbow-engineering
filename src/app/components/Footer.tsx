"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function createFooterSVG(
  screenWidth: number,
  svgId: string,
  hasAnimated: boolean,
  leftTailRatio?: number,
) {
  if (!leftTailRatio) {
    leftTailRatio = 0.14;
  }
  const rightTailRatio = 1 - leftTailRatio;

  const leftTail = (screenWidth - 68) * leftTailRatio;
  const rightTail = (screenWidth - 68) * rightTailRatio;

  return (
    <>
      <path
        id="path1-2"
        d={`m 0,23.78 h${leftTail}a 35,35 0 0 1 33.81,25.94 35,35 0 0 0 33.81,25.94 h${rightTail}`}
        stroke="#FFF677"
        strokeWidth="9"
      />
      <path
        id="path2"
        d={`m 0,13.78 h${leftTail}a 45,45 0 0 1 43.47,33.35 25,25 0 0 0 24.15,18.53 h${rightTail}`}
        strokeWidth="9"
        stroke="#FFB050"
      />
      <path
        id="path4"
        d={`m 0,3.78 h${leftTail}a 55,55 0 0 1 53.13,40.76 15,15 0 0 0 14.49,11.12 h${rightTail}`}
        stroke="#F45757"
        strokeWidth="9"
      />
      <path
        id="path2-7"
        d={`m 0,33.78 h${leftTail}a 25,25 0 0 1 24.15,18.53 45,45 0 0 0 43.47,33.35 h${rightTail}`}
        stroke="#68BC8E"
        strokeWidth="9"
      />
      <path
        id="path4-0"
        d={`m 0,43.78 h${leftTail}a 15,15 0 0 1 14.49,11.12 55,55 0 0 0 53.13,40.76 h${rightTail}`}
        stroke="#628BEC"
        strokeWidth="9"
      />
      <path
        id="path6"
        d={`m 0,53.78 h${leftTail}a 5,5 0 0 1 4.83,3.71 65,65 0 0 0 62.79,48.18 h${rightTail}`}
        stroke="#AF4FC0"
        strokeWidth="9"
      />
    </>
  );
}

export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(500);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return (
    <footer className="relative w-full overflow-hidden">

    <div className="absolute top-[30%] w-1000 h-100 bg-[#d0b7f4] z-0"></div>

     <div className="relative z-30 flex">
        <svg
          viewBox={`0 0 ${screenWidth} 120`}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="none"
        >
          {createFooterSVG(screenWidth, "footer-path", false)}
        </svg>

</div>


<div className="bg-[#d0b7f4] text-[#8955d2] text-center relative z-0">
  <div>
  </div>
  <div className="grid font-['Montserrat'] font-bold text-[10px] lg:text-[12px] grid-cols-2 justify-items-center gap-y-1 lg:gap-x-120 max-w-3xl mx-auto">

    <div className="flex mt-3 gap-x-1.5">
        <img
    src="/instagram.png"
    alt="Instagram Logo"
    className="w-10 object-contain"
  />
          <img
    src="/mail.png"
    alt="Mail Logo"
    className="w-10 object-contain"
  />
          <img
    src="/LinkedIn.png"
    alt="LinkedIn Logo"
    className="w-10 object-contain"
  />
          <img
    src="/facebook.png"
    alt="Facebook Logo"
    className="w-10 object-contain"
  />

    </div>
    <div className="mt-7">rainbowengineering.uoa@gmail.com</div>
    <div className="mt-5"></div>
  </div>
</div>

    </footer>
  );
}
