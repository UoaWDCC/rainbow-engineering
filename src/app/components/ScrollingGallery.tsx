import React from "react";

interface ScrollingGalleryProps {
  images: {
    src: string,
    name: string,
  }[];
}

export default function ScrollingGallery( { images }: ScrollingGalleryProps) {
  return (
    <div className="scrolling-gallery-wrapper">
        <div className="wrapper">
            <div className="images">
                {images.map(({src, name}, idx) => (
                    <div className="pictures" key={src + '-' + idx}>
                        <img className="scroll-pictures" src={src} alt={name} />
                    </div>
                ))}
            </div>
            <div className="images">
                {images.map(({src, name}, idx) => (
                    <div className="pictures" key={src + '-dup-' + idx}>
                        <img className="scroll-pictures" src={src} alt={name} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}