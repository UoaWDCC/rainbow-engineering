import React from "react";
import Image from 'next/image'

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
                        <Image
                          src={src}
                          alt={name}
                          width={280}
                          height={288}
                          className="scroll-pictures"
                        />
                    </div>
                ))}
            </div>
            <div className="images">
                {images.map(({src, name}, idx) => (
                    <div className="pictures" key={src + '-dup-' + idx}>
                        <Image
                          src={src}
                          alt={name}
                          width={280}
                          height={288}
                          className="scroll-pictures"
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}