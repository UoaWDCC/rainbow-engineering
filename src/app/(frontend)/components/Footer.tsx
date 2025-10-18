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

  const leftTailRatio = 0.14;
  const leftTail = (screenWidth - 68) * leftTailRatio;

  return (
    <footer className="w-full ">

     <div className="flex mb-8">
        <svg
          viewBox={`0 0 ${screenWidth} 120`}
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-30"
          preserveAspectRatio="none"
          fill="none"
        >
          {createFooterSVG(screenWidth, "footer-path", false)}
        </svg>

</div>

  <div className="relative w-full -mb-1">
    <svg
      viewBox={`0 0 ${screenWidth} 120`}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[80px]"
      preserveAspectRatio="none"
    >
          <rect y="35" width={leftTail + 9} height="15" fill="#d0b7f4" />
          <rect y="49" width={leftTail + 13} height="12" fill="#d0b7f4" />
          <rect y="60" width={leftTail + 16} height="20" fill="#d0b7f4" />
          <rect y="75" width={leftTail + 20} height="11" fill="#d0b7f4" />
          <rect y="85" width={leftTail + 25} height="8" fill="#d0b7f4" />
          <rect y="90" width={leftTail + 35} height="15" fill="#d0b7f4" />
          <rect y="101" width={screenWidth} height="20" fill="#d0b7f4" />
      
    </svg>
  </div>




<div className="bg-[#d0b7f4] text-[#5f249f] text-center relative z-0">
  <div className="grid font-['Montserrat'] font-bold text-[11px] sm:text-[12px] grid-cols-1 sm:grid-cols-2 sm:justify-items-center sm:gap-y-1 lg:gap-x-120 mx-auto">
    
    <div className="flex mt-3 ml-5 gap-x-2">
      <a
        href="https://www.instagram.com/rainbowengineering.uoa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/instagram.png"
          alt="Instagram Logo"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
        />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/mail.png"
          alt="Mail Logo"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
        />
      </a>

      <a
        href="https://www.linkedin.com/company/rainbowengineeringuoa/?originalSubdomain=nz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/LinkedIn.png"
          alt="LinkedIn Logo"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
        />
      </a>

      <a
        href="https://www.facebook.com/rainbowengineering.uoa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/facebook.png"
          alt="Facebook Logo"
          width={40}
          height={40}
          className="object-contain transition-transform duration-300 ease-in-out hover:scale-107"
        />
      </a>
    </div>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=rainbowengineering.uoa@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
      <div className="mt-3 sm:mt-8 mr-5 flex justify-end">
        <div 
          className="text-left relative inline-block group"
          style={{
          paddingBottom: '1px'
          }}
          >
        <div className="text-sm">Contact us:</div>
        <div>rainbowengineering.uoa@gmail.com</div>
        <span 
          className="absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-600 ease-out w-0 group-hover:w-full"
        />
        </div>
      </div>
      </a>

    <div className="mt-5"></div>
  </div>
</div>

    </footer>
  );
}
