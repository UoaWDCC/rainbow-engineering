import BannerAnimation from "./BannerAnimation";

interface BannerProps {
  title: string;
}

export default function Banner({ title }: BannerProps) {
  return (
    <>
      <div id="banner" className="bg-[#F1EAFB] w-full px-4 py-10 relative -z-10">
        <h1 className="text-5xl md:text-6xl text-[#5f249f] font-bold font-[Montserrat] py-12 lg:py-10 z-10">
          {title}
        </h1>
      </div>

      <BannerAnimation />
    </>
  );
}
