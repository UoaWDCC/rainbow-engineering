// This component handles the little rainbow animation on the banner
//
// It works well enough and I don't have the time to do more on this right now
// I will say there are a few ugly hacks in here because SVG's are evil but lowkey the alternatives
//  are worse.
//
// Known issues:
// - The animation breaks and ends early if you resize during it playing.
// - Not relevant to end users but I made the paths in the wrong order :c (3-2-1-4-5-6)
// - Path drawing is same every time (this would be cool to randomize)
// - Animation may be framerate dependent?? (i.e plays faster on higher framerates)
//
// Again, blame robin for the stupidity here
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BannerAnimation;
import { useRef, useEffect } from 'react';
import Vivus from 'vivus';
import { ScreenSize } from '../hooks/ScreenSize';
function BannerAnimation() {
    var vivusRef = (0, useRef)(null);
    var svgContainerRef = (0, useRef)(null);
    var hasAnimated = (0, useRef)(false);
    var svgId = "my-svg";
    var screenWidth = (0, ScreenSize)();
    // Initialize animation only once when component mounts and screen width is available
    (0, useEffect)(function () {
        if (screenWidth === 0 || hasAnimated.current)
            return;
        // Small delay to ensure DOM is ready, again this feels a little hacky but seems to work well
        // This is needed to ensure the screensize hook reports the correct value as it returns 0
        // if DOM is not loaded
        var timer = setTimeout(function () {
            var svgElement = document.getElementById(svgId);
            if (svgElement && !hasAnimated.current) {
                vivusRef.current = new Vivus(svgId, {
                    type: "delayed",
                    duration: 250, // supposed to be in frames (60fps) but I don't think it is...
                    animTimingFunction: Vivus.LINEAR,
                    pathTimingFunction: Vivus.EASE_OUT,
                    start: "manual", // Don't start automatically
                }, function () {
                    // Callback - force all paths to be fully visible mitigates resizing issues
                    var svgElement = document.getElementById(svgId);
                    if (svgElement) {
                        var paths = svgElement.querySelectorAll("path");
                        paths.forEach(function (path) {
                            path.style.strokeDasharray = "none";
                            path.style.strokeDashoffset = "0";
                        });
                    }
                });
                // Show the SVG and start the animation
                // This is a pretty ugly hack but it prevents flashing the banner before the animation
                var svgElement_1 = document.getElementById(svgId);
                if (svgElement_1) {
                    svgElement_1.style.opacity = "1";
                    vivusRef.current.play();
                }
                hasAnimated.current = true;
            }
        }, 16);
        return function () {
            clearTimeout(timer);
        };
    }, [screenWidth]);
    // Cleanup on unmount
    (0, useEffect)(function () {
        return function () {
            if (vivusRef.current) {
                vivusRef.current.destroy();
                vivusRef.current = null;
            }
        };
    }, []);
    // Don't render until we have screen width
    if (screenWidth === 0) {
        return (<div ref={svgContainerRef} className="relative -mt-25 -z-5 h-[200px]"/>);
    }
    return (<div ref={svgContainerRef} className="relative -mt-25 -z-5">
      {createBannerSVG(screenWidth, svgId, hasAnimated.current)}
    </div>);
}
function createBannerSVG(screenWidth, svgId, hasAnimated, leftTailRatio) {
    // Here we calculate how long the horizontal lines or "tails" should be
    // and use these lengths to build the correct size of SVG.
    //
    // The ratio of left to right tail is controlled by the optional param leftTailRatio
    //
    // We also set the opacity of the graphic based on whether it has been animated.
    // If it has not been animated it should be transparent, else it should be opaque.
    // This prevents the graphic from flashing before it is animated.
    //
    // This is overcomplicated. Sorry.
    if (!leftTailRatio) {
        leftTailRatio = 0.85;
    }
    var rightTailRatio = 1 - leftTailRatio;
    var leftTail = (screenWidth - 68) * leftTailRatio;
    var rightTail = (screenWidth - 68) * rightTailRatio;
    return (<svg id={svgId} className="w-full" width="100%" height="200" viewBox={"0 0 ".concat(screenWidth, " 200")} xmlns="http://www.w3.org/2000/svg" style={{ opacity: hasAnimated ? 1 : 0 }}>
      <path 
    // yellow
    strokeLinecap="round" id="path1" d={"m 0,85.662196 h".concat(leftTail, " a 35,35 0 0 0 33.8074,-25.941336 35,35 0 0 1 33.8074,-25.94133 h").concat(rightTail)} stroke="#FFF677" strokeWidth="9" fill="none"/>
      <path 
    // orange
    strokeLinecap="round" id="path2" d={"m 0,75.6622 h".concat(leftTail, " a 25,25 0 0 0 24.1482,-18.529525 45,45 0 0 1 43.4666,-33.353145 h").concat(rightTail)} strokeWidth="9" stroke="#FFB050" fill="none"/>
      <path 
    // red
    strokeLinecap="round" id="path3" d={"m 0,65.6622 h".concat(leftTail, " a 15,15 0 0 0 14.4889,-11.117715 55,55 0 0 1 53.1259,-40.764955 h").concat(rightTail)} stroke="#F45757" strokeWidth="9" fill="none"/>
      <path 
    // green
    strokeLinecap="round" id="path4" stroke="#68BC8E" strokeWidth="9" fill="none" d={"m 0,95.865855 h".concat(leftTail, " a 45,45 0 0 0 43.4666,-33.353138 25,25 0 0 1 24.1482,-18.529528 h").concat(rightTail)}/>
      <path 
    // blue
    strokeLinecap="round" id="path5" d={"m 0,105.6622 h".concat(leftTail, " a 55,55 0 0 0 53.1259,-40.76496 15,15 0 0 1 14.4889,-11.11771 h").concat(rightTail)} stroke="#628BEC" strokeWidth="9" fill="none"/>
      <path 
    // purple
    strokeLinecap="round" id="path6" d={"m 0,115.6622 h".concat(leftTail, " a 65,65 0 0 0 62.7852,-48.176765 5,5 0 0 1 4.8297,-3.705905 h").concat(rightTail)} stroke="#AF4FC0" strokeWidth="9" fill="none"/>
    </svg>);
}
