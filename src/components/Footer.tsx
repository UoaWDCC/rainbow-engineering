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
    <div className="absolute top-[60%] w-43 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[65%] w-47 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[68%] w-54 h-100 bg-[#d0b7f4] z-0"></div>
    <div className="absolute top-[69%] w-500 h-100 bg-[#d0b7f4] z-0"></div>


     <div className="relative z-30 flex">
  <img
    src="/rainbow_head.png"
    alt="Rainbow Footer Banner"
    className="relative w-56 object-contain -mb-[6px]"
  />



  <div className="mt-19.5 -ml-[1px] w-full">
    <svg
      viewBox="0 0 500 80"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[80px]"
      preserveAspectRatio="none"
    >
      <rect y="9.7" width="500" height="10.4" fill="#f35354" />
      <rect y="22.2" width="500" height="10.1" fill="#fcb353" />
      <rect y="34.1" width="500" height="10" fill="#fcf474" />
      <rect y="45.7" width="500" height="9.8" fill="#6bbc8c" />
      <rect y="57.5" width="500" height="9.9" fill="#638cec" />
      <rect y="69.4" width="500" height="9.8" fill="#ac4cc4" />
    </svg>
  </div>

</div>


<div className="bg-[#d0b7f4] text-[#8955d2] text-center relative z-0">
  <div>
  </div>
  <div className="grid font-['Montserrat'] font-bold text-[9px] grid-cols-2 justify-items-center gap-y-1 lg:gap-x-120 max-w-3xl mx-auto">

    <div className="flex pr-20 -space-x-3">
        <img
    src="/instagram.png"
    alt="Instagram Logo"
    className="w-12 object-contain"
  />
          <img
    src="/mail.png"
    alt="Mail Logo"
    className="w-16.5 object-contain"
  />
          <img
    src="/LinkedIn.png"
    alt="LinkedIn Logo"
    className="w-15.5 object-contain -ml-2"
  />
          <img
    src="/facebook.png"
    alt="Facebook Logo"
    className="w-11.5 object-contain"
  />

    </div>
    <div className="mt-7">rainbowengineering.uoa@gmail.com</div>
  </div>
</div>

    </footer>
  );
}

