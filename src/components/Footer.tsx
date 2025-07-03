import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">

     <div className="relative z-30 flex">
  <img
    src="/rainbow_head.png"
    alt="Rainbow Footer Banner"
    className="relative w-56 object-contain block shrink-0 -mb-[6px]"
  />
    <div className="flex flex-col justify-start shrink-0 mt-22 -ml-[6px]">
    <div className="h-[10.5px] mb-[1.8px] bg-[#f35354] w-[5000px]"></div> 
    <div className="h-[10.1px] mb-[1.8px] bg-[#fcb353] w-[5000px]"></div> 
    <div className="h-[10px] mb-[1.6px] bg-[#fcf474] w-[5000px]"></div>
    <div className="h-[10.2px] mb-[1.8px] bg-[#6bbc8c] w-[5000px]"></div>
    <div className="h-[10px] mb-[1.8px] bg-[#638cec] w-[5000px]"></div> 
    <div className="h-[9.8px] bg-[#ac4cc4] w-[5000px]"></div>
  </div>

</div>


<div className="bg-[#d0b7f4] text-[#8955d2] text-center p-8 pt-1 relative z-0">
  <div className="w-full max-w-3xl mx-auto text-left mb-9 my-2">
  </div>
  <div className="grid font-['Montserrat'] font-bold text-sm grid-cols-2 justify-items-center gap-y-1 gap-x-10 w-full max-w-3xl mx-auto">

    <div>logos</div>
    <div>rainbowengineering.uoa@gmail.com</div>
  </div>
</div>

    </footer>
  );
}

