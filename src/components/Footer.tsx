import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">

<div className="absolute top-[30%] w-35 h-100 bg-[#d0b7f4] z-0"></div>
     <div className="absolute top-[35%] w-36 h-100 bg-[#d0b7f4] z-0"></div>
     <div className="absolute top-[39%] w-37 h-100 bg-[#d0b7f4] z-0"></div>
     <div className="absolute top-[46%] w-38 h-100 bg-[#d0b7f4] z-0"></div>
     <div className="absolute top-[53%] w-40 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[56%] w-41 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[58%] w-43 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[63%] w-47 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[65%] w-54 h-100 bg-[#d0b7f4] z-0"></div>


     <div className="relative z-30 flex">
  <img
    src="/rainbow_head.png"
    alt="Rainbow Footer Banner"
    className="relative w-56 object-contain -mb-[6px]"
  />

  <div className="mt-19.5 -ml-[8px] w-full">
    <svg
      viewBox="0 0 500 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[80px]"
      preserveAspectRatio="none"
    >
      <rect y="10" width="500" height="10.5" fill="#f35354" />
      <rect y="22.6" width="500" height="10.1" fill="#fcb353" />
      <rect y="34.6" width="500" height="10" fill="#fcf474" />
      <rect y="45.8" width="500" height="10.2" fill="#6bbc8c" />
      <rect y="57.8" width="500" height="10" fill="#638cec" />
      <rect y="69.8" width="500" height="9.8" fill="#ac4cc4" />
    </svg>
  </div>

</div>


<div className="bg-[#d0b7f4] text-[#8955d2] text-center p-8 pt-1 relative z-0">
  <div className="mb-4">
  </div>
  <div className="grid font-['Montserrat'] font-bold text-xs grid-cols-2 justify-items-center gap-y-1 lg:gap-x-200 max-w-3xl mx-auto">

    <div>logos</div>
    <div>rainbowengineering.uoa@gmail.com</div>
  </div>
</div>

    </footer>
  );
}

