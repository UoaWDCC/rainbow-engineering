import React from "react";

interface BannerProps {
  images: {
    src: string,
    name: string,
  }[];
}

export default function Banner( { images }: BannerProps) {
  return (
    <div className="banner-wrapper">
        <div className="wrapper">
            <div className="images">
                {images.map(({src, name}) => (
                    <div className="pictures">
                        <img className="scroll-pictures" src={src} alt={name} />
                    </div>
                ))}
            </div>
            <div className="images">
                {images.map(({src, name}) => (
                    <div className="pictures">
                        <img className="scroll-pictures" src={src} alt={name} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}