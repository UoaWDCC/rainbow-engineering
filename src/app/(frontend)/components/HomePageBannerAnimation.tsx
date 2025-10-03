// Different animation for home page (rainbow is symmetrical)
// Same as BannerAnimation, except a central tail was added
// And the curves from the original were mirrored


"use client";
import { useEffect, useRef } from "react";
import Vivus from "vivus";
import { ScreenSize } from "../hooks/ScreenSize";


export default function HomePageBannerAnimation() {
  const vivusRef = useRef<Vivus | null>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const svgId = "my-svg";
  const screenWidth = ScreenSize();


  // Initialize animation only once when component mounts and screen width is available
  useEffect(() => {
    if (screenWidth === 0 || hasAnimated.current) return;

    // Small delay to ensure DOM is ready, again this feels a little hacky but seems to work well
    // This is needed to ensure the screensize hook reports the correct value as it returns 0
    // if DOM is not loaded
    const timer = setTimeout(() => {
      const svgElement = document.getElementById(svgId);
      if (svgElement && !hasAnimated.current) {
        vivusRef.current = new Vivus(
          svgId,
          {
            type: "delayed",
            duration: 250, // supposed to be in frames (60fps) but I don't think it is...
            animTimingFunction: Vivus.LINEAR,
            pathTimingFunction: Vivus.EASE_OUT,
            start: "manual", // Don't start automatically
          },
          () => {


            // Callback - force all paths to be fully visible mitigates resizing issues
            const svgElement = document.getElementById(svgId);
            if (svgElement) {
              const paths = svgElement.querySelectorAll("path");
              paths.forEach((path) => {
                path.style.strokeDasharray = "none";
                path.style.strokeDashoffset = "0";
              });
            }
          },
        );
        
        // Make logo appear slowly during animation 
        setTimeout(() => {
          const logo = document.getElementById('logo-container');
          if (logo) {
            logo.style.transition = 'opacity 1s ease-in-out';
            logo.style.opacity = '1';
            }
          }, 1200);

        // Show the SVG and start the animation
        // Prevents flashing the banner before the animation
        const svgElement = document.getElementById(svgId);
        if (svgElement) {
          svgElement.style.opacity = "1";
          vivusRef.current.play();
        }
        hasAnimated.current = true;
      }
    }, 16);

    return () => {
      clearTimeout(timer);
    };
  }, [screenWidth]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (vivusRef.current) {
        vivusRef.current.destroy();
        vivusRef.current = null;
      }
    };
  }, []);

  // Don't render until we have screen width
  if (screenWidth === 0) {
    return (
      <div ref={svgContainerRef} className="relative" style={{ height: 200 }}/>
    );
  }

  return (
    <div ref={svgContainerRef} className="relative">
      {createBannerSVG(screenWidth, svgId, hasAnimated.current)}
    </div>
  );
}

function createBannerSVG(
  screenWidth: number,
  svgId: string,
  hasAnimated: boolean,
) {
  // Here we calculate how long the horizontal lines or "tails" should be
  // and use these lengths to build the correct size of SVG.
  //
  // We also set the opacity of the graphic based on whether it has been animated.
  // If it has not been animated it should be transparent, else it should be opaque.
  // This prevents the graphic from flashing before it is animated.

  const centralTail = screenWidth * 0.7;
  const leftTail = (screenWidth - centralTail) / 2;
  const rightTail = leftTail;

  const extraMargin = 60;
  const totalWidth = screenWidth + extraMargin * 2; // Needs extra margin for rainbow to be centered for some reason

  return (
    <svg
      id={svgId}
      className="w-full"
      width="100%"
      height="200"
      viewBox={`0 0 ${totalWidth} 200`}
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: hasAnimated ? 1 : 0 }}
    >
    <path
        // red
        strokeLinecap="round"
        id="path3"
        d={`m 0,65.6622 h${leftTail} a 15,15 0 0 0 14.4889,-11.117715 a 55,55 0 0 1 53.1259,-40.764955 h${centralTail} a 55,55 0 0 1 53.1259, 40.764955 a 15,15 0 0 0 14.4889,11.117715 h${rightTail}`}
        stroke="#F45757"
        strokeWidth="9"
        fill="none"
    />
    <path
        // orange
        strokeLinecap="round"
        id="path2"
        d={`m 0,75.6622 h${leftTail} a 25,25 0 0 0 24.1482,-18.529525 45,45 0 0 1 43.4666,-33.353145 h${centralTail} a 45,45 0 0 1 43.4666,33.353145 a 25,25 0 0 0 24.1482,18.529525 h${rightTail}`}
        strokeWidth="9"
        stroke="#FFB050"
        fill="none"
      />
    <path
        // yellow
        strokeLinecap="round"
        id="path1"
        d={`m 0,85.662196 h${leftTail} a 35,35 0 0 0 33.8074,-25.941336 a 35,35 0 0 1 33.8074,-25.94133 h${centralTail} a 35,35 0 0 1 33.8074,25.94133 a 35,35 0 0 0 33.8074,25.941336 h${rightTail}`}
        stroke="#FFF677"
        strokeWidth="9"
        fill="none"
    />
      <path
        // green
        strokeLinecap="round"
        id="path4"
        stroke="#68BC8E"
        strokeWidth="9"
        fill="none"
        d={`m 0,95.865855 h${leftTail} a 45,45 0 0 0 43.4666,-33.353138 a 25,25 0 0 1 24.1482,-18.529528 h${centralTail} a 25,25 0 0 1 24.1482,18.529528 a 45,45 0 0 0 43.4666,33.353138 h${rightTail}`}
    />
    <path
        // blue
        strokeLinecap="round"
        id="path5"
        d={`m 0,105.6622 h${leftTail} a 55,55 0 0 0 53.1259,-40.76496 a 15,15 0 0 1 14.4889,-11.11771 h${centralTail} a 15,15 0 0 1 14.4889,11.11771 a 55,55 0 0 0 53.1259,40.76496 h${rightTail}`}
        stroke="#628BEC"
        strokeWidth="9"
        fill="none"
    />
    <path
        // purple
        strokeLinecap="round"
        id="path6"
        d={`m 0,115.6622 h${leftTail} a 65,65 0 0 0 62.7852,-48.176765 a 5,5 0 0 1 4.8297,-3.705905 h${centralTail} a 5,5 0 0 1 4.8297,3.705905 a 65,65 0 0 0 62.7852,48.176765 h${rightTail}`}
        stroke="#AF4FC0"
        strokeWidth="9"
        fill="none"
    />
    </svg>
  );
}
